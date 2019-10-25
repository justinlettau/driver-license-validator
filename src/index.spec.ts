import { validate } from './index';

describe('validate method', () => {
  it('should return null when no match', () => {
    const result = validate('INVALID_DL');
    expect(result).toEqual(null);
  });

  it('should return all matches when available', () => {
    const result = validate('A1234567');
    expect(result.length).toEqual(5);
  });

  it('should return state matches when available', () => {
    const result = validate('A1234567', { states: 'NY' });
    expect(result.length).toEqual(1);
  });

  it('should return state matches when available', () => {
    const result = validate('ab1234', { ignoreCase: true });
    expect(result.length).toEqual(3);
  });
});
