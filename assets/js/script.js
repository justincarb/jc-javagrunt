var list = ["Amrit", "Ajimal", "Ajit"];
var listL = list.length;
var names ="";
var inputDisplay = document.getElementById('input-display');
var inputBox = document.getElementById('input-box');

function clickme() {
        list.push(inputDisplay);
    }

 for(var i = 0; i < listL; i++){
        names += "<li>" + list[i] + "</li></br>";
        }
inputBox.innerHTML = names ;

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
