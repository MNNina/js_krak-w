/**
 * Created by Ninja on 2015-12-16.
 */
document.addEventListener("DOMContentLoaded", function(){

    var listElements = document.querySelectorAll(".nav>ul>li");
    console.log(listElements)
    for( var i=0; i<listElements.length; i++){

        listElements[i].addEventListener("mouseover", function(event){
            var sublist = this.querySelector("ul");
            if (sublist !== null){
            sublist.style.display = "block";
            }
        });
        listElements[i].addEventListener("mouseout", function(event){
            var sublist = this.querySelector("ul");
            if (sublist !== null){
            sublist.style.display ="none";
            }
        });
    }
});