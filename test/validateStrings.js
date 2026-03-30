import assert from "node:assert/strict";
import camelo from "../lib/index.js";

describe('Camelo', function () {
  describe('test 01', function () {
    it('should return a camel version of the string considering spaces and _', function () {
      const result = camelo("default behavior_using*strange|chars");
      assert.strictEqual("defaultBehaviorUsingStrangeChars", result);
    });

    it('should return a camel version of the string considering _ but not spaces', function () {
      const result = camelo("handling_underscores but not spaces", "_");
      assert.strictEqual("handlingUnderscores but not spaces", result);
    });

    it('should return a camel version of the string considering _ and spaces uppercasing the first character', function () {
      const result = camelo("uppercase first char as well", " ", true);
      assert.strictEqual("UppercaseFirstCharAsWell", result);
    });

    it('should return a camel version of the string considering _, spaces and skipping * and :', function () {
      const result = camelo("handling*asterisk:and:colons", ["*", ":"]);
      assert.strictEqual("handlingAsteriskAndColons", result);
    });
  });
});