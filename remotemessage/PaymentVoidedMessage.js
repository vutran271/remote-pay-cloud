/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

// Prototype.js required
require("prototype");
var remotemessage_Method = require("../remotemessage/Method");
var order_VoidReason = require("../order/VoidReason");
var remotemessage_Message = require("../remotemessage/Message");
var payments_Payment = require("../payments/Payment");

  /**
  * @constructor
  */
  PaymentVoidedMessage = Class.create(remotemessage_Message, {
    /**
    * Initialize the values for this.
    * @private
    */
    initialize: function($super) {
      $super();
      this._class_ = PaymentVoidedMessage;
      this.setMethod(remotemessage_Method["PAYMENT_VOIDED"]);
      this.payment = undefined;
      this.voidReason = undefined;
    },

    /**
    * Set the field value
    * A payment
    *
    * @param {Payment} payment 
    */
    setPayment: function(payment) {
      this.payment = payment;
    },

    /**
    * Get the field value
    * A payment
      * @return {Payment} 
    */
    getPayment: function() {
      return this.payment;
    },

    /**
    * Set the field value
    * @param {VoidReason} voidReason 
    */
    setVoidReason: function(voidReason) {
      this.voidReason = voidReason;
    },

    /**
    * Get the field value
    * @return {VoidReason} 
    */
    getVoidReason: function() {
      return this.voidReason;
    }
  });

PaymentVoidedMessage._meta_ =  {fields:  {}};
PaymentVoidedMessage._meta_.fields["payment"] = {};
PaymentVoidedMessage._meta_.fields["payment"].type = payments_Payment;
PaymentVoidedMessage._meta_.fields["voidReason"] = {};
PaymentVoidedMessage._meta_.fields["voidReason"].type = order_VoidReason;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = PaymentVoidedMessage;
}
