# dromedary-case [![Support this project][donate-now]][paypal-donations]

Convert a string into camel case style by providing the separators.

## Installation

```sh
$ npm i dromedary-case
```

## Example

```js
// Dependencies
const camelCase = require("dromedary-case");

console.log(camelCase("default behavior_using*strange|chars"));
console.log(camelCase("using_underscores but not spaces", "_"));
console.log(camelCase("uppercase first char as well using_underscores but not spaces", "_", true));
console.log(camelCase("handling*asterisk:and:colons", ["*", ":"], true));
```

## Documentation

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

## License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md