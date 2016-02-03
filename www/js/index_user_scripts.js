/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  Button */
    
    
        /* button  Button */
    $(document).on("click", ".uib_w_2", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#formulario"); 
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
