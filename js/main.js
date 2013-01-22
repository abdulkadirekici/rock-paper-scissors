require.config({
  paths: {
    jquery: 'libs/jquery/jquery.min',
    underscore: 'libs/underscore/underscore-min',
    backbone:  'libs/backbone/backbone-min',
    text: 'libs/requirejs-text/text',
    json3: 'libs/json3/lib/json3.min',
    templates: '../templates'
  },
  shim: {
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    'app': [
      'backbone',
      'json3'
    ]
  }
});

require(['app'], function(app) {
  app.initialize();
}, function(err) {
  throw err;
});

