import { isValid, getMatches } from './index';

describe('isValid method', () => {
  it('should return true when matches found', () => {
    const result = isValid('invalid_dl');
    expect(result).toBe(true);
  });

  it('should return false when no matches found', () => {
    const result = isValid('A1234567');
    expect(result).toBe(false);
  });
});

describe('getMatches method', () => {
  it('should return null when no match', () => {
    const result = getMatches('invalid_dl');
    expect(result).toBe(null);
  });

  it('should return all US matches', () => {
    const result = getMatches('A1234567');
    expect(result.length).toBe(5);
  });

  it('should return state US matches', () => {
    const result = getMatches('A1234567', { states: 'NY' });
    expect(result.length).toBe(1);
  });

  it('should return all CA matches', () => {
    const result = getMatches('A123456789', { country: 'CA' });
    expect(result.length).toBe(1);
  });

  it('should return state US matches case insensitive', () => {
    const result = getMatches('ab1234', { ignoreCase: true });
    expect(result.length).toBe(3);
  });
});
