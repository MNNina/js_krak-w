/**
 * Created by Ninja on 2016-01-02.
 */
document.addEventListener("DOMContentLoaded", function(){

    var addPigNameButton = document.querySelector("#addPigNameButton");
    var inputPigName = document.querySelector("#inputPigName");
    var pigNamesNode = document.querySelector("#pigNamesNode");
    var pigNames =[];

    function getPigNames() {

        return inputPigName.value;
    }
        addPigNameButton.addEventListener("click", function(event){
            pigNames.push(inputPigName.value);
            var namePigs = getPigNames();
            pigNamesNode.innerHTML = namePigs;

            pigNames.join(' ');
        });






});




