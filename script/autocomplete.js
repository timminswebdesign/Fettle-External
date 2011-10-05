$(document).ready(function(){


    var availableTags = new Array;
    
    
    $.ajax({
        url: './gettables.php',
        success: function(data){
        
            var xml = $(data).find("object").get();
            
            $(xml).find("table").each(function(i){
                        
                availableTags[i] = $(this).text();

            });
            
            $(".owntbl").autocomplete({
                source: availableTags
            });
			
			
        }
        
    });

});


