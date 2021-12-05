[![NPM Version](https://badge.fury.io/js/driver-license-validator.svg)](https://badge.fury.io/js/driver-license-validator)
[![CI](https://github.com/justinlettau/driver-license-validator/workflows/CI/badge.svg)](https://github.com/justinlettau/driver-license-validator/actions)
[![codecov](https://codecov.io/gh/justinlettau/driver-license-validator/branch/master/graph/badge.svg)](https://codecov.io/gh/justinlettau/driver-license-validator)

# Driver License Validator

Validate driver license numbers.
Formats based on [https://ntsi.com/drivers-license-format/](https://ntsi.com/drivers-license-format/).

# Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)

# Installation

```bash
npm install driver-license-validator --save
```

# Usage

```js
import { getMatches, isValid } from 'driver-license-validator';

isValid('A1234567');
// => true

isValid('invalid_dl');
// => false

getMatches('A1234567');
// => [
//   { description: '1 letter followed by 1-8 numbers', state: 'AZ' },
//   { description: '1 letter followed by 7 numbers', state: 'CA' },
//   { description: '1 letter followed by 5-9 numbers', state: 'MO' },
//   { description: '1 letter followed by 6-8 numbers', state: 'NE' },
//   { description: '1 letter followed by 7 numbers', state: 'NY' },
//   { description: '1 letter followed by 4-8 numbers', state: 'OH' }
// ]

getMatches('A1234567', { states: 'NY' });
// => [
//   { description: '1 letter followed by 7 numbers', state: 'NY' }
// ]

getMatches('A1234567', { states: ['NY', 'OH'] });
// => [
//   { description: '1 letter followed by 7 numbers', state: 'NY' },
//   { description: '1 letter followed by 4-8 numbers', state: 'OH' }
// ]

getMatches('A123456789', { country: 'CA' });
// => [
//   { description: '1 letter followed by 9 numbers', state: 'NL' }
// ]

getMatches('invalid_dl');
// => null
```

Options:

| Option       | Type                   | Description                    | Default |
| ------------ | ---------------------- | ------------------------------ | ------- |
| `country`    | `string`               | Country to use.                | `US`    |
| `states`     | `string` or `string[]` | State(s) to filter results to. | n/a     |
| `ignoreCase` | `boolean`              | True to ignore case.           | `false` |

# Development

```
npm install
npm run build
```
