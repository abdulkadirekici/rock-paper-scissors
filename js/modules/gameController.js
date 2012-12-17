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
      this.model = new Module.Model({
        mode: this.options.mode
      });
      this.loadGameEngine();
      this.loadPlayers(this.options.player1);
    },

    loadGameEngine: function() {
      var mode = this.options.mode;
      this.model.set({ mode: mode });

      if (mode === 'lizard-spock') {
        this.gameEngine = new LizardSpock.View();
      } else {
        this.gameEngine = new Traditional.View();
      }
    },

    loadPlayers: function(player) {
      var player1;

      if (player === 'cpu') {
        player1 = new CPU.Model();
      } else {
        player1 = new Human.Model();
      }
      var player2 = new CPU.Model();

      this.players(player1, player2);
    },

    players: function(p1, p2) {
      this.model.set({
        player1: p1,
        player2: p2
      });
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

