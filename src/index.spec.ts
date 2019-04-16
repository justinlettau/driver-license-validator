import { validate } from './index';

describe('validate method', () => {
  it('should return null when no match', () => {
    const result = validate('INVALID_DL');
    expect(result).toEqual(null);
  });

  it('should return all matches when available', () => {
    const result = validate('A1234567');
    expect(result.length).toEqual(6);
  });

  it('should return state matches when available', () => {
    const result = validate('A1234567', 'NY');
    expect(result.length).toEqual(1);
  });
});
