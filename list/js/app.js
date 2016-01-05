/**
 * Created by Ninja on 2015-12-16.
 */

/*<li>
 <h1> Task 1</h1>
 <button>Delete</button>
 <button>Complete</button>
 </li>
 <li class="done">
 <h1> Task 1</h1>
 <button>Delete</button>
 <button>Complete</button>
 </li>*/



//dodawanie tasków
//usuwanie tasków
//task complete
//

document.addEventListener("DOMContentLoaded", function () {

    // stwarzamy zmienna i znajdujemy dla niej element id
    var addTaskButton = document.getElementById("addTaskButton");
    // stwarzamy zmienna i znajdujemy dla niej element id
    var taskList = document.getElementById("taskList");
    // stwarzamy zmienna i znajdujemy dla niej element id
    var taskInput = document.getElementById("taskInput");
    //stwarzamy zmienna i znajdujemy, przypisujemy do niej element id z htmla
    var removeDoneButton = document.getElementById("removeFinishedTasksButton");


    //do naszej zmiennej removeDoneButton przypisujemy event że po kliknięciu ma się coś wykonać
    removeDoneButton.addEventListener("click", function (event) {
        //do stworzonej zmiennej, znajdujemy id taskList and class done
        var allTaskToDelete = document.querySelectorAll("#taskList > li.done");
        //stwarzamy pętle która ma za zadanie przeiterowac nam całą tablice od 0
        // gdy i jest równe 0, a długość naszej zmiennej w której jest id TaskList i .done jest mniejsze ale i rośnie o jeden stale
        for (var i = 0; i < allTaskToDelete.length; i++) {
            //usuwamy z naszej zmiennej task list dziecko [i]
            taskList.removeChild(allTaskToDelete[i]);
        }
    });


    //na zmiennej addTaskButton wywolujemy event click
    addTaskButton.addEventListener("click", function (event) {
        //do zmiennej taskText przypisujemy vartość inputu
        var taskText = taskInput.value;
        //jesli jest dłuższa od 4
        if (taskText.length < 4) {
            //zwraca nic nie wypisuje
            return;
        }
        //żeby wartość inputu była pusta
        taskInput.value = "";

        //stwarzany nowy element h1
        var newHeader = document.createElement("H1");
        //stwarzamy nowy element button complete
        var newCompleteButton = document.createElement("BUTTON");
        //stwarzamy nowy element button delete
        var newDeleteButton = document.createElement("BUTTON");
        //stwarzamy nowy element listy li
        var newLi = document.createElement("LI");

        //do naszej nowej listy dodajemy dziecko newHeader
        newLi.appendChild(newHeader);
        //do naszej nowej listy dodajemy dziecko newCompleteButton
        newLi.appendChild(newCompleteButton);
        //do naszej nowej listy dodajemy dziecko newdeletebutton
        newLi.appendChild(newDeleteButton);
        //do naszej zmiennej newheader dodajey innerhtml z taskTextem
        newHeader.innerHTML = taskText;
        //do naszego newCompleteButton dodajemy innerhtml z tekstem complete
        newCompleteButton.innerHTML = "Complete";
        //co naszego newDeleteButton dodajemy innerhtml z tekstem delete
        newDeleteButton.innerHTML = "Delete";

        // na naszym newcompletebutoon wywolujemy event click
        newCompleteButton.addEventListener("click", function (event) {
            //dodajemy do rodzica clase done z css czyli czerwona czcionka
            this.parentNode.classList.add("done");
        });
        //na naszym buttonie delete wywolujemy event click
        newDeleteButton.addEventListener("click", function (event) {
            //gdzie naszej klasie taskList usuwamy dziecko tego rodzica
            taskList.removeChild(this.parentNode);
        });


        //do naszej listy dodajemy dziecko//nowalista
        taskList.appendChild(newLi);

    });


});

// dodajemy nowe zadanie gdzie możemy dodać ich wiele, możemy je usunąć, zaznaczyć że zrobione ale zrobione tylko też
//usunąć