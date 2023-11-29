'use strict';


/**
 * Deletes an order
 * This path is used to delete an order with a matching id from the orders.json file
 *
 * id String The id of the order.
 * no response value expected for this operation
 **/
exports.delete_orders = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get the order data
 * This path is used to retrieve all the order data from the orders.json file
 *
 * no response value expected for this operation
 **/
exports.get_orders = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Add a new order
 * This path is used to add a new order to the orders.json file
 *
 * body Order A new order object
 * no response value expected for this operation
 **/
exports.new_order = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update the state of the order
 * This operation updates the `state` of an order with a matching id from the orders.json file.
 *
 * body String A state string (optional)
 * id String The id of the order.
 * no response value expected for this operation
 **/
exports.update_order = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

