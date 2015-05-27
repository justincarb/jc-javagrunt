function clickme() {
  var inputDisplay = document.getElementById('input-display');
  var inputBox = document.getElementById('input-box');
  inputBox.innerHTML += '<li id="mail-li">' +
    inputDisplay.value +
    '<a href="#" id ="close-btn" class="closebtn" onclick = "clickClose()">X</a>' +
    '</li></br>';
}

function clearInput() {
  var inputBox = document.getElementById('input-box');
  inputBox.innerHTML = '';
}

function clickClose() {
  var closeBtn = document.getElementById('close-btn');
  closeBtn.onclick = function() {
    this.parentNode.getElementById('input-box').remove();
  }
}
