/**
 * Created by dev on 12/02/16.
 */
(function($){

    $.fn.niHao = function(options){

        var settings = $.extend({
            text: 'Hello, Nihao, Bienvenue, Ola, Aloha',
            color: null,
            fontSize: null,

            callBackFunction: null
        }, options);


        this.each(function(){
            var $this = $(this);

            $this.text(settings.text);

            if(settings.color) {
                $this.css('color', settings.color);
            }

            if(settings.fontSize) {
                $this.css('font-size', settings.fontSize);
            }

            if($.isFunction(settings.callBackFunction)){
                settings.callBackFunction.call(this);
            }
        });

        // allow jQuery chaining
        return this;

    }; // end niHao;
})(jQuery);