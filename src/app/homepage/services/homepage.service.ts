import { Injectable } from '@angular/core';

const myHeroSchema = {
  title: 'hero schema',
  version: 0,
  description: 'describes a simple hero',
  primaryKey: 'name',
  type: 'object',
  properties: {
    name: {
      type: 'string',
      maxLength: 100, // <- the primary key must have set maxLength
    },
    color: {
      type: 'string',
    },
    healthpoints: {
      type: 'number',
      minimum: 0,
      maximum: 100,
    },
    secret: {
      type: 'string',
    },
    birthyear: {
      type: 'number',
      final: true,
      minimum: 1900,
      maximum: 2050,
    },
    skills: {
      type: 'array',
      maxItems: 5,
      uniqueItems: true,
      items: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
          },
          damage: {
            type: 'number',
          },
        },
      },
    },
  },
  required: ['name', 'color'],
  encrypted: ['secret'],
  attachments: {
    encrypted: true,
  },
};

// https://github.com/NazarK0/rxdb-playground/blob/1d7d78a67bebf2f71a8f6d3412d7facc73c1cf7a/src/app/database/app.db.service.ts

@Injectable({
  providedIn: 'root',
})
export class HomepageService {}
