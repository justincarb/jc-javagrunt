function clickme(){
    var inputDisplay = document.getElementById('input-display');
    var inputBox = document.getElementById('input-box');
    inputBox.innerHTML += '<li>' + inputDisplay.value + '<span class="closebtn">X</span>' + '</li></br>';
}
