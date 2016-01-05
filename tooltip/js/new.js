/**
 * Created by Ninja on 2015-12-03.
 */

document.addEventListener("DOMContentLoaded", function(){
    
        var tooltipList = document.querySelectorAll(".tooltip");

        for(var i=0; i<tooltipList.length; i++){

            //po najechaniu myszką na tooltipList ma wykonać się event
        tooltipList[i].addEventListener("mouseover", function(event){

            //tworzymy zemienna i nadajemy jej dataset.text this
            var tooltipText = this.dataset.text;

            //stwarzamy nowy element span
            var newElement = document.createElement("SPAN");
            //do nowego elementu span dodajemy clase tolltipText
            newElement.classList.add("tooltipText");
            //do nowego elementu dodajemy text z tooltiptext
            newElement.innerHTML = tooltipText;
            //dołączamy dziecko( nowy element) aby się pokazywalo pod/przed spanem stylujemy w css
            this.appendChild(newElement);
        });

            //po zjechaniu myszką z naszego elementu span wywolujemy event
        tooltipList[i].addEventListener("mouseout", function(event){
            //ktory ma za zadanie z naszego spana
            var elementToRemove = this.querySelector(".tooltipText");
            //usunąć klase, co sprawia że nasz nowy element -tooltipText znika.
            this.removeChild(elementToRemove);
        });
    }
});






//<span class="tooltipText"> text tooltipa </span>