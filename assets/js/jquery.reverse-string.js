/**
 * Created by dev on 10/02/16.
 */
//a jquery plugin to reverse a string of text by Jun


(function($){
    // add a function to jQuery
    $.fn.reverseString = function( options){

        var settings = $.extend({
            minLength: 0,
            maxLength: 99
        }, options);

        return this.each(function(){

            var $this = $(this);
            var originalText = $this.text();
            var newText = "";
            var i = originalText.length - 1;

            if (originalText.length >= settings.minLength && originalText.length <= settings.maxLength) {
                for (i; i >= 0; i--){
                    newText += originalText.substr(i, 1)
                };
                $this.text(newText);
            }

        });
    };

})(jQuery);