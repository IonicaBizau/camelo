// Dependencies
const camelCase = require("../lib");

console.log(camelCase("default behavior_using*strange|chars"));
// => defaultBehaviorUsingStrangeChars

console.log(camelCase("handling_underscores but not spaces", "_"));
// => handlingUnderscores but not spaces

console.log(camelCase("uppercase first char as well", " ", true));
// => UppercaseFirstCharAsWell

console.log(camelCase("handling*asterisk:and:colons", ["*", ":"]));
// => handlingAsteriskAndColons
