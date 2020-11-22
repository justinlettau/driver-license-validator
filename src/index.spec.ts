import { getMatches } from './index';

describe('getMatches method', () => {
  it('should return null when no match', () => {
    const result = getMatches('invalid_dl');
    expect(result).toEqual(null);
  });

  it('should return all US matches', () => {
    const result = getMatches('A1234567');
    expect(result.length).toEqual(5);
  });

  it('should return state US matches', () => {
    const result = getMatches('A1234567', { states: 'NY' });
    expect(result.length).toEqual(1);
  });

  it('should return all CA matches', () => {
    const result = getMatches('A123456789', { country: 'CA' });
    expect(result.length).toEqual(1);
  });

  it('should return state US matches case insensitive', () => {
    const result = getMatches('ab1234', { ignoreCase: true });
    expect(result.length).toEqual(3);
  });
});
