(function ($) {

Backdrop.behaviors.formBlockSummaries = {
  attach: function (context) {
    // Provide the summary for the node type form.
    $('fieldset.formblock-node-type-settings-form', context).backdropSetSummary(function(context) {
      var vals = [];
      $('input:checked', context).next('label').each(function() {
        vals.push(Backdrop.checkPlain($(this).text()));
      });
      return vals.join(', ');
    });
  }
};

})(jQuery);
