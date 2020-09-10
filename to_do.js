function addFunction() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("userInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
    document.getElementById("myList").appendChild(li);
}

function delFunction() {
  var list = document.getElementById("myList");
  list.removeChild(list.childNodes[0]);
}

function resetFunction(){
    var list = [Toothpaste, Shampoo, Grapes, Bananas]
    x = document.getElementById("myList")
    x.innerHTML = list;
}
