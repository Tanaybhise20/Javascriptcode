let tasks = []
const taskInputElmt = document.getElementById("inputTask")
const renderTasksElmt = document.getElementById("renderTasks")
const ClearAllTasksElmt = document.getElementById("ClearAllTasks")

function renderTasks(){
    renderTasksElmt.innerHTML = tasks.map((task,i)=>`
          <li>${task} <button onclick="deleteTask(${i})">DELETE</button>
          </li>`).join('')
}

function addNewTask(){
    newTask = taskInputElmt.value 
    tasks.push(newTask)
    renderTasks()
}

function deleteTask(index){
    tasks.splice(index, 1)
    console.log(tasks)
    renderTasks()
}

ClearAllTasksElmt.addEventListener('click', ()=>{
    tasks=[]
    renderTasks()
})

//2 marks calculator

let marks = [];
let inputMarksList = document.getElementById("inputMarks");
let marksRenderList = document.getElementById("marksRender"); // Make sure this matches your HTML ID for the text container

function addMarks() {
    let markValue = Number(inputMarksList.value);
    if (inputMarksList.value === "" || isNaN(markValue)) {
        alert("Please enter a valid number");
        return;
    }
    
    marks.push(markValue);
    inputMarksList.value = ""; // Clear the input field after adding
}

function calculate() {
    if (marks.length === 0) {
        alert("Please add some marks first!");
        return;
    }

    let totalMarks = 0;
    let highMarks = marks[0];
    let lowMarks = marks[0];
    for (let i = 0; i < marks.length; i++) {
        totalMarks += marks[i];
        
        if (marks[i] > highMarks) {
            highMarks = marks[i];
        }
        if (marks[i] < lowMarks) {
            lowMarks = marks[i];
        }
    }

    let avgMarks = totalMarks / marks.length;

    marksRenderList.innerHTML = `
        <p>Total Marks: ${totalMarks}</p>
        <p>Average Marks: ${avgMarks.toFixed(2)}</p>
        <p>Highest Mark: ${highMarks}</p>
        <p>Lowest Mark: ${lowMarks}</p>
    `;
}

//3 search in an Array

let cars = ["Audi", "BMW", "Tata", "Toyota", "Honda", "Mercedes", "Mahindra"];

function searchArray() {
    let input = document.getElementById("inputTask").value.trim();
    let result = document.getElementById("result");

    if (input === "") {
        result.innerHTML = "Please enter a car name";
        return;
    }

    let found = cars.find(car =>
        car.toLowerCase() === input.toLowerCase()
    );

    if (found) {
        result.innerHTML = found;
    } else {
        result.innerHTML = "No matches found";
    }
}


//4. Even and Odd number filter






//5.Sort Names Alphabetically