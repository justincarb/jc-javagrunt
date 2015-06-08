var inputBox = document.getElementById('input-box');
var inputDisplay = document.getElementById('input-display');


function clickme(){
    inputBox.innerHTML += "<li>" + inputDisplay.value + '<a href="#" id="closebtn">x</a></li>';
}

function clearInput(){

    inputBox.innerHTML = " ";
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

