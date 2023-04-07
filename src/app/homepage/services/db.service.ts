import { Injectable, isDevMode } from '@angular/core';
import { RxDatabase, RxJsonSchema, addRxPlugin, createRxDatabase } from 'rxdb';
import { RxDBAttachmentsPlugin } from 'rxdb/plugins/attachments';
import { RxDBDevModePlugin } from 'rxdb/plugins/dev-mode';
import { getRxStorageDexie } from 'rxdb/plugins/storage-dexie';

const dbSchema: RxJsonSchema<any> | any = {
  title: 'photo schema',
  version: 0,
  type: 'object',
  primaryKey: 'download_url',
  properties: {
    id: {
      type: 'string',
    },
    author: {
      type: 'string',
    },
    download_url: {
      type: 'string',
      primary: true,
      maxLength: 100,
    },
    height: {
      type: 'number',
    },
    url: {
      type: 'string',
    },
    width: {
      type: 'number',
    },
    alt: {
      type: 'string',
    },
  },
  attachments: {
    encrypted: false,
  },
};

async function loadRxDBPlugins(): Promise<any> {
  addRxPlugin(RxDBAttachmentsPlugin);

  if (isDevMode()) {
    addRxPlugin(RxDBDevModePlugin);
  }
}

loadRxDBPlugins();

@Injectable({
  providedIn: 'root',
})
export class RxdbProvider {
  private rxDatabase!: RxDatabase;

  public getDatabaseCollection(collectionName: string) {
    if (!this.rxDatabase) {
      throw new Error(
        'Database is not initialized. Please make sure the database is initialized before getting the collection'
      );
    }
    return this.rxDatabase[collectionName];
  }

  public async initDB(databaseName: string): Promise<RxDatabase> {
    if (this.rxDatabase && this.rxDatabase.name === databaseName && !this.rxDatabase.destroyed) {
      return this.rxDatabase;
    }

    this.rxDatabase = await createRxDatabase({
      name: databaseName, //'photo-lib',
      storage: getRxStorageDexie(),
      password: 'myLongAndStupidPassword',
    });

    await this.rxDatabase.addCollections({
      photos: {
        schema: dbSchema,
      },
    });

    return this.rxDatabase;
  }
}
