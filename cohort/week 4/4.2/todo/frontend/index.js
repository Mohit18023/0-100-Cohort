

// Function to add a new todo item
async function addTodo() {
  const todoInput = document.getElementById("todoInput");
  const todo = todoInput.value.trim();

  if (todo === "") {
    alert("Please enter a valid todo");
    return;
  }

  try {
    // Send the todo data to the backend
    const response = await fetch(
      `http://localhost:5000/add?todo=${encodeURIComponent(todo)}`
    );

    if (!response.ok) {
      throw new Error("Failed to add todo");
    }

    // Clear the input field
    todoInput.value = "";

    // Refresh the todo list
    fetchTodos();
  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred while adding todo");
  }
}

// Function to delete a todo item
async function deleteTodo(todo){
    try{
        // Send the todo data to the backend 
        const response = await fetch(`http://localhost:5000/delete?todo=${encodeURIComponent(todo)}`);
        if(!response.ok){
            throw new Error("Failed to delete todo");
        }
        // Refresh the todo list
        fetchTodos();

    }
    catch(error){
        console.error("Error:",error);
        alert("An error occurred while deleting todo");
    }
}

// fetch todo list
async function fetchTodos(){
    try{
        //fetch the todo from the backend
        const response = await fetch('http://localhost:5000/list');
        const data = await response.json();
        const todos = data.data;

        // get the todo list container
        const todoList = document.getElementById('todoList');
        todoList.innerHTML = '';


        // render the todos

        todos.forEach((todo) => {
            const li = document.createElement('li');
            li.textContent = todo;
            
            // Add a delete button to each todo item
            const deleteButton = document.createElement('button');
            deleteButton.textContent = "Delete";
            deleteButton.addEventListener("click",()=>{
                deleteTodo(todo);
            });

            li.appendChild(deleteButton);
            todoList.appendChild(li);
        });
    }catch(error){  
        console.error("Error:",error);
        alert("An error occurred while fetching todos");
    }
}

// fetch and render the todos list when the page loads
window.onload = fetchTodos;