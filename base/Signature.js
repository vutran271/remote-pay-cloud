/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

// Prototype.js required
require("prototype");
var base_Points = require("../base/Points");

  /**
  * @constructor
  */
  Signature = Class.create( {
    /**
    * Initialize the values for this.
    * @private
    */
    initialize: function() {
      this._class_ = Signature;
      this.strokes = undefined;
    },

    /**
    * Set the field value
    * A series of strokes representing a signature
    *
    * @param {Array.<Points>} strokes An array of 
    */
    setStrokes: function(strokes) {
      this.strokes = strokes;
    },

    /**
    * Get the field value
    * A series of strokes representing a signature
      * @return {Array.<Points>} An array of 
    */
    getStrokes: function() {
      return this.strokes;
    },
    getMetaInfo: function(fieldName) {
      var curclass = this._class_;
      do {
        var fieldMetaInfo = curclass._meta_.fields[fieldName];
        if(fieldMetaInfo) {
          return fieldMetaInfo;
        }
        curclass = curclass.superclass;
      } while(curclass);
      return null;
    },

    toString: function() {
      return JSON.stringify(this);
    }

  });

Signature._meta_ =  {fields:  {}};
Signature._meta_.fields["strokes"] = {};
Signature._meta_.fields["strokes"].type = Array;
Signature._meta_.fields["strokes"].elementType = base_Points;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = Signature;
}
