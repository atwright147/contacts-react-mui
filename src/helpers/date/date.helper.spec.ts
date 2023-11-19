import { describe, expect, it } from 'vitest';
import { isoToLocaleString } from './date.helper';

describe('date helper', () => {
  describe('isoToLocaleString()', () => {
    it('should convert ISO date string to locale string', () => {
      const result = isoToLocaleString('2022-01-01T12:00:00Z');
      expect(result).toBe('1 January 2022');
    });
  });
});
