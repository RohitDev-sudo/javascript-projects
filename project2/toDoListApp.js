const root = document.querySelector("#root");

const containt = `
<div>
<div id = "notification-container"></div>
<h1>Task Manager</h1> 
<div>
    <label  for="taskDetails">taskDetails:</label>
    <input type="text" id="taskDetails" name="taskDetails" required><br>   
    <label  for="taskTitle" required>taskTitle:</label>
    <input type="text" id="taskTitle" name="taskTitle">
    <label for="dueDate">Enter Date for task Expiry</label>
    <input id = "dueDate" type = "date" required> 
</div>
<div>
    <button id ="addTaskBtn">Add Task</button>
    <button id ="showTaskBtn">Show Task</button>
    <button id ="deleteTaskBtn">Delete Task</button>
</div>
</div>
<div id = "display-area">
    <ol id = "olList"></ol>
</div>
`;
root.innerHTML = containt;

// Define variables for DOM elements
const taskDetailsInput = document.getElementById("taskDetails");
const taskTitleInput = document.getElementById("taskTitle");
const dueDateInput = document.getElementById("dueDate");
const addTaskBtn = document.getElementById("addTaskBtn");
const showTaskBtn = document.getElementById("showTaskBtn");
const deleteTaskBtn = document.getElementById("deleteTaskBtn");
const olList = document.getElementById("olList");
const notificationContainer = document.createElement("div");

// Initialize task arrays
let taskArray = [];
let taskTitleArray = [];
let taskDueDateArray = [];

// Add the notification container to the document body
notificationContainer.id = "notification-container";
document.body.appendChild(notificationContainer);

// Event listeners
addTaskBtn.addEventListener("click", addTask);
showTaskBtn.addEventListener("click", displayTasks);
deleteTaskBtn.addEventListener("click", deleteTask);

// Function to add a task
function addTask() {
  const taskText = taskDetailsInput.value.trim();
  const dueDateText = dueDateInput.value;
  const titleText = taskTitleInput.value.trim();

  if (taskText && titleText && dueDateText) {
    taskArray.push(taskText);
    taskDueDateArray.push(dueDateText);
    taskTitleArray.push(titleText);

    // Reset input fields
    taskDetailsInput.value = "";
    dueDateInput.value = "";
    taskTitleInput.value = "";

    displayTasks();
    showNotification("Task Added Successfully!");
  } else {
    alert("Please Enter a Valid Task");
  }
}

// Function to delete a task
function deleteTask() {
  const taskNumber = prompt("Enter the task number to be deleted");

  if (isNaN(parseInt(taskNumber))) {
    alert("Please enter a valid number");
    return;
  }

  const arrIndex = taskNumber - 1;

  if (arrIndex >= 0 && arrIndex < taskArray.length) {
    taskArray.splice(arrIndex, 1);
    taskDueDateArray.splice(arrIndex, 1);
    taskTitleArray.splice(arrIndex, 1);

    displayTasks();
    showNotification("Task Deleted Successfully!");
  } else {
    alert("Invalid task number");
  }
}

// Function to display tasks
function displayTasks() {
  olList.innerHTML = "";

  for (let i = 0; i < taskArray.length; i++) {
    const element = document.createElement("li");
    element.textContent = `${i + 1}. ${taskTitleArray[i]} due on ${
      taskDueDateArray[i]
    }`;
    olList.appendChild(element);
  }
}

// Function to show notification messages
function showNotification(message) {
  notificationContainer.textContent = message;
  notificationContainer.style.display = "block";

  setTimeout(() => {
    notificationContainer.style.display = "none";
  }, 3000);
}
