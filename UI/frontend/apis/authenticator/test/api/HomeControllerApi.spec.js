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
    instance = new CitibankAuthenticator.HomeControllerApi();
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

  describe('HomeControllerApi', function() {
    describe('helloWorldUsingGET', function() {
      it('should call helloWorldUsingGET successfully', function(done) {
        //uncomment below and update the code to test helloWorldUsingGET
        //instance.helloWorldUsingGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
