function clickme(){
    var inputDisplay = document.getElementById('input-display');
    var inputBox = document.getElementById('input-box');
    inputBox.innerHTML += '<li>' + inputDisplay.value + '<a href="#" id ="close-btn" class="closebtn">X</a>' + '</li></br>';
}

function clearInput(){
  var inputBox = document.getElementById('input-box');
  inputBox.innerHTML = "";
}


window.onload  = function(){

var closeBUT = document.getElementById('close-btn');
closeBUT.addEventListener("onclick", alert("this works"), false);
}
