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
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.CitibankAuthenticator) {
      root.CitibankAuthenticator = {};
    }
    root.CitibankAuthenticator.HomeControllerApi = factory(root.CitibankAuthenticator.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * HomeController service.
   * @module api/HomeControllerApi
   * @version 0.0.1
   */

  /**
   * Constructs a new HomeControllerApi. 
   * @alias module:api/HomeControllerApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the helloWorldUsingGET operation.
     * @callback module:api/HomeControllerApi~helloWorldUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * helloWorld
     * @param {module:api/HomeControllerApi~helloWorldUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.helloWorldUsingGET = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/v1/ping', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
