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
    }
  });

  Module.View = Player.View.extend({
    template: _.template(Template)
  });

  return Module;
});

