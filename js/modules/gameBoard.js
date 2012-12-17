define(['jquery', 'underscore', 'backbone',
  'text!templates/gameControls.html.erb',
  'modules/gameController'
], function($, _, Backbone,
  GameControlsTemplate,
  GameController
) {
  var Module = {};

  Module.Model = Backbone.Model.extend({
    defaults: {
    }
  });

  Module.View = Backbone.View.extend({
    id: 'game-board',

    events: {
      'click go': 'go'
    },

    initialize: function() {
      this.gameController = new GameController.View({
        player1: this.options.player1,
        mode: this.options.mode
      });

      this.cacheElements();
      this.render();
    },

    cacheElements: function() {
      this.$gameControls = this.$el.find('#game-controls');
    },

    controlsTemplate : _.template(GameControlsTemplate),

    render: function() {
      this.$gameControls.empty().append(this.controlsTemplate());

      console.log('rende here');
      this.gameController.renderPlayers();
    },

    go: function() {

    }
  });

  return Module;
});

