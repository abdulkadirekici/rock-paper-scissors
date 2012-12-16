define([
  'mainRouter'
], function(
  MainRouter
) {
  return function() {
    this.main = new MainRouter();
  };
});

