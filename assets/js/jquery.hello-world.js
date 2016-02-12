/**
 * Created by dev on 8/02/16.
 */


//jQuery plugins help keep your code DRY, and your global namespace nice and clean;


// this self-enclosed function makes sure that all the variables in our plugin will stay safely outside of
//the global space;
(function($){
    // jquery's way to allow you to define a plugin;
    $.fn.helloWorld = function( options ){

        //establish our default settings
        var settings = $.extend({
            text: "Hello World!",
            color: null,
            fontStyle: null,
            complete: null // a callback function; before invoking it, we need to make sure it's a function;
        }, options);


        // when we're invoking the plugin by attaching it to a jQuery selector, the object we're acting upon is
        //already a jQuery object, so we don't need to wrap it in the $(this) structure.
         return this.each(function( ){ // remember to return the results as it loops through the DOM
         // elements for users to chain another jQuery action to it.

            // once we start looping through each instance of the matching selector, we use the $(this) structure
            //as we would any time we ran our selectors through $.each();
            $(this).text( settings.text );

            if ( settings.color ){
               $(this).css('color', settings.color);
            }

            if (settings.fontStyle) {
                $(this).css('font-style', settings.fontStyle);
            }

            if ($.isFunction(settings.complete)){
                settings.complete.call( this ); // if the passed in argument for complete is a function, we call it;
            }

        });
    }

}(jQuery));