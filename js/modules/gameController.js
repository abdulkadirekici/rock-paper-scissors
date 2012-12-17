define(['jquery', 'underscore', 'backbone',
  'modules/gameEngines/traditional',
  'modules/gameEngines/lizardSpock',
  'modules/player/cpu',
  'modules/player/human'
], function($, _, Backbone,
  Traditional,
  LizardSpock,
  CPU,
  Human
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
      console.log('p: ',player);
      if (player === 'cpu') {
        this.player1 = new CPU.View();
      } else {
        this.player1 = new Human.View({
          weapons: this.gameEngine.weapons()
        });
      }
      this.player2 = new CPU.View();

      this.player1.setElement($('#player1'));
      this.player2.setElement($('#player2'));
    },

    renderPlayers: function() {
      console.log('controler');
      this.player1.render();
      this.player2.render();
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

