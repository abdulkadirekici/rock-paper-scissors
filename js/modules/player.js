define(['jquery', 'underscore', 'backbone'
], function($, _, Backbone
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
    render: function() {
      this.$el.empty().append(this.template(this.model));

      return this;
    }
  });

  return Module;
});

