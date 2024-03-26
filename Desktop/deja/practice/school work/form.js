const form = document.querySelector('form');
const input = document.querySelector('#new-task');
const list = document.querySelector('#todo-list');

form.addEventListener('submit', function(e){
    e.preventDefault();
    // console.log(input.value);
    const newTask = document.createElement('li');
    const remove = document.createElement('button');
    newTask.innerText = input.value;
    input.value = '';
    list.appendChild(newTask);
    remove.innerText = 'Remove';
    newTask.appendChild(remove);
    return list
})

list.addEventListener('click', function(e){
    if (e.target.tagName === 'LI'){
        e.target.style.textDecoration = 'line-through';
    }
    else if (e.target.tagName === 'BUTTON'){
        e.target.parentElement.remove();
    }
})
//change list into an object or array

// array.push(list)
// console.log(array)
// // change object to JSON
// const object = {
//     task: newTask.innerText,
//     isComplete: false,
// };
// //add JSON to local storage
// localStorage.setItem('list',JSON.stringify(object))
//turn list into a empty array



//stringify using JSON
// add JSON to local storage
//set key to empty array and add to array and stringify object


// use parse to add to local storage
// const task = document.querySelector('li')
// localStorage.setItem('newTask', JSON.stringify(task));
// const task = JSON.parse(localStorage.getItem("tasks")) || [];
//     for ( let i = 0; i < task.length; i++) {//iterate through task
//     let newTasks = document.createElement("li");
//     newTasks.innerText = task[i];
//     task.isCompleted = task[i].isCompleted ? true : false;
//     if (newTasks.isCompleted){
//         newTasks.style.textDecoration = 'line-through';
//     }
//     list.appendChild(newTasks);
// }    
// form.addEventListener('submit',function(e){
//     e.preventDefault();
//     let newTask= document.createElement('li');
//     let taskValue = document.getElementById('todo-list').value;

// })
const todoForm = document.getElementById("add-task");
const todoList = document.getElementById("todo-list");

// retrieve from localStorage
const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
for (let i = 0; i < savedTodos.length; i++) {
  let newTodo = document.createElement("li");
  newTodo.innerText = savedTodos[i].task;
  newTodo.isCompleted = savedTodos[i].isCompleted ? true : false;
  if (newTodo.isCompleted) {
    newTodo.style.textDecoration = "line-through";
  }
  todoList.appendChild(newTodo);
}

todoForm.addEventListener("submit", function(event) {
  event.preventDefault();
  let newTodo = document.createElement("li");
  let taskValue = document.getElementById("task").value;
  newTodo.innerText = taskValue;
  newTodo.isCompleted = false;
  todoForm.reset();
  todoList.appendChild(newTodo);

  // save to localStorage
  savedTodos.push({ 
    task: newTodo.innerText, 
    isCompleted: false });
  localStorage.setItem("todos", JSON.stringify(savedTodos));
});

todoList.addEventListener("click", function(event) {
  let clickedListItem = event.target;

  if (!clickedListItem.isCompleted) {
    clickedListItem.style.textDecoration = "line-through";
    clickedListItem.isCompleted = true;
  } else {
    clickedListItem.style.textDecoration = "none";
    clickedListItem.isCompleted = false;
  }

  // breaks for duplicates - another option is to have dynamic IDs
  for (let i = 0; i < savedTodos.length; i++) {
    if (savedTodos[i].task === clickedListItem.innerText) {
      savedTodos[i].isCompleted = !savedTodos[i].isCompleted;
      localStorage.setItem("todos", JSON.stringify(savedTodos));
    }
  }
});
