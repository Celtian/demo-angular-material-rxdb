/* eslint-disable @typescript-eslint/no-explicit-any */
import { readFileSync, writeFileSync } from 'fs-extra';
import { globStream } from 'glob';
import * as path from 'path';

interface AbstractUpdateLangConfig {
  encoding: BufferEncoding;
  defaultValue: string;
}

interface AbstractKeyStoreConfig {
  keyStore: Set<string>;
}

interface AbstractCwdConfig {
  cwd: string;
}

interface AbstractLangsConfig {
  langs: string | string[];
}

interface FindOccuranceConfig extends AbstractKeyStoreConfig {
  regex: RegExp[];
  fileContent: string;
}

interface UpdateLangConfig extends AbstractUpdateLangConfig, AbstractKeyStoreConfig {
  langPath: string;
}

interface UpdateLangsConfig
  extends AbstractUpdateLangConfig,
    AbstractKeyStoreConfig,
    AbstractCwdConfig,
    AbstractLangsConfig {}

interface ParserConfig {
  formula: (key: string) => string;
  type: 'single' | 'double' | 'both';
  coveredCases: string[];
}

interface MainConfig extends AbstractUpdateLangConfig, AbstractCwdConfig, AbstractLangsConfig {
  dryRun: boolean;
  source: string | string[];
  regex: {
    html: ParserConfig[];
    typescript: ParserConfig[];
  };
}

const flattenJson = (obj: any, parentKey: string = '', separator: string = '.'): Record<string, string> => {
  let result: Record<string, string> = {};

  for (const key in obj) {
    // eslint-disable-next-line no-prototype-builtins
    if (obj.hasOwnProperty(key)) {
      const newKey = parentKey ? `${parentKey}${separator}${key}` : key;

      if (typeof obj[key] === 'object' && obj[key] !== null) {
        const flattenedSubObj = flattenJson(obj[key] as any, newKey, separator);
        result = { ...result, ...flattenedSubObj };
      } else {
        result[newKey] = obj[key] as string;
      }
    }
  }

  return result;
};

const findOccurance = (config: FindOccuranceConfig): void => {
  for (const rx of config.regex) {
    let matchesMarker;
    while ((matchesMarker = rx.exec(config.fileContent)) !== null) {
      const key = matchesMarker.groups?.['content']?.trim();
      if (key) {
        config.keyStore.add(key);
      }
    }
  }
};

const updateLang = (config: UpdateLangConfig): void => {
  const langFileContent = readFileSync(config.langPath).toString();

  const flattenedLang = flattenJson(JSON.parse(langFileContent));

  const langKeyStore = new Map<string, string>();

  for (const [k, v] of Object.entries(flattenedLang)) {
    langKeyStore.set(k, v);
  }

  const result: Record<string, any> = {};

  for (const key of Array.from(config.keyStore).sort((a, b) => a.localeCompare(b, 'en'))) {
    const keys = key.split('.');
    let currentObj: Record<string, any> = result;

    for (let i = 0; i < keys.length; i++) {
      const currentKey = keys[i];
      currentObj = currentObj[currentKey] =
        currentObj[currentKey] || (i === keys.length - 1 ? langKeyStore.get(key) || config.defaultValue : {});
    }
  }

  writeFileSync(config.langPath, JSON.stringify(result, null, 2), {
    encoding: config.encoding,
  });
};

const updateLangs = (config: UpdateLangsConfig): void => {
  console.log('\n✔ Writing result into language files');

  const files: string[] = [];

  const langFilesStream = globStream(config.langs, {
    cwd: config.cwd,
  });

  langFilesStream.on('data', async (langPath) => {
    files.push(langPath);

    updateLang({
      defaultValue: config.defaultValue,
      encoding: config.encoding,
      keyStore: config.keyStore,
      langPath: path.join(config.cwd, langPath),
    });
  });

  langFilesStream.on('end', () => {
    console.log(`ℹ Keys were were updated in:\n`);

    console.table(files);

    console.log('\n🌵 Done! 🌵\n');
  });
};

