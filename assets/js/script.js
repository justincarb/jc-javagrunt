
/*
var inputBox = document.getElementById('input-box');
var inputDisplay = document.getElementById('input-display');


function clickme(){
  if(inputDisplay.value == ""){
    alert("please put something in the input field.");
  }else
    inputBox.innerHTML += "<li>" + inputDisplay.value + '<a href="#" id="closebtn">x</a></li>';
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


var closeThis = document.getElementById("closebtn");
closeThis.addEventListener('click' , function(){
  this.parentNode.remove();
});

*/


/* Answer 1 

var inputBox = document.getElementById('input-box');
var inputDisplay = document.getElementById('input-display');


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



 Annswer 1 Ends   */



/* Answer 2 */

 var inputBox = document.getElementById('input-box');
var inputDisplay = document.getElementById('input-display');


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

var closeThis = document.getElementById("closebtn");
closeThis.addEventListener('click' , function(){
  this.parentNode.remove();
});

function close_click(elem)
{
elem.parentNode.remove();
}

/* Answer 2  Ends*/