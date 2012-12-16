define(['jquery', 'underscore', 'backbone',
  'modules/gameEngine',
  'modules/weapon'
], function($, _, Backbone,
  GameEngine,
  Weapon
) {
  describe ('Game Engine', function() {
    var rock = new Weapon.Model({
      name: 'Rock',
      beats: ['Scissor']
    });

    var paper = new Weapon.Model({
      name: 'Paper',
      beats: ['Rock']
    });

    var scissor = new Weapon.Model({
      name: 'Scissor',
      beats: ['Paper']
    });

    it ('Should be able to add weapons', function() {
      var ge = new GameEngine.Model();

      var weaponsBefore = ge.get('weapons').length;
      ge.addWeapon(rock);
      ge.addWeapon(paper);

      var weaponsAfter = ge.get('weapons').length;

      expect(weaponsAfter).toBe(weaponsBefore + 2);
    });

    it ('Should judge right', function() {
      var ge = new GameEngine.Model();
      ge.chooseWeapon1(paper);
      ge.chooseWeapon2(rock);

      var winner = ge.judge();

      expect(winner).toEqual(paper);
    });
  });
});

