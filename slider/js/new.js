/**
 * Created by Ninja on 2015-12-03.
 */

document.addEventListener("DOMContentLoaded", function(){
//console.log('działa');

    var nextButton  = document.getElementById('nextPicture');
    var prevButton = document.getElementById('prevPicture');
    var image = document.querySelectorAll('.slider li');
    var currentImage = 0;


    image[currentImage].classList.add("visible");

    nextButton.addEventListener("click", function(event){

        image[currentImage].classList.remove("visible");
        currentImage ++;
            if(currentImage >= image.length){
               currentImage =0;

            }

        image[currentImage].classList.add("visible");
    });


    prevButton.addEventListener("click", function(event){
        image[currentImage].classList.remove("visible");
        currentImage --;
        if(currentImage <0){
            currentImage = image.length -1;
        }

        image[currentImage].classList.add("visible");

    });

});










/*$(document).ready(function () {

alert('hello');
});
*/