const main = async (config: MainConfig): Promise<void> => {
  console.log('Starting Translation Files Build 👷🏗');

  console.log('\n✔ Extracting Template and Component Keys 🗝');

  const keyStore = new Set<string>();
  let filesCount = 0;

  const rxSingleQuotes = /'(?<content>([^'\s]|\\')+)'/;
  const rxDoubleQuotes = /"(?<content>([^"\s]|\\")+)"/;

  const filesStream = globStream(config.source, {
    cwd: config.cwd,
  });

  filesStream.on('data', async (filePath) => {
    filesCount++;
    const fileContent = readFileSync(path.join(config.cwd, filePath), {
      encoding: config.encoding,
    }).toString();

    const createRegex = (parser: ParserConfig): RegExp[] => {
      if (parser.type === 'single') {
        return [new RegExp(parser.formula(rxSingleQuotes.source), 'g')];
      } else if (parser.type === 'double') {
        return [new RegExp(parser.formula(rxDoubleQuotes.source), 'g')];
      }
      return [
        new RegExp(parser.formula(rxSingleQuotes.source), 'g'),
        new RegExp(parser.formula(rxDoubleQuotes.source), 'g'),
      ];
    };

    if (filePath.endsWith('.ts')) {
      findOccurance({
        regex: [...config.regex.typescript.map(createRegex).flat()],
        fileContent,
        keyStore,
      });
    } else if (filePath.endsWith('.html')) {
      findOccurance({
        regex: [...config.regex.html.map(createRegex).flat()],
        fileContent,
        keyStore,
      });
    }
  });

  filesStream.on('end', () => {
    console.log(`ℹ ${keyStore.size} keys were found in ${filesCount} files.`);

    if (!config.dryRun) {
      updateLangs({
        cwd: config.cwd,
        defaultValue: config.defaultValue,
        encoding: config.encoding,
        langs: config.langs,
        keyStore,
      });
    } else {
      console.log(`ℹ Dry run activated. Language files will not be updated.`);

      console.log('\n🌵 Done! 🌵\n');
    }
  });
};

main({
  dryRun: false,
  encoding: 'utf-8',
  defaultValue: '███',
  cwd: path.join(process.cwd(), 'src'),
  source: ['app/**/*.ts', 'app/**/*.html'],
  langs: ['assets/i18n/*.json'],
  regex: {
    html: [
      {
        formula: (key: string): string => `{{\\s*${key}\\s*\\|\\s*translate\\s*(:\\s*.*\\s*)?}}`,
        type: 'both',
        coveredCases: [
          `{{ 'uni.close' | translate }}`,
          `{{ "uni.close" | translate }}`,
          `{{ 'uni.close' | translate: variable }}`,
          `{{ "uni.close" | translate: variable }}`,
        ],
      },
      {
        formula: (key: string): string => `"${key}\\s*\\|\\s*translate\\s*(:\\s*.*\\s*)?"`,
        type: 'single',
        coveredCases: [`"'uni.close' | translate"`, `"'uni.close' | translate : variable"`],
      },
      {
        formula: (key: string): string => `'${key}\\s*\\|\\s*translate\\s*(:\\s*.*\\s*)?'`,
        type: 'double',
        coveredCases: [`'"uni.close" | translate'`, `'"uni.close" | translate : variable'`],
      },
    ],
    typescript: [
      {
        formula: (key: string): string => `_\\(\\s*${key}\\s*\\)`,
        type: 'both',
        coveredCases: [`_('uni.close')`, `_("uni.close")`],
      },
      {
        formula: (key: string): string => `translate\\.instant\\(\\s*${key}\\s*(,\\s*.*\\s*)?\\)`,
        type: 'both',
        coveredCases: [
          `translate.instant('uni.close')`,
          `translate.instant("uni.close")`,
          `translate.instant('uni.close', variable)`,
          `translate.instant("uni.close", variable)`,
        ],
      },
    ],
  },
});
