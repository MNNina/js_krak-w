/**
 * Created by Ninja on 2015-12-16.
 */
document.addEventListener("DOMContentLoaded", function(){
        //do naszej zmiennej wyszukujemy nasze obrazki z klasy .gallery
        var allPictures = document.querySelectorAll(".gallery img");
    //do naszej zmiennej wyszukujemy id showbutton
        var showButton = document.querySelector("#showButton");
    //do naszej zmiennej wyszukujemy hidebutton
        var hideButton = document.querySelector("#hideButton");
    //do naszej zmiennej stworzonej wyszukujemy poprzez queryselector id o nazwie tagInput
        var tagInput = document.querySelector("#tagInput");

        //na naszym hideButton wywolujemy zdarzenie w funkcji click
        hideButton.addEventListener("click", function(event){
            //dla stworzonej przez naj zmiennej tag dodajemy tag z wartościa pola input
            var tag = tagInput.value;
            //naszą zmienna czyśclimy z pustych spacji czyli("text") i (   "text"   )
            tag = tag.trim();
            //oczywiście jesli długośc tekstu jest dłuższa od 0
            if(tag.length === 0){
                return;
            }
            //stwarzamy pętle for dla dlugości naszych zdjęc tzn z tablicy zdjęć
            // gdzie i=jest0, ale nie jest wieksze od dlugości tablicy zdjęć i rośnie o jeden
            for(var i=0; i< allPictures.length; i++){
                //do zmiennej podstawiamy tablice z dataset tagiem
                var pictureTags = allPictures[i].dataset.tag;
                //jeśli index od zdięć jest nieidentyczna co -1 czyli że mieści się w tablicy
                if(pictureTags.indexOf(tag) !== -1){
                    //dodaje do i do tablicy clase invisible z css
                    allPictures[i].classList.add("invisible");
                }
            }

        });
        //na naszym showbutton wywolujemy event click
        showButton.addEventListener("click", function(event) {
            //do zmiennej tag dodajemy znowu wartost inputu
            var tag = tagInput.value;
            //i czyscimy z pustych spacji
            tag = tag.trim();
            //jesli długość tego tagu ==== z zerem zwraca ale nie wypisuje
            if(tag.length === 0){
                return;
            }
            //po stworzeniu pętli mówiacej że i=0, ale imniejsze od długości wszystkich zdjęc i też rośnie
            for (var i = 0; i< allPictures.length; i++) {
                //nasza zmienna pictureTag dostaje tablice z dataset tag
                var pictureTags = allPictures[i].dataset.tag;
                //jesli indexof (miejsce gdzie się znajduje) tagu z picturetag nie jest równy -1
                if(pictureTags.indexOf(tag) !== -1) {
                    //wtedy usuwa klase invisible
                    allPictures[i].classList.remove("invisible");
                }
            }
        });

    });