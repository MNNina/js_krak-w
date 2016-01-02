/**
 * Created by Ninja on 2016-01-02.
 */
document.addEventListener("DOMContentLoaded", function(){

    var inputText = document.querySelector("#text");

    function getAlertText(){
        return inputText.value;
    };

    var addWordButton = document.querySelector("#addWordButton");

    addWordButton.addEventListener("click", function(event){
        var message = getAlertText();
        alert(message);
  });


});