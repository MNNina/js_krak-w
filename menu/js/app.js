/**
 * Created by Ninja on 2015-12-16.
 */
document.addEventListener("DOMContentLoaded", function(){
    //stwarzamy zmienną i wyszukujemy do niej wszsytkie .nav>ul>li z cssa
    var listElements = document.querySelectorAll(".nav>ul>li");
    console.log(listElements)//wypisujemy w consoli
    //stwarzamy pętle for w której
    // i jest równe 0, a i jestmniejsze od długości tablicy listy elementów i i rośnie o jeden
    for( var i=0; i<listElements.length; i++){
        //w naszej tablicy listyelementów[i] wywołujemy event po najechaniu i utrzymaniu tej chwili- myszką nad (!!ale nie zjechaniu!!)
        listElements[i].addEventListener("mouseover", function(event){
            //do zmiennej naszej sublics przypisujemy this ul
            var sublist = this.querySelector("ul");
            //jeśli nasza subliska nie jest identyczna co nulll
            if (sublist !== null){
                //wyspisze sie display:block
            sublist.style.display = "block";
            }
        });
        //do naszej tablicy elementów [i] dodajemy event mouseout - zjechanie myszką "z"
        listElements[i].addEventListener("mouseout", function(event){
            //do naszej zmiennej sublist znów przypisujemy this( to zdarzenie ul)
            var sublist = this.querySelector("ul");
            //jesli sublist nie jest identyczy co null
            if (sublist !== null){
                //nasza sublista się nie pokaze
                //ogólnie chodzi o to że po najechaniu na element 2 z listy pokaże się podlista
                //a po zjechaniu myszką lista zachowa clase z css czyli display:none.
            sublist.style.display ="none";
            }
        });
    }
});