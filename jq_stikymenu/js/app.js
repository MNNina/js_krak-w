/**
 * Created by Ninja on 2015-12-17.
 */

// var nav
//var nav position tr top
//window.on(scroll)

//obliczac fixnavi za każdym razem gdy okienko zmienia jego wielkosć
//createnewElement
//użyć once

//bugs --- resize menu when menu is sticky



$(document).ready(function(){
   // tworzymy funkcje sticky menu
   function stickyNav(){
       // znajdujemy dla naszej zmiennej klase nav
       var nav =$(".nav");
       //dla naszej zmiennej ustalamy pozycje navigacji na top
       var fixNavi =nav.position().top;
       //tworzymy nowy obiekt div o nazwie placeholder
       var placeholder =$("<div></div>")
       //var naveHeight =nav.css("height");
       //naszemu placeholder z cssa pobieramy wysokośc oraz nawigacji całą wysokość
       placeholder.css("height", nav.outerHeight());
        //na oknie wywołujemy fukcje resize
       $(window).resize(function(){
           //jeżeli nasza nawigacja ma klase sticky
           if(nav.hasClass("sticky")){
               //nasze zmienna fixNavi otrzyma pustego diva z pozycją top
              fixNavi =placeholder.position().top;
           }
           //albo nasza fix navi otrzyma navigacje z pozycją top
           else{
               fixNavi =nav.position().top;
           }
       });
       //na oknie window uruchamiamy event z funkcją scroll
       $(window).on("scroll", function(evnt){
           //tworzymy zmienna która będzie nam skrolować po oknie
          var windowScroll = $(window).scrollTop();
           //jeżeli nasza skrolowana zmienna jest większa od naszej zmiennej fix navi
           if(windowScroll >fixNavi){
               // nasza navigacja dostanie klase sticky
               nav.addClass("sticky");
               //jeżeli rodzic nasze pustego diva czyli placeholder będzie dłuższy od zera
               if(placeholder.parent().length ===0){
                   //to nasz placeholder zostanie dodany przed naszą navigacja
                   placeholder.insertBefore(nav);
               }
           } else{
               //albo navigacja usunie klase sticky
               nav.removeClass("sticky");
               // jeżeli nasz rodzić placeholdera jest rózny tzn długośc jest rózna od placeholdera
               if(placeholder.parent.length !==0){
                   //wtedy usuwamy naszego diva(placeholder) poprzez detach()-- usuwamy ale nie całkowicie
                   placeholder.detach();
               }

           }

       });

   } //wywołujemy funkcje
    stickyNav();



});
