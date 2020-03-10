/**
 * Citibank Communicator
 * Email Notifications Sender
 *
 * OpenAPI spec version: 0.0.1
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
  if (typeof module === "object" && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require("../ApiClient"));
  } else {
    // Browser globals (root is window)
    if (!root.CitibankCommunicator) {
      root.CitibankCommunicator = {};
    }
    root.CitibankCommunicator.EventUpdatesApi = factory(
      root.CitibankCommunicator.ApiClient
    );
  }
})(this, function(ApiClient) {
  "use strict";

  /**
   * EventUpdates service.
   * @module api/EventUpdatesApi
   * @version 0.0.1
   */

  /**
   * Constructs a new EventUpdatesApi.
   * @alias module:api/EventUpdatesApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;

    /**
     * Callback function to receive the result of the eventsEventUpdatesDelete operation.
     * @callback module:api/EventUpdatesApi~eventsEventUpdatesDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Unsubscribe user from event notification
     * Lorem Ipsum Dolor Sit Amet
     * @param {Number} eventId The event ID
     * @param {Number} userId The user ID
     * @param {module:api/EventUpdatesApi~eventsEventUpdatesDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.eventsEventUpdatesDelete = function(eventId, userId, callback) {
      var postBody = null;

      // verify the required parameter 'eventId' is set
      if (eventId === undefined || eventId === null) {
        throw new Error(
          "Missing the required parameter 'eventId' when calling eventsEventUpdatesDelete"
        );
      }

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error(
          "Missing the required parameter 'userId' when calling eventsEventUpdatesDelete"
        );
      }

      var pathParams = {};
      var queryParams = {
        eventId: eventId,
        userId: userId
      };
      var collectionQueryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        "/events/eventUpdates",
        "DELETE",
        pathParams,
        queryParams,
        collectionQueryParams,
        headerParams,
        formParams,
        postBody,
        authNames,
        contentTypes,
        accepts,
        returnType,
        callback
      );
    };

    /**
     * Callback function to receive the result of the eventsEventUpdatesPost operation.
     * @callback module:api/EventUpdatesApi~eventsEventUpdatesPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Subscribe user to event notification
     * Lorem Ipsum Dolor Sit Amet
     * @param {Number} eventId The event ID
     * @param {Number} userId The user ID
     * @param {module:api/EventUpdatesApi~eventsEventUpdatesPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.eventsEventUpdatesPost = function(eventId, userId, callback) {
      var postBody = null;

      // verify the required parameter 'eventId' is set
      if (eventId === undefined || eventId === null) {
        throw new Error(
          "Missing the required parameter 'eventId' when calling eventsEventUpdatesPost"
        );
      }

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error(
          "Missing the required parameter 'userId' when calling eventsEventUpdatesPost"
        );
      }

      var pathParams = {};
      var queryParams = {
        eventId: eventId,
        userId: userId
      };
      var collectionQueryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        "/events/eventUpdates",
        "POST",
        pathParams,
        queryParams,
        collectionQueryParams,
        headerParams,
        formParams,
        postBody,
        authNames,
        contentTypes,
        accepts,
        returnType,
        callback
      );
    };
  };

  return exports;
});