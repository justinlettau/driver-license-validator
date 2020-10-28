"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ca_dl_1 = require("./regex/ca-dl");
var us_dl_1 = require("./regex/us-dl");
/**
 * Validate a driver license number.
 *
 * @param dl Driver license number.
 * @param options Optional configuration options.
 */
function validate(dl, options) {
    if (options === void 0) { options = {}; }
    var results = [];
    var formats = countryFormats(options.country);
    var states = statesToValidate(options.states, formats);
    states.forEach(function (state) {
        var info = formats[state];
        if (!info) {
            throw new Error("Could not find state \"" + state + "\"!");
        }
        info.forEach(function (item) {
            var regex = item.regex, description = item.description;
            var pattern = options.ignoreCase ? new RegExp(regex, 'i') : regex;
            if (pattern.test(dl)) {
                results.push({
                    description: description,
                    state: state
                });
            }
        });
    });
    return results.length ? results : null;
}
exports.validate = validate;
function validateForState(dl, state, options) {
    if (options === void 0) { options = {}; }
    var results = [];
    var formats = countryFormats(options.country);
    var validationInfo = formats[state];
    if (!validationInfo) {
        throw new Error("Could not find state \"" + state + "\"!");
    }
    validationInfo.forEach(function (_a) {
        var regex = _a.regex, description = _a.description;
        if (validateByState(dl, regex, options.ignoreCase)) {
            results.push({
                description: description,
                state: state
            });
        }
    });
    return !!(results.length && results.length > 0);
}
exports.validateForState = validateForState;
function requirementsByState(states, options) {
    if (options === void 0) { options = {}; }
    var requirements = {};
    if (Array.isArray(states)) {
        states = states;
    }
    else {
        states = [states];
    }
    var formats = countryFormats(options.country);
    states.forEach(function (state) {
        var validationInfo = formats[state];
        if (!validationInfo) {
            throw new Error("Could not find state \"" + state + "\"!");
        }
        requirements[state] = validationInfo;
    });
    return requirements;
}
exports.requirementsByState = requirementsByState;
function countryFormats(country) {
    if (country === void 0) { country = null; }
    var formats;
    switch (country) {
        case 'CA':
            formats = ca_dl_1.CA_DL;
            break;
        case 'US':
        default:
            formats = us_dl_1.US_DL;
            break;
    }
    return formats;
}
function statesToValidate(stateOptions, formats) {
    var states;
    if (!stateOptions) {
        states = Object.keys(formats);
    }
    else if (!Array.isArray(stateOptions)) {
        states = [stateOptions];
    }
    return states;
}
function validateByState(dl, regex, ignoreCase) {
    var pattern = ignoreCase ? new RegExp(regex, 'i') : regex;
    return pattern.test(dl);
}
//# sourceMappingURL=index.js.map