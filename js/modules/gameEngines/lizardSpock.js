define(['jquery', 'underscore', 'backbone',
  'modules/weapon',
  'modules/gameEngines/traditional'
], function($, _, Backbone,
  Weapon,
  Traditional
) {
  var Module = {};

  Module.Model = Traditional.Model.extend({
    initialize: function() {
      this._super('initialize');

      var lizard = new Weapon.Model({
        name: 'Lizard',
        beats: ['Spock', 'Paper']
      });

      var spock = new Weapon.Model({
        name: 'Spock',
        beats: ['Scissor', 'Rock']
      });

      this.addWeapon(lizard)
          .addWeapon(spock);

      // Updating rules:
      this.weaponByName('Rock').beats().push('Lizard');
      this.weaponByName('Paper').beats().push('Spock');
      this.weaponByName('Scissor').beats().push('Lizard');

      return this;
    }
  });

  Module.View = Traditional.View.extend({
    initialize: function() {
      this.model = new Module.Model();
    }
  });

  return Module;
});

