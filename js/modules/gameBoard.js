define(['jquery', 'underscore', 'backbone',
  'text!templates/gameControls.html.erb',
  'text!templates/player.html.erb',
  'modules/gameController'
], function($, _, Backbone,
  GameControlsTemplate,
  PlayerTemplate,
  GameController
) {
  var Module = {};

  Module.Model = Backbone.Model.extend({
    defaults: {
    }
  });

  Module.View = Backbone.View.extend({
    id: 'game-board',

    initialize: function() {
      this.gameController = new GameController.View({
        player1: this.options.player1,
        mode: this.options.mode
      });
    }
  });

  return Module;
});

