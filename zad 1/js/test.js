/**
 * Created by Ninja on 2016-01-06.
 */



//var swinki = ["Johny", "Pamela"];

//function wypisz(){
  //  console.log(swinki.join(' '));

//}
//function dodajSwinke(imie){
   // swinki.push(imie);

//}


//function multipledByTwo (x){
    //return x *2;

//}

var buttonAddField = document.getElementById('addField');
var fields = document.getElementById('fields');

//add fields and delete fields
buttonAddField.addEventListener('click', function () {

    var li = document.createElement('li');

    var buttonDelete = document.createElement('button');
    buttonDelete.addEventListener('click', function () {
        fields.removeChild(li);

    });
    buttonDelete.appendChild(document.createTextNode("DELETE"));

    var inputName = document.createElement("input");
    inputName.type = "text";



    var inputValue = document.createElement("input");
    inputValue.type = "text";


    li.appendChild(inputName);
    li.appendChild(inputValue);
    li.appendChild(buttonDelete);

    fields.appendChild(li);

});