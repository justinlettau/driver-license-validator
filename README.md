[![NPM Version](https://badge.fury.io/js/js-rules-engine.svg)](https://badge.fury.io/js/driver-license-validator)
[![Build Status](https://travis-ci.org/justinlettau/driver-license-validator.svg?branch=master)](https://travis-ci.org/justinlettau/driver-license-validator)
[![Dev Dependency Status](https://david-dm.org/justinlettau/driver-license-validator/dev-status.svg)](https://david-dm.org/justinlettau/js-rules-engine?type=dev)
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

This package exports three functions

1. validate
2. validateForState
3. requirementsByState

## validate

```js
import { validate } from 'driver-license-validator';

validate('A1234567');
// => [
//   { description: '1 letter followed by 1-8 numbers', state: 'AZ' },
//   { description: '1 letter followed by 7 numbers', state: 'CA' },
//   { description: '1 letter followed by 5-9 numbers', state: 'MO' },
//   { description: '1 letter followed by 6-8 numbers', state: 'NE' },
//   { description: '1 letter followed by 7 numbers', state: 'NY' },
//   { description: '1 letter followed by 4-8 numbers', state: 'OH' }
// ]

validate('A1234567', { states: 'NY' });
// => [
//   { description: '1 letter followed by 7 numbers', state: 'NY' }
// ]

validate('A1234567', { states: ['NY', 'OH'] });
// => [
//   { description: '1 letter followed by 7 numbers', state: 'NY' },
//   { description: '1 letter followed by 4-8 numbers', state: 'OH' }
// ]

validate('A123456789', { country: 'CA' });
// => [
//   { description: '1 letter followed by 9 numbers', state: 'NL' }
// ]

validate('invalid_dl');
// => null
```

## validateForState

```js
import { validateForState } from 'driver-license-validator';

validateForState('A1234567', 'CO');
// => false

validateForState('A1234567', 'NY');
// => true

validateForState('invalid_dl');
// => false
```

## requirementsByState

```js
import { requirementsByState } from 'driver-license-validator';

requirementsByState('CO');
// => {
//  CO: [
//    { regex: /^[0-9]{9}$/, description: '9 numbers' },
//    {
//      regex: /^[A-Z]{1}[0-9]{3,6}$/,
//      description: '1 letter followed by 3-6 numbers'
//    },
//    {
//      regex: /^[A-Z]{2}[0-9]{2,5}$/,
//      description: '2 letters followed by 2-5 numbers'
//    }
//  ]
//}

requirementsByState(['WA', 'GA', 'CO']);
// => {
//  WA: [
//    {
//      regex: /^(?=.{12}$)[A-Z]{1,7}[A-Z0-9\\*]{4,11}$/,
//      description: '1-7 letters followed by any combination of letters, numbers, or "*" for a total of 12 characters'
//    }
//  ],
//  GA: [ { regex: /^[0-9]{7,9}$/, description: '7-9 numbers' } ],
//  CO: [
//    { regex: /^[0-9]{9}$/, description: '9 numbers' },
//    {
//      regex: /^[A-Z]{1}[0-9]{3,6}$/,
//      description: '1 letter followed by 3-6 numbers'
//    },
//    {
//      regex: /^[A-Z]{2}[0-9]{2,5}$/,
//      description: '2 letters followed by 2-5 numbers'
//    }
//  ]
//}
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
