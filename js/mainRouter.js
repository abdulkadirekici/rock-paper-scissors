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
      this.activeGameView = new GameBoard.View({
        mode: mode,
        player1: player
      });
    },

    activeView: null,

    changeActiveView: function(newActiveView) {
      this.closePreviousView();
      this.activeView = newActiveView;
    },

    closePreviousView: function() {
      if (this.activeView) this.activeView.close();
      this.activeView = null;
    },

    /**
     * Forces a "reload" of the current router.
     * First it closes the current view, freeing the resources,
     * and then re-triggers the navigate of the current url
     */
    reload: function() {
      this.closePreviousView();
      Backbone.history.loadUrl(Backbone.history.fragment);
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

