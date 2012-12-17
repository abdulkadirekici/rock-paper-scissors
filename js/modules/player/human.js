define(['jquery', 'underscore', 'backbone',
  'text!templates/playerHuman.html.erb',
  'modules/player'
], function($, _, Backbone,
  Template,
  Player
) {
  var Module = {};

  Module.Model = Player.Model.extend({
    defaults: {
      type: 'human',
      name: 'You'
    }
  });

  Module.View = Player.View.extend({
    template: _.template(Template),

    cacheElements: function() {
      this.$weapons = this.$el.find('.weapon');
    },

    render: function() {
      this._super('render');
      this.cacheElements();
      this.renderWeapons();

      return this;
    },

    renderWeapons: function(weapons) {
      var weapons = this.options.weapons;

      var fragment = document.createDocumentFragment();
      weapons.forEach(function(weapon) {
        var name = weapon.name();
        fragment.appendChild(this.make('option', { value: name }, name));
      }, this);
      this.$weapons.append(fragment);
    }
  });

  return Module;
});

