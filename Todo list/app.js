//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

//Event Listeners 
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterOption);

//function 

function addTodo(event){
    //Prevent form fom submiting 
    event.preventDefault();
    //Todo Div 
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //creat LI 
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo); 
    //Check mark button 
    const completedButton = document.createElement('button')
    completedButton.innerHTML = '<i class= "fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //Check trash button 
    const trashButton = document.createElement('button')
    trashButton.innerHTML = '<i class= "fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //Appen to list 
    todoList.appendChild(todoDiv);
    //Clear todo Input value
    todoInput.value = "";
}

function deleteCheck(e){
    const item = e.target;
    //Delte Todo
    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        //Animation 
        todo.classList.add("fall");
        todo.addEventListener('transitionend', function(){
            todo.remove();
        })
        
    }
    //Check mark 
    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

function filterTodo(e){
    const todos = todoList.childNodes;
    todos.forEach()
}