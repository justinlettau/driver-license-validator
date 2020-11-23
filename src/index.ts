import { CountryFormats, ValidateOptions, ValidationMatch } from './interfaces';
import { CA_DL } from './regex/ca-dl';
import { US_DL } from './regex/us-dl';

/**
 * Check if a driver license number matches any format.
 *
 * @param dl Driver license number.
 * @param options Optional configuration options.
 */
export function isValid(dl: string, options: ValidateOptions = {}) {
  const result = getMatches(dl, options);

  return result?.length > 0;
}

/**
 * Get all matching formats for a driver license number.
 *
 * @param dl Driver license number.
 * @param options Optional configuration options.
 */
export function getMatches(dl: string, options: ValidateOptions = {}) {
  const results: ValidationMatch[] = [];
  let formats: CountryFormats;
  let states: string[];

  switch (options.country) {
    case 'CA':
      formats = CA_DL;
      break;
    case 'US':
    default:
      formats = US_DL;
      break;
  }

  if (!options.states) {
    states = Object.keys(formats);
  } else if (!Array.isArray(options.states)) {
    states = [options.states];
  }

  states.forEach((state) => {
    const info = formats[state];

    if (!info) {
      throw new Error(`Could not find state "${state}"!`);
    }

    info.forEach((item) => {
      const { regex, description } = item;
      const pattern = options.ignoreCase ? new RegExp(regex, 'i') : regex;

      if (pattern.test(dl)) {
        results.push({
          description,
          state,
        });
      }
    });
  });

  return results.length ? results : null;
}
