# camelo [![Support this project][donate-now]][paypal-donations]

Convert a string into camel case style by providing the separators.

## Installation

```sh
$ npm i camelo
```

## Example

```js
// Dependencies
const camelo = require("camelo");

console.log(camelo("default behavior_using*strange|chars"));
// => defaultBehaviorUsingStrangeChars

console.log(camelo("handling_underscores but not spaces", "_"));
// => handlingUnderscores but not spaces

console.log(camelo("uppercase first char as well", " ", true));
// => UppercaseFirstCharAsWell

console.log(camelo("handling*asterisk:and:colons", ["*", ":"]));
// => handlingAsteriskAndColons
```

## Documentation

### `camelo(input, regex, uc)`
Converts an input string into camel-case style.

#### Params
- **String** `input`: The input string.
- **Regex|String|Array** `regex`: A regular expression, a string character or an array of strings used to split the input string.
- **Boolean** `uc`: If `true`, it will uppercase the first word as well.

#### Return
- **String** The camelized input value.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

## License

MIT © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
