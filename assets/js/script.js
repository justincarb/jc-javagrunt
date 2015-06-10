

var inputBox = document.getElementById('input-box');
var inputDisplay = document.getElementById('input-display');
var addText = document.getElementById('add-text');
var clearInput = document.getElementById('clear-input');
var delLast = document.getElementById('del-last');

/* Orignal 

function clickme(){
  if(inputDisplay.value == ""){
    alert("please put something in the input field.");
  }else
    inputBox.innerHTML += "<li>" + inputDisplay.value + '<a href="#" class="closebtn">x</a></li>';
}

function clearInput(){

    inputBox.innerHTML = "";
}

function delLast(){
    if( inputBox.innerHTML === "") {
     alert("There is nothing to delete");

    }else{
    var lastInputText = inputBox.lastChild;
    lastInputText.remove();
    }

}

document.body.addEventListener('click', function(event) {
  if(event.target.className==='closebtn') {
    event.target.parentNode.remove();
  }
});

Orignal ends/*

/* Answer 1 

function clickme() {
  if (inputDisplay.value == "") {
    alert("please put something in the input field.");
  } else {
    //create a new li
    var li = document.createElement('li');
    //add the input text to it as text
    li.appendChild(document.createTextNode(inputDisplay.value));
    //create a new anchor
    var a = document.createElement('a');
    a.href = "#";
    //since id of an element must be unique, use classname
    a.className = 'closebtn';
    //add the click handler
    a.addEventListener('click', closeHandler);
    //add the anchor to li
    li.appendChild(a);
    //add the li to the ul
    inputBox.appendChild(li);
  }
}

function closeHandler() {
  this.parentNode.remove();
}

function clearInput() {

  inputBox.innerHTML = "";
}

function delLast() {
  if (inputBox.innerHTML === "") {
    alert("There is nothing to delete");

  } else {
    var lastInputText = inputBox.lastChild;
    lastInputText.remove();
  }

}



 Answer 1 Ends   */



/* Answer 2 */


function clickme(){
  if(inputDisplay.value == ""){
    alert("please put something in the input field.");
  }else
    inputBox.innerHTML += "<li>" + inputDisplay.value + '<a href="#" onclick="close_click(this)" id="closebtn">x</a></li>';
}

function clearInput(){

    inputBox.innerHTML = "";
}

function delLast(){
    if( inputBox.innerHTML === "") {
     alert("There is nothing to delete");

    }else{
    var lastInputText = inputBox.lastChild;
    lastInputText.remove();
    }

}

function close_click(elem)
{
elem.parentNode.remove();
}

/* Answer 2  Ends*/

