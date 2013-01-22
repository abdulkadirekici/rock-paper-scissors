require.config({
  baseUrl: '../js/',
  urlArgs: 'cb=' + Math.random(),
  paths: {
    jquery: 'libs/jquery/jquery.min',
    underscore: 'libs/underscore/underscore-min',
    backbone: 'libs/backbone/backbone-min',
    text: 'libs/requirejs-text/text',
    json3: 'libs/json3/lib/json3.min',
    jasmine: 'libs/jasmine/lib/jasmine-core/jasmine',
    'jasmine-html': 'libs/jasmine/lib/jasmine-core/jasmine-html',
    spec: '../spec/',
    templates: '../templates'
  },
  shim: {
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    jasmine: {
      exports: 'jasmine'
    },
    'jasmine-html': {
      deps: ['jasmine'],
      exports: 'jasmine'
    },
    app: [
      'backbone',
      'json3'
    ]
  }
});

require(['underscore', 'jquery', 'jasmine-html', 'app'], function(_, $, jasmine, app) {
  var jasmineEnv = jasmine.getEnv();
  jasmineEnv.updateInterval = 1000;

  var htmlReporter = new jasmine.HtmlReporter();

  jasmineEnv.addReporter(htmlReporter);

  jasmineEnv.specFilter = function(spec) {
    return htmlReporter.specFilter(spec);
  };

  var specs = [
    '../spec/SpecHelper',
    '../spec/WeaponSpec',
    '../spec/GameEngineSpec',
    '../spec/TraditionalGameSpec',
    '../spec/LizardSpockGameSpec',
    '../spec/PlayerSpec',
    '../spec/GameControllerSpec'
  ];


  $(function() {
    require(specs, function() {
      jasmineEnv.execute();
    });
  });
});

