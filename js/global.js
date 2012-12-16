define([
  'text!templates/shared/loadingSpinner.html.erb'
], function(
  LoadingSpinnerTemplate
) {
  window.getLoadingSpinner = function() {
    return LoadingSpinnerTemplate;
  };
});

