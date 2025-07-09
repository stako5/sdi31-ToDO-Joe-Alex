//Users should be able to view all of the to-do tasks
//need a list in body for all tasks 
//input box for new task 
//submit button for input box 
//archived task list (section) 
//Users should be able to add a to-do to the list of to-do tasks
//on submit button, should add new task using DOM 

//Users should be able to mark a task as completed by crossing it out on click
//from list body, will need a "click" event to cross out task complete

//Users should be able to remove to-do tasks by removing those elements from the DOM
//remove on "click" from list body to archive task list 

//The page should be aesthetically pleasing (aka be styled) 
//css 

function toDoList() {
  let input = document.querySelector("input[type=text]");
  let text = input.value.trim();
  if(!text) return;
  
  var li = document.createElement("li");
  li.id = "item-" + crypto.randomUUID();
  console.log(li);
  li.textContent = text; 
  li.addEventListener("click", function() {
    li.classList.toggle("done");
  });
  document.getElementById("list").appendChild(li)
  input.value = "";
  return li.id; 
} 


// function strikeThrough() {
//   const li = getElementById(id); 
//   li.id = id; 
//   li.textContent = text; 
//   li = addEventListener("click", function() {
//     li.classList.toggle("done");
//   });
//   document.getElementById("list").appendChild("li");
// }


//   for(let i = 0; i < li.length; i++){
//     li[i].addEventListener("click", function(e) {
//       if(li[i].classlist.contains("done")){
//         li[i].classlist.remove("done");
//       }else{
//        li[i].classlist.add("done");
//       }
//     });
//   }
// }


  //   
//     li[i].addEventListener("click", function(e) {
//       if(li[i].classlist.contains("done")){
//         li[i].classlist.remove("done");
//       }else{
//        li[i].classlist.add("done");
//       }
//     });
//   }
// }

///li.item-.addEventListener("click", strikeThrough);
  

//function addListAfterKeypress(event) {
  //if (inputLength() > 0 && event.keyCode === 13) {
    //createListElement();
  //} 
//}

//input.addEventListener("keypress", addListAfterKeypress);






