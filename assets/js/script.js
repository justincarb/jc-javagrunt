var inputBox = document.getElementById('input-box');
var inputDisplay = document.getElementById('input-display');
var addText = document.getElementById('add-text');
var clearInput = document.getElementById('clear-input');
var delLast = document.getElementById('del-last');
/*
function clickme(){
    inputBox.innerHTML += "<li>" + inputDisplay.value + '<a href="#" id="closebtn">x</a></li>';
}
*/
addText.onclick = function(){
  inputBox.innerHTML += '<li>' + inputDisplay.value + '<a href="#" id="closebtn">x</a></li>';
};


clearInput.onclick = function(){
  inputBox.innerHTML = '';

};

  delLast.onclick = function(){
    if( inputBox.innerHTML === '') {
     alert('There is nothing to delete');

    }else{
    var lastInputText = inputBox.lastChild;
    lastInputText.remove();
    }

};

var closeThis = document.getElementById('closebtn');
body.addEventListener('change', function(e){
e.onclick = function(){
    alert('Yahoo');
  };

});
