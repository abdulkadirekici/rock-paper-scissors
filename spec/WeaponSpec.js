define(['jquery', 'underscore', 'backbone',
  'modules/weapon'
], function($, _, Backbone,
  Weapon
) {
  describe ('Weapon', function() {
    it ('Should have a default name', function() {
      var weapon = new Weapon.Model();
      var name = weapon.get('name');
      expect(name).toEqual(Weapon.Model.prototype.defaults.name);
    });

    it ('Should be able to beat something', function() {
      var paper = new Weapon.Model({
        name: 'Paper',
        beats: ['Rock']
      });

      var rock = new Weapon.Model({
        name: 'Rock',
        beats: ['Scissor']
      });

      expect(paper).toBeat(rock);
    });
  });
});

