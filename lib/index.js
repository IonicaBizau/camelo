// Dependencies
const ucFirstArray = require("uc-first-array")
    , reEscape = require("regex-escape")
    ;

// Constants
const DEFAULT_SPLIT = /[^a-zA-Z0-9]/g;

function dromedaryCase(input, regex, uc) {

    regex = regex || DEFAULT_SPLIT;

    var splits = null;

    if (Array.isArray(regex)) {
        regex = new RegExp(regex.map(reEscape));
    }

    splits = input.split(regex);

    if (uc) {
        return ucFirstArray(splits).join("");
    }

    return splits[0] + ucFirstArray(splits.slice(1)).join("");
}
