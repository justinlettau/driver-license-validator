import { validate } from './index';

describe('validate method', () => {
  it('should return null when no match', () => {
    const result = validate('invalid_dl');
    expect(result).toEqual(null);
  });

  it('should return all US matches', () => {
    const result = validate('A1234567');
    expect(result.length).toEqual(5);
  });

  it('should return state US matches', () => {
    const result = validate('A1234567', { states: 'NY' });
    expect(result.length).toEqual(1);
  });

  it('should return all CA matches', () => {
    const result = validate('A123456789', { country: 'CA' });
    expect(result.length).toEqual(1);
  });

  it('should return state US matches case insensitive', () => {
    const result = validate('ab1234', { ignoreCase: true });
    expect(result.length).toEqual(3);
  });
});
