'use strict';

var assert = require('assert');
var camelo = require("../lib");

describe('Camelo', function () {
  describe('test 01', function () {
    it('should return a camel version of the string considering spaces and _', function () {
      var result = camelo("default behavior_using*strange|chars");
      assert.strictEqual("defaultBehaviorUsingStrangeChars", result);
    });

    it('should return a camel version of the string considering _ but not spaces', function () {
      var result = camelo("handling_underscores but not spaces", "_");
      assert.strictEqual("handlingUnderscores but not spaces", result);
    });

    it('should return a camel version of the string considering _ and spaces uppercasing the first character', function () {
      var result = camelo("uppercase first char as well", " ", true);
      assert.strictEqual("UppercaseFirstCharAsWell", result);
    });

    it('should return a camel version of the string considering _, spaces and skipping * and :', function () {
      var result = camelo("handling*asterisk:and:colons", ["*", ":"]);
      assert.strictEqual("handlingAsteriskAndColons", result);
    });
  });
});