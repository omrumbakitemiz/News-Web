import { Utils } from './utils';

describe('Utils', () => {
  it('should create an instance', () => {
    expect(new Utils()).toBeTruthy();
  });
});

describe('fixUserTimeZoneOffset', () => {
  it('should return null for null value', () => {
    const result = Utils.fixUserTimeZoneOffset(null);
    expect(result).toBeNull();
  });

  it('should return correct date', () => {
    const result = Utils.fixUserTimeZoneOffset(new Date('Tue Apr 30 2019 00:00:00 GMT+0300 (GMT+03:00)'));
    const expectedDate = new Date('Tue Apr 30 2019 00:00:00 GMT+0000 (GMT+00:00)');
    expect(result).toBe(expectedDate);
  });
});

