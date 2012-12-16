define(['jquery', 'underscore', 'backbone',
  'modules/weapon'
], function($, _, Backbone,
  Weapon
) {
  describe('Weapon', function() {
    it("should have a default name", function() {
      var weapon = new Weapon.Model();
      var name = weapon.get('name');
      expect(name).toEqual(Weapon.Model.prototype.defaults.name);
    });
  });
});

