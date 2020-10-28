import { DriverLicenseFormat, ValidateOptions, ValidationMatch } from './interfaces';
/**
 * Validate a driver license number.
 *
 * @param dl Driver license number.
 * @param options Optional configuration options.
 */
export declare function validate(dl: string, options?: ValidateOptions): ValidationMatch[] | [] | null;
export declare function validateForState(dl: string, state: string, options?: ValidateOptions): boolean;
export declare function requirementsByState(states: string | string[], options?: ValidateOptions): {
    [key: string]: DriverLicenseFormat[];
};
