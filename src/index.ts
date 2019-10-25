import { ValidateOptions, ValidationMatch } from './interfaces';
import { US_DL } from './regex/us-dl';

/**
 * Validate a driver license number.
 *
 * @param dl Driver license number.
 * @param options Optional configuration options.
 */
export function validate(dl: string, options: ValidateOptions = {}) {
  const results: ValidationMatch[] = [];
  let states: string[];

  if (!options.states) {
    states = Object.keys(US_DL);
  } else if (!Array.isArray(options.states)) {
    states = [options.states];
  }

  states.forEach(state => {
    const info = US_DL[state];

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
