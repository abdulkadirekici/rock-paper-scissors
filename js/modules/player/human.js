define(['jquery', 'underscore', 'backbone',
  'modules/player'
], function($, _, Backbone,
  Player
) {
  var Module = {};

  Module.Model = Player.Model.extend({
    defaults: {
      type: 'human'
    }
  });

  Module.View = Player.View.extend({
  });

  return Module;
});

