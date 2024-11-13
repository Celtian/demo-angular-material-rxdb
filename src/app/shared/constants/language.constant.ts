import { Language, LanguageDto } from '../dto/language.dto';

export const DEFAULT_LANGUAGE: Language = 'en';
export const AVAILABLE_LANGUAGES: Language[] = Object.values(LanguageDto);
export const LOCALES: Record<LanguageDto, string> = {
  cs: 'cs_CZ',
  en: 'en_US',
};
