define(['jquery', 'underscore', 'backbone'
], function($, _, Backbone
) {
  var Module = {};

  Module.Model = Backbone.Model.extend({
    defaults: {
      name: 'Generic weapon',
      beats: [],
      isBeatedBy: []
    },

    beats: function(otherWeapon) {
      return this.get('beats').indexOf(otherWeapon.get('name')) !== -1;
    }
  });

  Module.View = Backbone.View.extend({
  });

  return Module;
});

