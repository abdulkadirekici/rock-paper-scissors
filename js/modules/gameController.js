define(['jquery', 'underscore', 'backbone',
  'modules/gameEngines/traditional',
  'modules/gameEngines/lizardSpock'
], function($, _, Backbone,
  Traditional,
  LizardSpock
) {
  var Module = {};

  Module.Model = Backbone.Model.extend({
    defaults: {
      mode: 'traditional'
    },

    mode: function(mode) {
      if (mode) {
        this.set({ mode: mode });
      } else {
        return this.get('mode');
      }
    }
  });

  Module.View = Backbone.View.extend({
    initialize: function() {
      this.model = new Module.Model();
      this.loadGameEngine();
    },

    loadGameEngine: function() {
      var mode = this.model.mode();
      if (mode === 'traditional') {
        this.gameEngine = new Traditional.View();
      } else {
        this.gameEngine = new LizardSpock.View();
      }
    },

    pickRandomWeapon: function() {
      var weapons = this.gameEngine.model.weapons();
      var rnd = _.random(weapons.length -1);

      return weapons[rnd];
    },

    weaponByName: function(name) {
      return this.gameEngine.weaponByName(name);
    }
  });

  return Module;
});

