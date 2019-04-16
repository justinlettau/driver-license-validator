import { ValidationMatch } from './interfaces';
import { US_DL } from './regex/us-dl';

/**
 * Validate a driver license number.
 *
 * @param dl Driver license number.
 * @param states Optional state(s) to validate.
 */
export function validate(dl: string, states?: string | string[]) {
  const results: ValidationMatch[] = [];

  if (!states) {
    states = Object.keys(US_DL);
  } else if (!Array.isArray(states)) {
    states = [states];
  }

  states.forEach(state => {
    const info = US_DL[state];

    if (!info) {
      throw new Error(`Could not find state "${state}"!`);
    }

    info.forEach(item => {
      if (item.regex.test(dl)) {
        results.push({
          description: item.description,
          state
        });
      }
    });
  });

  return results.length ? results : null;
}
