
# camelo

 [![Patreon](https://img.shields.io/badge/Support%20me%20on-Patreon-%23e6461a.svg)][patreon] [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/camelo.svg)](https://www.npmjs.com/package/camelo) [![Downloads](https://img.shields.io/npm/dt/camelo.svg)](https://www.npmjs.com/package/camelo) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Convert a string into camel case style by providing the separators.

## :cloud: Installation

```sh
$ npm i --save camelo
```


## :clipboard: Example



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

## :memo: Documentation


### `camelo(input, regex, uc)`
Converts an input string into camel-case style.

#### Params
- **String** `input`: The input string.
- **Regex|String|Array** `regex`: A regular expression, a string character or an array of strings used to split the input string.
- **Boolean** `uc`: If `true`, it will uppercase the first word as well.

#### Return
- **String** The camelized input value.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :moneybag: Donations

Another way to support the development of my open-source modules is
to [set up a recurring donation, via Patreon][patreon]. :rocket:

[PayPal donations][paypal-donations] are appreciated too! Each dollar helps.

Thanks! :heart:

## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`emojic`](https://github.com/IonicaBizau/emojic#readme)—Emoji in your Node.js command line apps.
 - [`fs-file-tree`](https://github.com/IonicaBizau/fs-file-tree#readme)—Get a directory file tree as an object.
 - [`js-templates.class-export`](https://github.com/IonicaBizau/js-templates.class-export#readme)—Generate a sample class export code.
 - [`js-templates.example`](https://github.com/IonicaBizau/js-templates.example#readme)—A template for example files.
 - [`js-templates.function-export`](https://github.com/IonicaBizau/js-templates.function-export#readme)—Generate a sample function export code.
 - [`tester-init`](https://github.com/IonicaBizau/tester-init#readme)—Init tests for tester.
 - [`tilda`](https://github.com/IonicaBizau/tilda)—Tiny module for building command line tools.
 - [`tilda-init`](https://github.com/IonicaBizau/tilda-init#readme)—Init cli applications.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[patreon]: https://www.patreon.com/ionicabizau
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
