/**
 * Citibank Authenticator
 * Citibank Hackathon 2019 Authenticator
 *
 * OpenAPI spec version: 0.0.1
 * Contact: EMAIL
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.8
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CitibankAuthenticator);
  }
}(this, function(expect, CitibankAuthenticator) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CitibankAuthenticator.User();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('User', function() {
    it('should create an instance of User', function() {
      // uncomment below and update the code to test User
      //var instance = new CitibankAuthenticator.User();
      //expect(instance).to.be.a(CitibankAuthenticator.User);
    });

    it('should have the property accountType (base name: "accountType")', function() {
      // uncomment below and update the code to test the property accountType
      //var instance = new CitibankAuthenticator.User();
      //expect(instance).to.be();
    });

    it('should have the property dateOfBirth (base name: "dateOfBirth")', function() {
      // uncomment below and update the code to test the property dateOfBirth
      //var instance = new CitibankAuthenticator.User();
      //expect(instance).to.be();
    });

    it('should have the property emailAddress (base name: "emailAddress")', function() {
      // uncomment below and update the code to test the property emailAddress
      //var instance = new CitibankAuthenticator.User();
      //expect(instance).to.be();
    });

    it('should have the property firstName (base name: "firstName")', function() {
      // uncomment below and update the code to test the property firstName
      //var instance = new CitibankAuthenticator.User();
      //expect(instance).to.be();
    });

    it('should have the property gender (base name: "gender")', function() {
      // uncomment below and update the code to test the property gender
      //var instance = new CitibankAuthenticator.User();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new CitibankAuthenticator.User();
      //expect(instance).to.be();
    });

    it('should have the property lastName (base name: "lastName")', function() {
      // uncomment below and update the code to test the property lastName
      //var instance = new CitibankAuthenticator.User();
      //expect(instance).to.be();
    });

    it('should have the property organisationName (base name: "organisationName")', function() {
      // uncomment below and update the code to test the property organisationName
      //var instance = new CitibankAuthenticator.User();
      //expect(instance).to.be();
    });

    it('should have the property password (base name: "password")', function() {
      // uncomment below and update the code to test the property password
      //var instance = new CitibankAuthenticator.User();
      //expect(instance).to.be();
    });

    it('should have the property username (base name: "username")', function() {
      // uncomment below and update the code to test the property username
      //var instance = new CitibankAuthenticator.User();
      //expect(instance).to.be();
    });

  });

}));
