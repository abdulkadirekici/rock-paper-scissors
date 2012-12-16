define(['jquery', 'underscore', 'backbone'
], function($, _, Backbone
) {
  var Module = {};

  Module.Model = Backbone.Model.extend({
    defaults: {
      name: 'Generic weapon',
      beats: [],
      isBeatedBy: []
    }
  });

  Module.View = Backbone.View.extend({
  });

  return Module;
});

