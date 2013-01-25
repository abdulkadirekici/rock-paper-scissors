require.config({
  paths: {
    jquery: 'libs/jquery/jquery.min',
    lodash: 'libs/lodash/lodash.underscore.min',
    backbone:  'libs/backbone/backbone-min',
    text: 'libs/requirejs-text/text',
    json3: 'libs/json3/lib/json3.min',
    templates: '../templates'
  },
  shim: {
    'backbone': {
      deps: ['lodash', 'jquery'],
      exports: 'Backbone'
    },
    'lodash': {
      exports: '_'
    },
    'app': [
      'backbone',
      'json3'
    ]
  },
  map: {
    '*': {
      'underscore': 'lodash'
    }
  }
});

require(['app'], function(app) {
  app.initialize();
}, function(err) {
  throw err;
});

