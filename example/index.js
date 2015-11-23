// Dependencies
const camelCase = require("../lib");

console.log(camelCase("default behavior_using*strange|chars"));
console.log(camelCase("using_underscores but not spaces", "_"));
console.log(camelCase("uppercase first char as well using_underscores but not spaces", "_", true));
console.log(camelCase("handling*asterisk:and:colons", ["*", ":"], true));
