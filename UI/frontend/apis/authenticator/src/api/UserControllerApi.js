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
    module.exports = factory(require('../ApiClient'), require('../model/Principal'), require('../model/User'));
  } else {
    // Browser globals (root is window)
    if (!root.CitibankAuthenticator) {
      root.CitibankAuthenticator = {};
    }
    root.CitibankAuthenticator.UserControllerApi = factory(root.CitibankAuthenticator.ApiClient, root.CitibankAuthenticator.Principal, root.CitibankAuthenticator.User);
  }
}(this, function(ApiClient, Principal, User) {
  'use strict';

  /**
   * UserController service.
   * @module api/UserControllerApi
   * @version 0.0.1
   */

  /**
   * Constructs a new UserControllerApi. 
   * @alias module:api/UserControllerApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createNewUserUsingPOST operation.
     * @callback module:api/UserControllerApi~createNewUserUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * createNewUser
     * @param {module:model/User} user user
     * @param {module:api/UserControllerApi~createNewUserUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/User}
     */
    this.createNewUserUsingPOST = function(user, callback) {
      var postBody = user;

      // verify the required parameter 'user' is set
      if (user === undefined || user === null) {
        throw new Error("Missing the required parameter 'user' when calling createNewUserUsingPOST");
      }


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
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = User;

      return this.apiClient.callApi(
        '/accounts', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteUserUsingDELETE operation.
     * @callback module:api/UserControllerApi~deleteUserUsingDELETECallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * deleteUser
     * @param {Number} userId userId
     * @param {module:api/UserControllerApi~deleteUserUsingDELETECallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteUserUsingDELETE = function(userId, callback) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling deleteUserUsingDELETE");
      }


      var pathParams = {
      };
      var queryParams = {
        'userId': userId,
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
      var returnType = null;

      return this.apiClient.callApi(
        '/accounts', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the findUserByIdUsingGET operation.
     * @callback module:api/UserControllerApi~findUserByIdUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * findUserById
     * @param {Number} userId userId
     * @param {module:api/UserControllerApi~findUserByIdUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/User}
     */
    this.findUserByIdUsingGET = function(userId, callback) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling findUserByIdUsingGET");
      }


      var pathParams = {
      };
      var queryParams = {
        'userId': userId,
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
      var returnType = User;

      return this.apiClient.callApi(
        '/accounts', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the registerNewUserUsingPOST operation.
     * @callback module:api/UserControllerApi~registerNewUserUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * registerNewUser
     * @param {module:model/User} user user
     * @param {module:api/UserControllerApi~registerNewUserUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/User}
     */
    this.registerNewUserUsingPOST = function(user, callback) {
      var postBody = user;

      // verify the required parameter 'user' is set
      if (user === undefined || user === null) {
        throw new Error("Missing the required parameter 'user' when calling registerNewUserUsingPOST");
      }


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
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = User;

      return this.apiClient.callApi(
        '/register', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the resetPasswordUsingGET operation.
     * @callback module:api/UserControllerApi~resetPasswordUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * resetPassword
     * @param {String} emailAddress emailAddress
     * @param {Number} userId userId
     * @param {String} username username
     * @param {module:api/UserControllerApi~resetPasswordUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.resetPasswordUsingGET = function(emailAddress, userId, username, callback) {
      var postBody = null;

      // verify the required parameter 'emailAddress' is set
      if (emailAddress === undefined || emailAddress === null) {
        throw new Error("Missing the required parameter 'emailAddress' when calling resetPasswordUsingGET");
      }

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling resetPasswordUsingGET");
      }

      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling resetPasswordUsingGET");
      }


      var pathParams = {
      };
      var queryParams = {
        'emailAddress': emailAddress,
        'userId': userId,
        'username': username,
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
        '/accounts/reset-password', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateAccDetailUsingPUT operation.
     * @callback module:api/UserControllerApi~updateAccDetailUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * updateAccDetail
     * @param {module:model/User} user user
     * @param {Number} userId userId
     * @param {module:api/UserControllerApi~updateAccDetailUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/User}
     */
    this.updateAccDetailUsingPUT = function(user, userId, callback) {
      var postBody = user;

      // verify the required parameter 'user' is set
      if (user === undefined || user === null) {
        throw new Error("Missing the required parameter 'user' when calling updateAccDetailUsingPUT");
      }

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling updateAccDetailUsingPUT");
      }


      var pathParams = {
      };
      var queryParams = {
        'userId': userId,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = User;

      return this.apiClient.callApi(
        '/accounts', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateAccTypeUsingPUT operation.
     * @callback module:api/UserControllerApi~updateAccTypeUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * updateAccType
     * @param {module:model/String} accountType accountType
     * @param {Number} userId userId
     * @param {module:api/UserControllerApi~updateAccTypeUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/User}
     */
    this.updateAccTypeUsingPUT = function(accountType, userId, callback) {
      var postBody = null;

      // verify the required parameter 'accountType' is set
      if (accountType === undefined || accountType === null) {
        throw new Error("Missing the required parameter 'accountType' when calling updateAccTypeUsingPUT");
      }

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling updateAccTypeUsingPUT");
      }


      var pathParams = {
      };
      var queryParams = {
        'accountType': accountType,
        'userId': userId,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = User;

      return this.apiClient.callApi(
        '/accounts/account-type', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the userUsingGET operation.
     * @callback module:api/UserControllerApi~userUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Principal} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * user
     * @param {Object} opts Optional parameters
     * @param {String} opts.name 
     * @param {module:api/UserControllerApi~userUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Principal}
     */
    this.userUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'name': opts['name'],
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
      var returnType = Principal;

      return this.apiClient.callApi(
        '/accounts/me', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
