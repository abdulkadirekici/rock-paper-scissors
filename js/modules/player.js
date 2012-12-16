define(['jquery', 'underscore', 'backbone',
  'modules/player'
], function($, _, Backbone,
  Player
) {
  var Module = {};

  Module.Model = Backbone.Model.extend({
    defaults: {
      chosenWeapon: null
    },

    chooseWeapon: function(weapon) {
      this.set({ chosenWeapon: weapon });
    },

    chosenWeapon: function() {
      return this.get('chosenWeapon');
    },

    type: function() {
      return this.get('type');
    }
  });

  Module.View = Backbone.View.extend({
  });

  return Module;
});

