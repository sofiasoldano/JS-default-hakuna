/* Agregar animaciones cuando un elemento es completamente visible en la pantalla */
function animateOnScroll(element, classAnimate, y_point){
	$(element).each( function(i){
        var bottom_of_object =  $(this).offset().top + $(this).outerHeight() - y_point;
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if( bottom_of_window > bottom_of_object ){
            $(this).addClass(classAnimate);
        }
    });
}

/* Abrir y cerrar elementos, con la clase "visible" */
function openElement(element, btnOpen, btnClose){
	$(btnOpen).click(function() {
          $(element).addClass("visible");              
    });

    $(btnClose).click(function() {
          $(element).removeClass("visible");              
    });

}

/* Agregar clases para cambiar estilos a partir de un determinado breakpoint */
 function responsiveMenu(element, breakpoint){
    if($( window ).width()>breakpoint){
        $(element).addClass("desktop");
        $(element).removeClass("mobile");
    }

    else{
        $(element).addClass("mobile");
        $(element).removeClass("desktop");
    }
}

/* Dropdowns en hover de un elemento */
function dropdownOnHover(element, dropdown){
	$(element).hover(function() {
         $(dropdown).removeClass("hidden"); 
     }, function(){
         drop = setTimeout(function(){$(dropdown).addClass("hidden")}, 100); 
     });
                                                             
    $(dropdown).hover(function() {
         $(dropdown).removeClass("hidden"); 
        clearTimeout(drop);
     }, function(){
         $(dropdown).addClass("hidden");
     });
}

/* Dropdowns en doble click de un elemento */
function dropdownOnDoubleClick(element, dropdown){
    $(element).click(function(event) {
        if($(this).parent().hasClass('prevent')){
            $(this).parent().removeClass('prevent');
            event.preventDefault();
            $(dropdown).removeClass("hidden");      
        } else {
            return true;
        }
    });
}
                          
/* Animacion de scroll */                   
function scrollTo(lnk, element, y_point, speed){
	$(lnk).click( function(){
		event.preventDefault();
		$('html, body').animate({
		    scrollTop: $(element).offset().top - y_point
		}, speed);
	});
}

/* Agrega la clase "selected" cuando se scrollea por un elemento*/
function selectedOnScroll(element, selected, y_point){
	$(window).scroll( function(){
	    var top_of_object =  $(element).offset().top - y_point;
	    var top_of_window = $(window).scrollTop();
	    var bottom_of_object =  $(element).offset().top + $(element).outerHeight() - y_point;

	    $(selected).removeClass('selected');
	    if( top_of_window > top_of_object){
	        $(selected).addClass('selected');
	    }
	    if( bottom_of_object < top_of_window ){
	       $(selected).removeClass('selected');
	    }
	});
}
 

/* Agrega la clase "fixed" cuando el alto de la pantalla coincide con el elemento*/
function fixedElement(element, selected, y_point){
    $(window).scroll( function(){
        $(element).each( function(i){
            var top_of_object =  $(this).offset().top - y_point;
            var top_of_window = $(window).scrollTop();

            if( top_of_window < top_of_object ){
                $(element).removeClass('fixed');
            }
            else{
                $(element).addClass('fixed');
            } 
        });
    });
}

/* Crea el mapa de Gogle Maps, definiendo la coordenada, el icono y el zoom

Agregar esto al footer para que funcione: <script src ="https://maps.googleapis.com/maps/api/js?key=(clave)callback=initMap" async defer></script>
clave: AIzaSyDpmnYAebwvGH6Y2T1Y0M_DBeSMiRAAkKE&

*/

function initMap(x, y, icon, zoom) {
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: zoom,
      center: {lat: x, lng: y}
    });

    var marker = new google.maps.Marker({
      position: map.getCenter(),
      icon: icon,
      map: map
    });
    
    marker.setMap(map);
}