jQuery(document).ready(function($) {
    
    //Realizar a fixação do header
    window.onscroll = function() {
        if(window.pageYOffset > 250){
            $('#header').addClass("active"); //BACKGROUND HEADER
            $('.navbar-brand').addClass("active-logo"); //LOGO DO SITE
            $('.nav-link').addClass("active-nav"); //LINKS NAVBAR
            $('.wpp-button').addClass("active-btn"); //CONTATO BUTTON
            $('.menu-toggle').addClass("active-menu-toggle"); //TOGGLE BUTTON
        }
        else{
            $('#header').removeClass("active");
            $('.navbar-brand').removeClass("active-logo"); //LOGO DO SITE
            $('.nav-link').removeClass("active-nav");
            $('.wpp-button').removeClass("active-btn");
            $('.menu-toggle').removeClass("active-menu-toggle");
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

//Função que vai adicionar e remover a visualização da sessão
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry)
      if(entry.isIntersecting){
        entry.target.classList.add('show');
      } else{
        entry.target.classList.remove('show');
      }
    });
});


const animacao = document.querySelectorAll('.fade-animated-right , .fade-animated-left, .fade-animated-in');
animacao.forEach((el)  =>  observer.observe(el));