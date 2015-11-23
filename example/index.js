// Dependencies
const camelo = require("../lib");

console.log(camelo("default behavior_using*strange|chars"));
// => defaultBehaviorUsingStrangeChars

console.log(camelo("handling_underscores but not spaces", "_"));
// => handlingUnderscores but not spaces

console.log(camelo("uppercase first char as well", " ", true));
// => UppercaseFirstCharAsWell

console.log(camelo("handling*asterisk:and:colons", ["*", ":"]));
// => handlingAsteriskAndColons
