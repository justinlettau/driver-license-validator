import { validate, requirementsByState, validateForState } from './index';

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

describe('requirementsByState method', () => {
  it('should return requirements for one state', () => {
    const result = requirementsByState('CO');
    expect(result).toEqual({
      CO: [
        { regex: /^[0-9]{9}$/, description: '9 numbers' },
        {
          regex: /^[A-Z]{1}[0-9]{3,6}$/,
          description: '1 letter followed by 3-6 numbers'
        },
        {
          regex: /^[A-Z]{2}[0-9]{2,5}$/,
          description: '2 letters followed by 2-5 numbers'
        }
      ]
    });
  });

  it('should return requirements for an array of states', () => {
    const result = requirementsByState(['WA', 'GA', 'CO']);
    expect(result).toEqual({
      WA: [
        {
          regex: /^(?=.{12}$)[A-Z]{1,7}[A-Z0-9\\*]{4,11}$/,
          description:
            '1-7 letters followed by any combination of letters, numbers, or "*" for a total of 12 characters'
        }
      ],
      GA: [{ regex: /^[0-9]{7,9}$/, description: '7-9 numbers' }],
      CO: [
        { regex: /^[0-9]{9}$/, description: '9 numbers' },
        {
          regex: /^[A-Z]{1}[0-9]{3,6}$/,
          description: '1 letter followed by 3-6 numbers'
        },
        {
          regex: /^[A-Z]{2}[0-9]{2,5}$/,
          description: '2 letters followed by 2-5 numbers'
        }
      ]
    });
  });
});

describe('validateForState method', () => {
  it('returns false for an invalid dl for a specific state', () => {
    const result = validateForState('AB1331231233', 'CO');
    expect(result).toEqual(false);
  });

  it('returns true for a valid dl for a specific state', () => {
    const result = validateForState('A1234567', 'NY');
    expect(result).toEqual(true);
  });
});
