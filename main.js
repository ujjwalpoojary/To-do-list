let input = document.getElementById("task-input");
let submit = document.getElementById("add-btn");
let list = document.getElementById("list-container");
let update = document.getElementById("add-btn");

submit.addEventListener("click", function () {
  if (input.value == "") {
    alert("please enter a task");
  } else {
    let items = document.createElement("div");
    let span = document.createElement("span");
    let buttons = document.createElement("div");
    let edit = document.createElement("button");
    let del = document.createElement("button");
    /*#########################################*/
    items.classList.add("list-items");
    list.appendChild(items);
    span.innerText = input.value;
    span.classList.add("items");
    items.appendChild(span);
    span.style.cursor = "pointer";
    edit.style.backgroundColor = "pink";
    del.style.backgroundColor = "rgb(254, 69, 69)";
    span.addEventListener("click", function () {
      span.classList.toggle("mark-as-done");
    });
    
    /*########################################*/
    buttons.classList.add("btn-container");
    items.appendChild(buttons);
    edit.innerText = "Edit";
    edit.classList.add("btn-style");
    buttons.appendChild(edit);
    edit.addEventListener("click", function () {
      input.value = span.innerText;
      submit.innerText = "Update";
      update.addEventListener("click", function () {
        list.removeChild(items);
        span.innerText = input.value;
        submit.innerText = "Add Task";
        localStorage.setItem("item",list.innerHTML);
      });
    });
    
    /*###############################*/
    del.innerText = "Delete";
    del.classList.add("btn-style");
    buttons.appendChild(del);
    del.addEventListener("click", function () {
      list.removeChild(items);
      localStorage.setItem("item",list.innerHTML);
    });
    input.value = "";
    input.focus();
    localStorage.setItem("item",list.innerHTML);
  }
  
});
list.innerHTML=localStorage.getItem("item");
// function del(){
//   list.removeChild(items);
//   localStorage.setItem("item",list.innerHTML);
function delAll(){
  list.innerHTML="";
  localStorage.removeItem("item");
}

