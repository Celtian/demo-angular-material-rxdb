import { RxCollection, RxDocument, RxJsonSchema } from 'rxdb';

export type HeroDocType = {
  passportId: string;
  firstName: string;
  lastName: string;
  age?: number; // optional
};

export type HeroDocMethods = {
  scream: (v: string) => string;
};

export type HeroDocument = RxDocument<HeroDocType, HeroDocMethods>;

export type HeroCollectionMethods = {
  countAllDocuments: () => Promise<number>;
};

// and then merge all our types
export type HeroCollection = RxCollection<HeroDocType, HeroDocMethods, HeroCollectionMethods>;

export const heroSchema: RxJsonSchema<HeroDocType> = {
  title: 'human schema',
  description: 'describes a human being',
  version: 0,
  keyCompression: true,
  primaryKey: 'passportId',
  type: 'object',
  properties: {
    passportId: {
      type: 'string',
    },
    firstName: {
      type: 'string',
    },
    lastName: {
      type: 'string',
    },
    age: {
      type: 'integer',
    },
  },
  required: ['passportId', 'firstName', 'lastName'],
};

export const heroDocMethods: HeroDocMethods = {
  scream: function (this: HeroDocument, what: string) {
    return this.firstName + ' screams: ' + what.toUpperCase();
  },
};

export const heroCollectionMethods: HeroCollectionMethods = {
  countAllDocuments: async function (this: HeroCollection) {
    const allDocs = await this.find().exec();
    return allDocs.length;
  },
};
