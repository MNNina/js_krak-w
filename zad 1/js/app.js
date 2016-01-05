/**
 * Created by Ninja on 2016-01-02.
 */
document.addEventListener("DOMContentLoaded", function(){

    var addWordButton = document.querySelector("#addWordButton");
    var inputText = document.querySelector("#inputText");
    var placeNewText = document.querySelector("#placeNewText");
    //console.log(placeNewText);

    function getAlertText() {
        return inputText.value;
        //console.log(listInputText);
    }
        addWordButton.addEventListener("click", function(event){
            var message = getAlertText();
            placeNewText.innerHTML = message;
            //console.log(newLi);
            var newLi = document.createElement("LI");
            newLi.insertBefore(document.createTextNode(message));
            inputText.appendChild(newLi);

        });


});

