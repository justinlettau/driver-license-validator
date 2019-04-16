/**
 * Country formats.
 */
export interface CountryFormats {
  [index: string]: DriverLicenseFormat[];
}

/**
 * Driver license format.
 */
export interface DriverLicenseFormat {
  regex: RegExp;
  description: string;
}

/**
 * Validation match results.
 */
export interface ValidationMatch {
  state: string;
  description: string;
}
