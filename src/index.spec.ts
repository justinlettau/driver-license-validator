import { isValid, getMatches } from './index';

const state_fixture: StateTestFormat = {
  AL: [
    {
      description: '7-8 numbers',
      sample: ['1234567', '12345678'],
    },
  ],
  AK: [
    {
      description: '7 numbers',
      sample: ['1234567'],
    },
  ],
  AZ: [
    {
      description: '1 letter followed by 8-9 numbers',
      sample: ['A12345678', 'A123456789'],
    },
    {
      description: '2 letters followed by 2-5 numbers',
      sample: ['AB12', 'AB123', 'AB1234', 'AB12345'],
    },
    {
      description: '9 numbers',
      sample: ['123456789'],
    },
  ],
  AR: [
    {
      description: '9 numbers',
      sample: ['123456789'],
    },
  ],
  CA: [
    {
      description: '1 letter followed by 7 numbers',
      sample: ['A1234567'],
    },
  ],
  CO: [
    {
      description: '9 numbers',
      sample: ['123456789'],
    },
    {
      description: '1 letter followed by 3-6 numbers',
      sample: ['A123', 'A1234', 'A12345', 'A123456'],
    },
    {
      description: '2 letters followed by 2-5 numbers',
      sample: ['AB12', 'AB123', 'AB1234', 'AB12345'],
    },
  ],
  CT: [
    {
      description: '9 numbers',
      sample: ['123456789'],
    },
  ],
  DE: [
    {
      description: '7 numbers',
      sample: ['1234567'],
    },
  ],
  DC: [
    {
      description: '7 numbers',
      sample: ['1234567'],
    },
    {
      description: '9 numbers',
      sample: ['123456789'],
    },
  ],
  FL: [
    {
      description: '1 letter followed by 12 numbers',
      sample: ['A123456789012'],
    },
  ],
  GA: [
    {
      description: '7-9 numbers',
      sample: ['1234567', '12345678', '123456789'],
    },
  ],
  HI: [
    {
      description: '1 letter followed by 8 numbers',
      sample: ['A12345678'],
    },
    {
      description: '9 numbers',
      sample: ['123456789'],
    },
  ],
  ID: [
    {
      description: '2 letters followed by 6 numbers followed by 1 letter',
      sample: ['AA123456Z'],
    },
    {
      description: '9 Numbers',
      sample: ['123456789'],
    },
  ],
  IL: [
    {
      description: '1 letter followed by 11-12 numbers',
      sample: ['A123456789012', 'A12345678901'],
    },
  ],
  IN: [
    {
      description: '1 letter followed by 9 numbers',
      sample: ['A123456789'],
    },
    {
      description: '9-10 numbers',
      sample: ['123456789', '1234567890'],
    },
  ],
  IA: [
    {
      description: '9 numbers',
      sample: ['123456789'],
    },
    {
      description: '3 numbers followed by 2 letters followed by 4 numbers',
      sample: ['123AA1234'],
    },
  ],
  KS: [
    {
      description: '1 letter then 1 number then 1 letter then 1 number then 1 letter',
      sample: ['A1B2C'],
    },
    {
      description: '1 letter followed by 8 numbers',
      sample: ['A12345678'],
    },
    {
      description: '9 numbers',
      sample: ['123456789'],
    },
  ],
  KY: [
    {
      description: '1 letter followed by 8-9 numbers',
      sample: ['A12345678', 'A123456789'],
    },
    {
      description: '9 numbers',
      sample: ['123456789'],
    },
  ],
  LA: [
    {
      description: '9 numbers',
      sample: ['123456789'],
    },
  ],
  ME: [
    {
      description: '7 numbers',
      sample: ['1234567'],
    },
    {
      description: '7 numbers followed by 1 letter',
      sample: ['1234567A'],
    },
    {
      description: '8 numbers',
      sample: ['12345678'],
    },
  ],
  MD: [
    {
      description: '1 letter followed by 12 numbers',
      sample: ['A123456789012'],
    }
  ],
  MA: [
    {
      description: '1 letter followed by 8 numbers',
      sample: ['A12345678'],
    },
    {
      description: '9 numbers',
      sample: ['123456789'],
    },
  ],
  MI: [
    {
      description: '1 letter followed by 10 numbers',
      sample: ['A1234567890'],
    },
    {
      description: '1 letter followed by 12 numbers',
      sample: ['A123456789012'],
    },
  ],
  MN: [
    {
      description: '1 letter followed by 12 numbers',
      sample: ['A123456789012'],
    },
  ],
  MS: [
    {
      description: '9 numbers',
      sample: ['123456789'],
    },
  ],
  MO: [
    {
      description: '1 letter followed by 5-9 numbers',
      sample: ['A12345', 'A123456', 'A1234567', 'A12345678', 'A123456789'],
    },
    {
      description: '1 letter followed by 6 numbers followed by "R"',
      sample: ['A123456R'],
    },
    {
      description: '8 numbers followed by 2 letters',
      sample: ['12345678AA'],
    },
    {
      description: '9 numbers followed by 1 letter',
      sample: ['123456789A'],
    },
    {
      description: '9 numbers',
      sample: ['123456789'],
    },
  ],
  MT: [
    {
      description: '1 letter followed by 8 numbers',
      sample: ['A12345678'],
    },
    {
      description: '13 numbers',
      sample: ['1234567890123'],
    },
    {
      description: '9 numbers',
      sample: ['123456789'],
    },
    {
      description: '14 numbers',
      sample: ['12345678901234'],
    },
  ],
  NE: [
    {
      description: '1 letter followed by 6-8 numbers',
      sample: ['A123456', 'A1234567', 'A12345678'],
    },
  ],
  NV: [
    {
      description: '9-10 numbers',
      sample: ['123456789', '1234567890'],
    },
    {
      description: '12 numbers',
      sample: ['123456789012'],
    },
    {
      description: '"X" followed by 8 numbers',
      sample: ['X12345678'],
    },
  ],
  NH: [
    {
      description: '2 numbers followed by 3 letters followed by 5 numbers',
      sample: ['12AAA12345'],
    },
  ],
  NJ: [
    {
      description: '1 letter followed by 14 numbers',
      sample: ['C63812250002932'],
    },
  ],
  NM: [
    {
      description: '8-9 numbers',
      sample: ['12345678', '123456789'],
    },
  ],
  NY: [
    {
      description: '1 letter followed by 7 numbers',
      sample: ['A1234567'],
    },
    {
      description: '1 letter followed by 18 numbers',
      sample: ['A123456789012345678'],
    },
    {
      description: '8-9 numbers',
      sample: ['12345678', '123456789'],
    },
    {
      description: '16 numbers',
      sample: ['1234567890123456'],
    },
    {
      description: '8 letters',
      sample: ['ABCDEFGH'],
    },
  ],
  NC: [
    {
      description: '1-12 numbers',
      sample: [
        '1',
        '12',
        '123',
        '1234',
        '12345',
        '123456',
        '1234567',
        '12345678',
        '123456789',
        '1234567890',
        '12345678901',
        '123456789012',
      ],
    },
  ],
  ND: [
    {
      description: '3 letters followed by 6 numbers',
      sample: ['SHA942996'],
    },
    {
      description: '9 numbers',
      sample: ['123456789'],
    },
  ],
  OH: [
    {
      description: '1 letter followed by 4-8 numbers',
      sample: ['A1234', 'A12345', 'A123456', 'A1234567', 'A12345678'],
    },
    {
      description: '2 letters followed by 3-7 numbers',
      sample: ['AA123', 'AA1234', 'AA12345', 'AA123456', 'AA1234567'],
    },
    {
      description: '8 numbers',
      sample: ['12345678'],
    },
  ],
  OK: [
    {
      description: '1 letter followed by 9 numbers',
      sample: ['A123456789'],
    },
    {
      description: '9 numbers',
      sample: ['123456789'],
    },
  ],
  OR: [
    {
      description: '1-9 numbers',
      sample: ['1', '12', '123', '1234', '12345', '123456', '1234567', '12345678', '123456789'],
    },
  ],
  PA: [
    {
      description: '8 numbers',
      sample: ['12345678'],
    },
  ],
  RI: [
    {
      description: '7 numbers',
      sample: ['1234567'],
    },
    {
      description: '1 letter followed by 6 numbers',
      sample: ['A123456'],
    },
  ],
  SC: [
    {
      description: '5-11 numbers',
      sample: ['12345', '123456', '1234567', '12345678', '123456789', '1234567890', '12345678901'],
    },
  ],
  SD: [
    {
      description: '6-10 numbers',
      sample: ['123456', '1234567', '12345678', '123456789', '1234567890'],
    },
    {
      description: '12 numbers',
      sample: ['123456789012'],
    },
  ],
  TN: [
    {
      description: '7-9 numbers',
      sample: ['1234567', '12345678', '123456789'],
    },
  ],
  TX: [
    {
      description: '7-8 numbers',
      sample: ['1234567', '44505904'],
    },
  ],
  UT: [
    {
      description: '4-10 numbers',
      sample: ['1234', '12345', '123456', '1234567', '12345678', '123456789', '1234567890'],
    },
  ],
  VT: [
    {
      description: '8 numbers',
      sample: ['12345678'],
    },
    {
      description: '7 numbers followed by "A"',
      sample: ['1234567A'],
    },
  ],
  VA: [
    {
      description: '1 letter followed by 8-11 numbers',
      sample: ['A12345678', 'A123456789', 'A1234567890', 'A12345678901'],
    },
    {
      description: '9 numbers',
      sample: ['123456789'],
    },
  ],
  WA: [
    {
      description: '1-7 letters followed by any combination of letters, numbers, or "*" for a total of 12 characters',
      sample: [
        'A00000000000',
        'AB0000000000',
        'ABC000000000',
        'ABCD00000000',
        'ABCDE0000000',
        'ABCDEF000000',
        'ABCDEFG00000',
        'ABCDEFG*0000',
        'ABCDEFG**000',
        'ABCDEFG***00',
        'ABCDEFG****0',
        'ABCDEFG*****',
        'ABCDEFGA****',
        'ABCDEFGAB***',
        'ABCDEFGABC**',
        'ABCDEFGABCD*',
        'ABCDEFGABCDE',
      ],
    },
  ],
  WV: [
    {
      description: '7 numbers',
      sample: ['1234567'],
    },
    {
      description: '1-2 letters followed by 5-6 numbers',
      sample: ['A12345', 'A123456', 'AA12345', 'AA123456'],
    },
  ],
  WI: [
    {
      description: '1 letter followed by 13 numbers',
      sample: ['A1234567890123'],
    },
  ],
  WY: [
    {
      description: '9-10 numbers',
      sample: ['123456789', '1234567890'],
    },
  ],
};

describe('isValid method', () => {
  it('should return false when no matches found', () => {
    const result = isValid('invalid_dl');
    expect(result).toBe(false);
  });

  it('should return true when matches found', () => {
    const result = isValid('A1234567');
    expect(result).toBe(true);
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

  for (const state of Object.keys(state_fixture)) {
    describe(`Testing ${state} patterns`, function () {
      for (const pattern of state_fixture[state]) {
        describe(`${pattern.description}`, () => {
          for (const n of pattern.sample) {
            it(`${n} should match`, () => {
              const result = getMatches(n, { states: state });
              expect(result.length).toBe(1);
            });
          }
        });
      }
    });
  }

  it('invalid state should throw', () => {
    expect( () => getMatches( 'a1234567', { states: 'ZA' } )).toThrow();
  });

  it('states array should throw', () => {
    expect( () => getMatches('a1234567', { states: [ 'TX', 'AL' ] } )).toThrow();
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

export interface StateTestFormat {
  [index: string]: DriverLicenseTestFormat[];
}

export interface DriverLicenseTestFormat {
  description: string;
  sample: string | string[];
}
