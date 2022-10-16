jQuery(document).ready(function($) {
    
    //Realizar a fixação do header
    window.onscroll = function() {
        if(window.pageYOffset > 250){
            $('#header').addClass("active");
        }
        else{
            $('#header').removeClass("active");
        }
    };

    //ISOTOPE
    let btns = $("#galeria .button-group button");
    btns.click(function(e){
        $("#galeria .button-group button").removeClass("active")
        e.target.classList.add("active");

        let selector = $(e.target).attr("data-filter");
        $("#galeria .grid").isotope({
            filter: selector,
        });
    });

    $(window).on("load", function(){
        $("#galeria .grid").isotope({
            filter: "*",
        });
    });

    //MAGNIFIC POPUP (IMAGENS DA GALERIA)
    $(".grid .popup-link").magnificPopup({
        type: "image",
        gallery: {
            enabled: true,
            tPrev: "Anterior",
            tNext: "Próxima",
            tCounter: "%curr% de %total%",
        }
    })
});