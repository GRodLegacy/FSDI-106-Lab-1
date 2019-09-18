
// create a global variable with your name on it and create a hello function that receives a parameter and prints it on the console


var name = 'Victor Gonzalez Rod';
var todoList = []; // <- store the todo elements
var serverURL = 'http://restclass.azurewebsites.net/API/points'

function hello(text){
    console.log(text);
}

function init2(){
    var lbl = $('#lblTodo');
    lbl.innerText = "jQuery Rules?";

    $('#btnSave').click(saveTodo);
}

function saveTodo(){
    var txt = $('#txtTodo');
    console.log(txt);
    var todoText = txt.val();
    console.log(todoText);

    if( todoText.length < 1) {
        //no text
        txt.addClass('error');
    } else {
        //ALL GOOD
        // remove error
        txt.removeClass ('error');
        // save the todo item
        todoList.push(todoText);
        // clean the field
        txt.val('');
        // display a new todo on the screen
        displayTodo(todoText);

        sendToServer(todoText);
        
    }

    // else, remove the error class,
    // save the todo text
}
function sendToServe(text) {
    var todoItem = {
        text: text,
        user: 'Victor'

    };

    // create the AJAX post request
    console.log('Started server communication');
}

function displayTodo(simpleText) {
    // get the ul
    var ul = $('#todoList');
    // create an li element
    var li = "<li class='list-group-item'>" + simpleText + "</li>";
    //add the li to the ul
    ul.append(li);

}

// when the browser finishes loading stuff
// please exec such function (init)

window.onload = init2;

/* BASICS
variables
scope of a variable
function and parameters

loops(for)
conditional (if statement)
objects (object constructor & object literal)

DOM manipulation (creating and accessing DOM elements)
*/