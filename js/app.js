define(['jquery', 'underscore', 'backbone',
  'router'
], function($, _, Backbone,
  Router
) {
  // Adding a ._super() method to Backbone objects:
  //
  // The super method takes two parameters: a method name
  // and an array of arguments to pass to the overridden method.
  // This is to optimize for the common case of passing 'arguments'.
  function _super(methodName, args) {
    // Keep track of how far up the prototype chain we have traversed,
    // in order to handle nested calls to _super.
    this._superCallObjects || (this._superCallObjects = {});
    var currentObject = this._superCallObjects[methodName] || this,
    parentObject  = findSuper(methodName, currentObject);
    this._superCallObjects[methodName] = parentObject;

    var result = parentObject[methodName].apply(this, args || []);
    delete this._superCallObjects[methodName];
    return result;
  }

  // Find the next object up the prototype chain that has a
  // different implementation of the method.
  function findSuper(methodName, childObject) {
    var object = childObject;
    while (object[methodName] === childObject[methodName]) {
      object = object.constructor.__super__;
    }
    return object;
  }

  _.each(['Model', 'Collection', 'View', 'Router'], function(klass) {
    Backbone[klass].prototype._super = _super;
  });

  /*
   * Adding helper #make method to views:
   */
  Backbone.View.prototype.make = function(tagName, attributes, content) {
    var el = document.createElement(tagName);
    if (attributes) _.each(attributes, function (value, key) {
      el.setAttribute(key, value);
    });
    if (content) $(el).append(content);

    return el;
  };

  // Application namespace
  window.App = window.App || {
    router: new Router()
  };

  var returnApp = {
    initialize: function () {
      Backbone.history.start();
    }
  };

  return returnApp;
});

