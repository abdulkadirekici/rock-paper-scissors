define(['jquery', 'underscore', 'backbone'
], function($, _, Backbone
) {
  var Module = {};

  Module.Model = Backbone.Model.extend({
    defaults: {
      chosenWeapon1: null,
      chosenWeapon2: null,
      weapons: []
    },

    initialize: function() {
      this.set({ weapons: [] });
    },

    addWeapon: function(weapon) {
      var currentWeapons = this.get('weapons');
      currentWeapons.push(weapon);

      this.set('weapons', currentWeapons);

      return this;
    },

    weapons: function() {
      return this.get('weapons');
    },

    chooseWeapon1: function(weapon) {
      this.set({ chosenWeapon1: weapon });
    },

    chooseWeapon2: function(weapon) {
      this.set({ chosenWeapon2: weapon });
    },

    judge: function() {
      var chosenWeapon1 = this.get('chosenWeapon1');
      var chosenWeapon2 = this.get('chosenWeapon2');

      if (chosenWeapon1.beats(chosenWeapon2)) {
        return chosenWeapon1;
      } else if (chosenWeapon2.beats(chosenWeapon1)) {
        return chosenWeapon2;
      } else {
        throw 'Faulty rules: unable to determine who beats who between: ' + chosenWeapon1.name()  +' and '+ chosenWeapon2.name();
      }
    },

    getWeaponByName: function(key) {
      return _.find(this.weapons(), function(weapon) {
        return weapon.name() === key;
      });
    }
  });

  Module.View = Backbone.View.extend({

    addWeapon: function(weapon) {
      this.model.addWeapon(weapon);
    },

    chooseWeapon1: function(weapon) {
      this.model.chooseWeapon1(weapon);
    },

    chooseWeapon2: function(weapon) {
      this.model.chooseWeapon2(weapon);
    }
  });

  return Module;
});

