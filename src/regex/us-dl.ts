import { CountryFormats } from '../interfaces';

/**
 * USA driver license formats.
 */
export const US_DL: CountryFormats = {
  AL: [
    {
      regex: /^[0-9]{1,7}$/,
      description: '1-7 numbers',
      translationKey: 'DRIVING_LICENSE_ONE_TO_SEVEN_NUMBERS_VALIDATION'
    }
  ],
  AK: [
    {
      regex: /^[0-9]{1,7}$/,
      description: '1-7 numbers',
      translationKey: 'DRIVING_LICENSE_ONE_TO_SEVEN_NUMBERS_VALIDATION'
    }
  ],
  AZ: [
    {
      regex: /^[A-Z]{1}[0-9]{1,8}$/,
      description: '1 letter followed by 1-8 numbers',
      translationKey: 'DRIVING_LICENSE_ONE_LETTER_FOLLOWED_BY_ONE_TO_EIGHT_NUMBERS_VALIDATION'
    },
    {
      regex: /^[A-Z]{2}[0-9]{2,5}$/,
      description: '2 letters followed by 2-5 numbers',
      translationKey: 'DRIVING_LICENSE_TWO_LETTERS_FOLLOWED_BY_TWO_TO_FIVE_NUMBERS_VALIDATION'
    },
    {
      regex: /^[0-9]{9}$/,
      description: '9 numbers',
      translationKey: 'DRIVING_LICENSE_NINE_NUMBERS_VALIDATION'
    }
  ],
  AR: [
    {
      regex: /^[0-9]{4,9}$/,
      description: '4-9 numbers',
      translationKey: 'DRIVING_LICENSE_FOUR_TO_NINE_NUMBERS_VALIDATION'
    }
  ],
  CA: [
    {
      regex: /^[A-Z]{1}[0-9]{7}$/,
      description: '1 letter followed by 7 numbers',
      translationKey: 'DRIVING_LICENSE_ONE_LETTER_FOLLOWED_BY_SEVEN_NUMBERS_VALIDATION'
    }
  ],
  CO: [
    {
      regex: /^[0-9]{9}$/,
      description: '9 numbers',
      translationKey: 'DRIVING_LICENSE_NINE_NUMBERS_VALIDATION'
    },
    {
      regex: /^[A-Z]{1}[0-9]{3,6}$/,
      description: '1 letter followed by 3-6 numbers',
      translationKey: 'DRIVING_LICENSE_ONE_LETTER_FOLLOWED_BY_THREE_TO_SEVEN_NUMBERS_VALIDATION'
    },
    {
      regex: /^[A-Z]{2}[0-9]{2,5}$/,
      description: '2 letters followed by 2-5 numbers',
      translationKey: 'DRIVING_LICENSE_TWO_LETTERS_FOLLOWED_BY_TWO_TO_FIVE_NUMBERS_VALIDATION'
    }
  ],
  CT: [
    {
      regex: /^[0-9]{9}$/,
      description: '9 numbers',
      translationKey: 'DRIVING_LICENSE_NINE_NUMBERS_VALIDATION'
    }
  ],
  DE: [
    {
      regex: /^[0-9]{1,7}$/,
      description: '1-7 numbers',
      translationKey: 'DRIVING_LICENSE_ONE_TO_SEVEN_NUMBERS_VALIDATION'
    }
  ],
  DC: [
    {
      regex: /^[0-9]{7}$/,
      description: '7 numbers',
      translationKey: 'DRIVING_LICENSE_SEVEN_NUMBERS_VALIDATION'
    },
    {
      regex: /^[0-9]{9}$/,
      description: '9 numbers',
      translationKey: 'DRIVING_LICENSE_NINE_NUMBERS_VALIDATION'
    }
  ],
  FL: [
    {
      regex: /^[A-Z]{1}[0-9]{12}$/,
      description: '1 letter followed by 12 numbers',
      translationKey: 'DRIVING_LICENSE_ONE_LETTER_FOLLOWED_BY_TWELVE_NUMBERS_VALIDATION'
    }
  ],
  GA: [
    {
      regex: /^[0-9]{7,9}$/,
      description: '7-9 numbers',
      translationKey: 'DRIVING_LICENSE_SEVEN_TO_NINE_NUMBERS_VALIDATION'
    }
  ],
  HI: [
    {
      regex: /^[A-Z]{1}[0-9]{8}$/,
      description: '1 letter followed by 8 numbers',
      translationKey: 'DRIVING_LICENSE_ONE_LETTER_FOLLOWED_BY_EIGHT_NUMBERS_VALIDATION'
    },
    {
      regex: /^[0-9]{9}$/,
      description: '9 numbers',
      translationKey: 'DRIVING_LICENSE_NINE_NUMBERS_VALIDATION'
    }
  ],
  ID: [
    {
      regex: /^[A-Z]{2}[0-9]{6}[A-Z]{1}$/,
      description: '2 letters followed by 6 numbers followed by 1 letter',
      translationKey: 'DRIVING_LICENSE_TWO_LETTERS_FOLLOWED_BY_SIX_NUMBERS_FOLLOWED_BY_ONE_LETTER_VALIDATION'
    },
    {
      regex: /^[0-9]{9}$/,
      description: '9 numbers',
      translationKey: 'DRIVING_LICENSE_NINE_NUMBERS_VALIDATION'
    }
  ],
  IL: [
    {
      regex: /^[A-Z]{1}[0-9]{11,12}$/,
      description: '1 letter followed by 11-12 numbers',
      translationKey: 'DRIVING_LICENSE_ONE_LETTER_FOLLOWED_BY_ELEVEN_TO_TWELVE_NUMBERS_VALIDATION'
    }
  ],
  IN: [
    {
      regex: /^[A-Z]{1}[0-9]{9}$/,
      description: '1 letter followed by 9 numbers',
      translationKey: 'DRIVING_LICENSE_ONE_LETTER_FOLLOWED_BY_NINE_NUMBERS_VALIDATION'
    },
    {
      regex: /^[0-9]{9,10}$/,
      description: '9-10 numbers',
      translationKey: 'DRIVING_LICENSE_NINE_TO_TEN_NUMBERS_VALIDATION'
    }
  ],
  IA: [
    {
      regex: /^[0-9]{9}$/,
      description: '9 numbers',
      translationKey: 'DRIVING_LICENSE_NINE_NUMBERS_VALIDATION'
    },
    {
      regex: /^[0-9]{3}[A-Z]{2}[0-9]{4}$/,
      description: '3 numbers followed by 2 letters followed by 4 numbers',
      translationKey: 'DRIVING_LICENSE_THREE_NUMBERS_FOLLOWED_BY_2_LETTERS_FOLLOWED_BY_4_NUMBERS_VALIDATION'
    }
  ],
  KS: [
    {
      regex: /^([A-Z]{1}[0-9]{1}){2}[A-Z]{1}$/,
      description: '1 letter then 1 number then 1 letter then 1 number then 1 letter',
      translationKey: 'DRIVING_LICENSE_ONE_LETTER_THEN_ONE_NUMBER_THEN_ONE_LETTER_THEN_ONE_NUMBERS_VALIDATION'
    },
    {
      regex: /^[A-Z]{1}[0-9]{8}$/,
      description: '1 letter followed by 8 numbers',
      translationKey: 'DRIVING_LICENSE_ONE_LETTER_FOLLOWED_BY_EIGHT_NUMBERS_VALIDATION'
    },
    {
      regex: /^[0-9]{9}$/,
      description: '9 numbers',
      translationKey: 'DRIVING_LICENSE_NINE_NUMBERS_VALIDATION'
    }
  ],
  KY: [
    {
      regex: /^[A-Z]{1}[0-9]{8,9}$/,
      description: '1 letter followed by 8-9 numbers',
      translationKey: 'DRIVING_LICENSE_ONE_LETTER_FOLLOWED_BY_EIGHT_TO_NINE_NUMBERS_VALIDATION'
    },
    {
      regex: /^[0-9]{9}$/,
      description: '9 numbers',
      translationKey: 'DRIVING_LICENSE_NINE_NUMBERS_VALIDATION'
    }
  ],
  LA: [
    {
      regex: /^[0-9]{1,9}$/,
      description: '1-9 numbers',
      translationKey: 'DRIVING_LICENSE_ONE_TO_NINE_NUMBERS_VALIDATION'
    }
  ],
  ME: [
    {
      regex: /^[0-9]{7}$/,
      description: '7 numbers',
      translationKey: 'DRIVING_LICENSE_SEVEN_NUMBERS_VALIDATION'
    },
    {
      regex: /^[0-9]{7}[A-Z]{1}$/,
      description: '7 numbers followed by 1 letter',
      translationKey: 'DRIVING_LICENSE_SEVEN_NUMBERS_FOLLOWED_BY_ONE_LETTER_VALIDATION'
    },
    {
      regex: /^[0-9]{8}$/,
      description: '8 numbers',
      translationKey: 'DRIVING_LICENSE_EIGHT_NUMBERS_VALIDATION'
    }
  ],
  MD: [
    {
      regex: /^[A-Z]{1}[0-9]{12}$/,
      description: '1 letter followed by 12 numbers',
      translationKey: 'DRIVING_LICENSE_ONE_LETTER_FOLLOWED_BY_TWELVE_NUMBERS_VALIDATION'
    }
  ],
  MA: [
    {
      regex: /^[A-Z]{1}[0-9]{8}$/,
      description: '1 letter followed by 8 numbers',
      translationKey: 'DRIVING_LICENSE_ONE_LETTER_FOLLOWED_BY_EIGHT_NUMBERS_VALIDATION'
    },
    {
      regex: /^[0-9]{9}$/,
      description: '9 numbers',
      translationKey: 'DRIVING_LICENSE_NINE_NUMBERS_VALIDATION'
    }
  ],
  MI: [
    {
      regex: /^[A-Z]{1}[0-9]{10}$/,
      description: '1 letter followed by 10 numbers',
      translationKey: 'DRIVING_LICENSE_ONE_LETTER_FOLLOWED_BY_TEN_NUMBERS_VALIDATION'
    },
    {
      regex: /^[A-Z]{1}[0-9]{12}$/,
      description: '1 letter followed by 12 numbers',
      translationKey: 'DRIVING_LICENSE_ONE_LETTER_FOLLOWED_BY_TWELVE_NUMBERS_VALIDATION'
    }
  ],
  MN: [
    {
      regex: /^[A-Z]{1}[0-9]{12}$/,
      description: '1 letter followed by 12 numbers',
      translationKey: 'DRIVING_LICENSE_ONE_LETTER_FOLLOWED_BY_TWELVE_NUMBERS_VALIDATION'
    }
  ],
  MS: [
    {
      regex: /^[0-9]{9}$/,
      description: '9 numbers',
      translationKey: 'DRIVING_LICENSE_NINE_NUMBERS_VALIDATION'
    }
  ],
  MO: [
    {
      regex: /^[A-Z]{1}[0-9]{5,9}$/,
      description: '1 letter followed by 5-9 numbers',
      translationKey: 'DRIVING_LICENSE_ONE_LETTER_FOLLOWED_BY_FIVE_TO_NINE_NUMBERS_VALIDATION'
    },
    {
      regex: /^[A-Z]{1}[0-9]{6}[R]{1}$/,
      description: '1 letter followed by 6 numbers followed by "R"',
      translationKey: 'DRIVING_LICENSE_ONE_LETTER_FOLLOWED_BY_SIX_NUMBERS_FOLLOWED_BY_R_VALIDATION'
    },
    {
      regex: /^[0-9]{8}[A-Z]{2}$/,
      description: '8 numbers followed by 2 letters',
      translationKey: 'DRIVING_LICENSE_EIGHT_NUMBERS_FOLLOWED_BY_TWO_LETTERS_VALIDATION'
    },
    {
      regex: /^[0-9]{9}[A-Z]{1}$/,
      description: '9 numbers followed by 1 letter',
      translationKey: 'DRIVING_LICENSE_NINE_NUMBERS_FOLLOWED_BY_ONE_LETTER_VALIDATION'
    },
    {
      regex: /^[0-9]{9}$/,
      description: '9 numbers',
      translationKey: 'DRIVING_LICENSE_NINE_NUMBERS_VALIDATION'
    }
  ],
  MT: [
    {
      regex: /^[A-Z]{1}[0-9]{8}$/,
      description: '1 letter followed by 8 numbers',
      translationKey: 'DRIVING_LICENSE_ONE_LETTER_FOLLOWED_BY_EIGHT_NUMBERS_VALIDATION'
    },
    {
      regex: /^[0-9]{13}$/,
      description: '13 numbers',
      translationKey: 'DRIVING_LICENSE_THIRTEEN_NUMBERS_VALIDATION'
    },
    {
      regex: /^[0-9]{9}$/,
      description: '9 numbers',
      translationKey: 'DRIVING_LICENSE_NINE_NUMBERS_VALIDATION'
    },
    {
      regex: /^[0-9]{14}$/,
      description: '14 numbers',
      translationKey: 'DRIVING_LICENSE_FOURTEEN_NUMBERS_VALIDATION'
    }
  ],
  NE: [
    {
      regex: /^[A-Z]{1}[0-9]{6,8}$/,
      description: '1 letter followed by 6-8 numbers',
      translationKey: 'DRIVING_LICENSE_ONE_LETTER_FOLLOWED_BY_SIX_TO_EIGHT_VALIDATION'
    }
  ],
  NV: [
    {
      regex: /^[0-9]{9,10}$/,
      description: '9-10 numbers',
      translationKey: 'DRIVING_LICENSE_NINE_TO_TEN_NUMBERS_VALIDATION'
    },
    {
      regex: /^[0-9]{12}$/,
      description: '12 numbers',
      translationKey: 'DRIVING_LICENSE_TWELVE_NUMBERS_VALIDATION'
    },
    {
      regex: /^[X]{1}[0-9]{8}$/,
      description: '"X" followed by 8 numbers',
      translationKey: 'DRIVING_LICENSE_X_FOLLOWED_BY_EIGHT_NUMBERS_VALIDATION'
    }
  ],
  NH: [
    {
      regex: /^[0-9]{2}[A-Z]{3}[0-9]{5}$/,
      description: '2 numbers followed by 3 letters followed by 5 numbers',
      translationKey: 'DRIVING_LICENSE_TWO_NUMBERS_FOLLOWED_BY_THREE_LETTERS_FOLLOWED_BY_FIVE_NUMBERS_VALIDATION'
    }
  ],
  NJ: [
    {
      regex: /^[A-Z]{1}[0-9]{14}$/,
      description: '1 letter followed by 14 numbers',
      translationKey: 'DRIVING_LICENSE_ONE_LETTER_FOLLOWED_BY_FOURTEEN_NUMBERS_VALIDATION'
    }
  ],
  NM: [
    {
      regex: /^[0-9]{8,9}$/,
      description: '8-9 numbers',
      translationKey: 'DRIVING_LICENSE_EIGHT_TO_NINE_NUMBERS_VALIDATION'
    }
  ],
  NY: [
    {
      regex: /^[A-Z]{1}[0-9]{7}$/,
      description: '1 letter followed by 7 numbers',
      translationKey: 'DRIVING_LICENSE_ONE_LETTER_FOLLOWED_BY_SEVEN_NUMBERS_VALIDATION'
    },
    {
      regex: /^[A-Z]{1}[0-9]{18}$/,
      description: '1 letter followed by 18 numbers',
      translationKey: 'DRIVING_LICENSE_ONE_LETTER_FOLLOWED_BY_EIGHTEEN_NUMBERS_VALIDATION'
    },
    {
      regex: /^[0-9]{8,9}$/,
      description: '8-9 numbers',
      translationKey: 'DRIVING_LICENSE_EIGHT_TO_NINE_NUMBERS_VALIDATION'
    },
    {
      regex: /^[0-9]{16}$/,
      description: '16 numbers',
      translationKey: 'DRIVING_LICENSE_SIXTEEN_NUMBERS_VALIDATION'
    },
    {
      regex: /^[A-Z]{8}$/,
      description: '8 letters',
      translationKey: 'DRIVING_LICENSE_EIGHT_LETTERS_VALIDATION'
    }
  ],
  NC: [
    {
      regex: /^[0-9]{1,12}$/,
      description: '1-12 numbers',
      translationKey: 'DRIVING_LICENSE_ONE_TO_TWELVE_NUMBERS_VALIDATION'
    }
  ],
  ND: [
    {
      regex: /^[A-Z]{3}[0-9]{6}$/,
      description: '3 letters followed by 6 numbers',
      translationKey: 'DRIVING_LICENSE_THREE_LETTERS_FOLLOWED_BY_SIX_NUMBERS_VALIDATION'
    },
    {
      regex: /^[0-9]{9}$/,
      description: '9 numbers',
      translationKey: 'DRIVING_LICENSE_NINE_NUMBERS_VALIDATION'
    }
  ],
  OH: [
    {
      regex: /^[A-Z]{1}[0-9]{4,8}$/,
      description: '1 letter followed by 4-8 numbers',
      translationKey: 'DRIVING_LICENSE_ONE_LETTER_FOLLOWED_BY_FOUR_TO_EIGHT_NUMBERS_VALIDATION'
    },
    {
      regex: /^[A-Z]{2}[0-9]{3,7}$/,
      description: '2 letters followed by 3-7 numbers',
      translationKey: 'DRIVING_LICENSE_TWO_LETTER_FOLLOWED_BY_THREE_TO_SEVEN_NUMBERS_VALIDATION'
    },
    {
      regex: /^[0-9]{8}$/,
      description: '8 numbers',
      translationKey: 'DRIVING_LICENSE_EIGHT_NUMBERS_VALIDATION'
    }
  ],
  OK: [
    {
      regex: /^[A-Z]{1}[0-9]{9}$/,
      description: '1 letter followed by 9 numbers',
      translationKey: 'DRIVING_LICENSE_ONE_LETTER_FOLLOWED_BY_NINE_NUMBERS_VALIDATION'
    },
    {
      regex: /^[0-9]{9}$/,
      description: '9 numbers',
      translationKey: 'DRIVING_LICENSE_NINE_NUMBERS_VALIDATION'
    }
  ],
  OR: [
    {
      regex: /^[0-9]{1,9}$/,
      description: '1-9 numbers',
      translationKey: 'DRIVING_LICENSE_ONE_TO_NINE_NUMBERS_VALIDATION'
    }
  ],
  PA: [
    {
      regex: /^[0-9]{8}$/,
      description: '8 numbers',
      translationKey: 'DRIVING_LICENSE_EIGHT_NUMBERS_VALIDATION'
    }
  ],
  RI: [
    {
      regex: /^[0-9]{7}$/,
      description: '7 numbers',
      translationKey: 'DRIVING_LICENSE_SEVEN_NUMBERS_VALIDATION'
    },
    {
      regex: /^[A-Z]{1}[0-9]{6}$/,
      description: '1 letter followed by 6 numbers',
      translationKey: 'DRIVING_LICENSE_ONE_LETTER_FOLLOWED_BY_SIX_NUMBERS_VALIDATION'
    }
  ],
  SC: [
    {
      regex: /^[0-9]{5,11}$/,
      description: '5-11 numbers',
      translationKey: 'DRIVING_LICENSE_FIVE_TO_ELEVEN_NUMBERS_VALIDATION'
    }
  ],
  SD: [
    {
      regex: /^[0-9]{6,10}$/,
      description: '6-10 numbers',
      translationKey: 'DRIVING_LICENSE_SIX_TO_TEN_NUMBERS_VALIDATION'
    },
    {
      regex: /^[0-9]{12}$/,
      description: '12 numbers',
      translationKey: 'DRIVING_LICENSE_TWELVE_NUMBERS_VALIDATION'
    }
  ],
  TN: [
    {
      regex: /^[0-9]{7,9}$/,
      description: '7-9 numbers',
      translationKey: 'DRIVING_LICENSE_SEVEN_TO_NINE_NUMBERS'
    }
  ],
  TX: [
    {
      regex: /^[0-9]{7,8}$/,
      description: '7-8 numbers',
      translationKey: 'DRIVING_LICENSE_SEVEN_TO_EIGHT_NUMBERS_VALIDATION'
    }
  ],
  UT: [
    {
      regex: /^[0-9]{4,10}$/,
      description: '4-10 numbers',
      translationKey: 'DRIVING_LICENSE_FOUR_TO_TEN_NUMBERS_VALIDATION'
    }
  ],
  VT: [
    {
      regex: /^[0-9]{8}$/,
      description: '8 numbers',
      translationKey: 'DRIVING_LICENSE_EIGHT_NUMBERS_VALIDATION'
    },
    {
      regex: /^[0-9]{7}[A]$/,
      description: '7 numbers followed by "A"',
      translationKey: 'DRIVING_LICENSE_ELEVEN_NUMBERS_FOLLOWED_BY_A_VALIDATION'
    }
  ],
  VA: [
    {
      regex: /^[A-Z]{1}[0-9]{9,11}$/,
      description: '1 letter followed by 9-11 numbers',
      translationKey: 'DRIVING_LICENSE_ONE_LETTER_FOLLOWED_BY_NINE_TO_ELEVEN_NUMBERS_VALIDATION'
    },
    {
      regex: /^[0-9]{9}$/,
      description: '9 numbers',
      translationKey: 'DRIVING_LICENSE_NINE_NUMBERS_VALIDATION'
    }
  ],
  WA: [
    {
      regex: /^(?=.{12}$)[A-Z]{1,7}[A-Z0-9\\*]{4,11}$/,
      description: '1-7 letters followed by any combination of letters, numbers, or "*" for a total of 12 characters',
      translationKey:
        'DRIVING_LICENSE_ONE_TO_SEVEN_LETTErS_FOLLOWED_BY_ANY_COMBINATION_OF_TOTAL_TWELVE_CHARACTERS_VALIDATION'
    }
  ],
  WV: [
    {
      regex: /^[0-9]{7}$/,
      description: '7 numbers',
      translationKey: 'DRIVING_LICENSE_SEVEN_NUMBERS_VALIDATION'
    },
    {
      regex: /^[A-Z]{1,2}[0-9]{5,6}$/,
      description: '1-2 letters followed by 5-6 numbers',
      translationKey: 'DRIVING_LICENSE_ONE_TO_TWO_LETTERS_FOLLOWED_BY_FIVE_TO_SIX_NUMBERS_VALIDATION'
    }
  ],
  WI: [
    {
      regex: /^[A-Z]{1}[0-9]{13}$/,
      description: '1 letter followed by 13 numbers',
      translationKey: 'DRIVING_LICENSE_ONE_LETTER_FOLLOWED_BY_THIRTEEN_NUMBERS_VALIDATION'
    }
  ],
  WY: [
    {
      regex: /^[0-9]{9,10}$/,
      description: '9-10 numbers',
      translationKey: 'DRIVING_LICENSE_NINE_TO_10_NUMBERS_VALIDATION'
    }
  ]
};
