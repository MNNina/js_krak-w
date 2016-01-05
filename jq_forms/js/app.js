/**
 * Created by Ninja on 2015-12-18.
 */
$(document).ready(function() {
    //1:zmienne : 3razy input, 1 raz form
    //2: event submit on form
    //3: sprawdz czy imie jest dłuższe niż 5 znaków
    // czy email zawiera w sobie @ i .
    // message ma być dłuższe niż 10znaków
    // jeżeli te informacje nie są spełnione ma wypisywać się błąd w divie o klasie error :co poszło nie tak i zablokować działanie tego eventu
    //poprzez preventDefault albo return false


    var nameInput =$("#nameInput");
    var emailInput =$("#emailInput");
    var messageInput =$("#messageInput");
    var contactForm = $("#contactForm");
    var error =$(".error");
    var errorMessage ="";



    //var submit =$("input");

   contactForm.on("submit", function(event){
       //console.log("działa");
       var name = nameInput.val();
       var email = emailInput.val();
       var message = messageInput.val();

       if(name.length<5){
            errorMessage+= "name is shorter than 5 chars. ";
           event.preventDefault();

       }
       if(email.indexOf("@")===-1 || email.indexOf(".") === -1){
           errorMessage +=" Provide proper email. ";
           event.preventDefault();


       }
       if(message.length <10){
           errorMessage += "Message have to be longer than 10 chars. ";
           event.preventDefault();
       }
       error.text(errorMessage);
   });

});