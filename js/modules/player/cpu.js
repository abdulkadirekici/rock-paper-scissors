define(['jquery', 'underscore', 'backbone',
  'text!templates/playerCPU.html.erb',
  'modules/player'
], function($, _, Backbone,
  Template,
  Player
) {
  var Module = {};

  Module.Model = Player.Model.extend({
    defaults: {
      type: 'cpu',
      name: 'CPU'
    },

    weapon: function(weapon) {
      if (weapon) {
        this.set('weapon', weapon);
      }
      return this.get('weapon');
    }
  });

  Module.View = Player.View.extend({
    template: _.template(Template),

    initialize: function() {
      this.model = new Module.Model();
    },

    weapon: function(weapon) {
      return this.model.weapon(weapon);
    }
  });

  return Module;
});

