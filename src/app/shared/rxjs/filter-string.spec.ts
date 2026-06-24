import { of, toArray } from 'rxjs';

import { filterString } from './filter-string';

describe('filterString', () => {
  it('filters out empty strings', async () => {
    const result = await new Promise<string[]>((resolve) => {
      of('', 'post-1', '', 'post-2').pipe(filterString(), toArray()).subscribe(resolve);
    });

    expect(result).toEqual(['post-1', 'post-2']);
  });
});
