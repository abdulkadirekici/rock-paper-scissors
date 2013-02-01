define(['jquery', 'underscore', 'backbone',
  'modules/gameBoard'
], function($, _, Backbone,
  GameBoard
) {
  var Router = Backbone.Router.extend({
    routes: {
      '': 'index',
      '!/:mode/:player-vs-cpu': 'index'
    },

    index: function(mode, player) {
      new GameBoard.View({
        mode: mode,
        player1: player
      });
    },

    toFragment: function(args) {
      if (!args.push) {
        args = Array.prototype.slice.apply(arguments);
      }
      return '#!/' + args.join('/');
    }
  });

  return Router;
});

