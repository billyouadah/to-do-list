// Code hmtl W3S
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
// //correction Guillaume
// // let titre = document.querySelector("h1")
// // let newTask = document.getElementById("taskInput");
// // let taskList = document.getElementById("taskList");
// // let currentElement = 0;

// // // Effectue l'event si on appui sur la touche Entrer
// // newTask.addEventListener("keydown", function(e) {
// //     if (e.key == 'Enter') {
// //         let newLi = document.createElement("li");
// //         newLi.style.width = "max-content";
// //         let textLi = document.createTextNode(e.target.value);
// //         newLi.appendChild(textLi);
// //         taskList.appendChild(newLi);
// //         e.target.value = "";
// //         currentElement++
// //         if (currentElement == 0) {
// //             titre.innerHTML = `
// //                 Ma liste de tâches
// //             `
// //         }
// //         else {
// //             titre.innerHTML = `
// //                 Ma liste de tâches : ${currentElement} tâches dans la liste
// //             `
// //         }
// //     }
// // })

// // Barre l'élément si on click dessus
// taskList.addEventListener("click", function(e) {
//     if (e.target.tagName === "LI") {
//         if (e.target.style.textDecoration === "line-through") {
//             e.target.style.textDecoration = "" ;
//             e.target.style.backgroundColor = "" ;
//         }
//         else {
//             e.target.style.textDecoration = "line-through" ;
//             e.target.style.backgroundColor = "rgb(200, 200, 200, 0.5)" ;
//         }
//     }
// })

// // // Supprime un élement si on double click dessus
// // taskList.addEventListener("dblclick", function(e) {
// //     if (e.target.tagName === "LI") {
// //         e.target.remove();
// //         currentElement--
// //         if (currentElement == 0) {
// //             titre.innerHTML = `
// //                 Ma liste de tâches
// //             `
// //         }
// //         else {
// //             titre.innerHTML = `
// //                 Ma liste de tâches : ${currentElement} tâches dans la liste
// //             `
// //         }
// //     }
// // })

// const listTodo = document.getElementsByTagName("LI");
// console.log(listTodo);

// const span = document.createElement("SPAN")


//Nouvelle version sans this
// function elementNvo () {
//     const ul = document.getElementById("myUL");
//     const li = document.createElement("LI")
//     const inputValue = document.getElementById("myInput").value;
//     const nouvoN = document.createTextNode(inputValue);
//     ul.appendChild(li)
//     li.appendChild(nouvoN)

//     if (inputValue === "") {
// alert ("Vous devez remplir")
//     }
//     else {
//         document.getElementById("myInput").value = ""
//     }

//     console.log(li);

// }
