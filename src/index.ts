import { CountryFormats, DriverLicenseFormat, ValidateOptions, ValidationMatch } from './interfaces';
import { CA_DL } from './regex/ca-dl';
import { US_DL } from './regex/us-dl';

/**
 * Validate a driver license number.
 *
 * @param dl Driver license number.
 * @param options Optional configuration options.
 */
export function validate(dl: string, options: ValidateOptions = {}): ValidationMatch[] | [] | null {
  const results: ValidationMatch[] = [];
  const formats = countryFormats(options.country);
  const states = statesToValidate(options.states, formats);

  states.forEach(state => {
    const info = formats[state];

    if (!info) {
      throw new Error(`Could not find state "${state}"!`);
    }

    info.forEach(item => {
      const { regex, description } = item;
      const pattern = options.ignoreCase ? new RegExp(regex, 'i') : regex;

      if (pattern.test(dl)) {
        results.push({
          description,
          state
        });
      }
    });
  });

  return results.length ? results : null;
}

export function validateForState(dl: string, state: string, options: ValidateOptions = {}): boolean {
  const results: ValidationMatch[] = [];
  const formats = countryFormats(options.country);

  const validationInfo = formats[state];

  if (!validationInfo) {
    throw new Error(`Could not find state "${state}"!`);
  }

  validationInfo.forEach(({ regex, description }) => {
    if (validateByState(dl, regex, options.ignoreCase)) {
      results.push({
        description,
        state
      });
    }
  });

  return !!(results.length && results.length > 0);
}

export function requirementsByState(states: string | string[], options: ValidateOptions = {}) {
  const requirements: { [key: string]: DriverLicenseFormat[] } = {};
  if (Array.isArray(states)) {
    states = states;
  } else {
    states = [states];
  }

  const formats = countryFormats(options.country);

  states.forEach((state: string) => {
    const validationInfo = formats[state];

    if (!validationInfo) {
      throw new Error(`Could not find state "${state}"!`);
    }

    requirements[state] = validationInfo;
  });
  return requirements;
}

function countryFormats(country: string | null = null): CountryFormats {
  let formats: CountryFormats;
  switch (country) {
    case 'CA':
      formats = CA_DL;
      break;
    case 'US':
    default:
      formats = US_DL;
      break;
  }

  return formats;
}

function statesToValidate(stateOptions: string | string[], formats: CountryFormats) {
  let states: string[];

  if (!stateOptions) {
    states = Object.keys(formats);
  } else if (!Array.isArray(stateOptions)) {
    states = [stateOptions];
  }

  return states;
}

function validateByState(dl: string, regex: any, ignoreCase: boolean | null): boolean {
  const pattern = ignoreCase ? new RegExp(regex, 'i') : regex;
  return pattern.test(dl);
}
