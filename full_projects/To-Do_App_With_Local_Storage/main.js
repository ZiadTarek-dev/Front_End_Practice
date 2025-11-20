let submit = document.querySelector(".add");
let input = document.querySelector(".input");
let tasksDiv = document.querySelector(".tasks");

let arrayOfTasks = [];
// Reset Page Data From Local Storage
setDataFromSL();

// Handle Submit On Click
submit.onclick = () => {
  if (input.value != "") {
    addTasksToArray(input.value);
    input.value = "";
  }
};

function addTasksToArray(taskText) {
  // Set Task
  const task = {
    id: Date.now(),
    isCompleted: false,
    title: taskText,
  };
  // Push Task To Array
  arrayOfTasks.push(task);
  // Add Elements to page
  addDataToPage(arrayOfTasks);
  // Add Data To Local Storage
  addDataToLS(arrayOfTasks);
}

function addDataToPage(tasks) {
  tasksDiv.innerHTML = "";
  tasks.forEach((task) => {
    let div = document.createElement("div");
    task.isCompleted ? (div.className = "task done") : (div.className = "task");
    div;
    div.innerHTML = `${task.title}
    <div class="op">
            <i class="fa-solid fa-check con"></i><i class="fa-solid fa-trash del"></i>
    </div>`;
    div.setAttribute("id", task.id);
    tasksDiv.appendChild(div);
  });

  // Handle Delete On Click
  let arrDelete = [...document.querySelectorAll("i.del")];
  arrDelete.forEach((ele) => {
    ele.addEventListener("click", (btn) => {
      let targ = btn.target.parentElement.parentElement;
      // Handle Animation And Removing Element
      btn.target.style.transition = "0.05s";
      targ.style.maxWidth = "0px";
      targ.style.fontSize = "0px";
      targ.style.padding = "0px";
      targ.style.color = "#e9e9e9";
      targ.style.marginBottom = "0px";
      targ.style.opacity = "0";
      setTimeout(() => {
        targ.remove();
      }, 425);
      // Deleting From Local Storage By Element's ID
      deleteTaskFromLS(btn.target.parentElement.parentElement.id);
    });
  });

  // Handle Confirm button
  let arrConfirm = [...document.querySelectorAll("i.con")];
  arrConfirm.forEach((ele) => {
    ele.addEventListener("click", (btn) => {
      let targ = btn.target.parentElement.parentElement;
      targ.classList.toggle("done");

      toggleStatus(targ.id);
    });
  });
}

function addDataToLS(arrayOfTasks) {
  localStorage.setItem("tasks", JSON.stringify(arrayOfTasks));
}

function setDataFromSL() {
  let data = localStorage.getItem("tasks");
  if (data) {
    let tasks = JSON.parse(data);
    addDataToPage(tasks);
    arrayOfTasks = JSON.parse(data);
  }
}

function deleteTaskFromLS(taskId) {
  arrayOfTasks = arrayOfTasks.filter((task) => taskId != task.id);
  addDataToLS(arrayOfTasks);
}

function toggleStatus(taskId) {
  for (let i = 0; i < arrayOfTasks.length; i++) {
    if (arrayOfTasks[i].id == taskId) {
      arrayOfTasks[i].isCompleted = !arrayOfTasks[i].isCompleted;
      addDataToLS(arrayOfTasks);
    }
  }
}

document.querySelector(".clear").onclick = () => {
  const allTasks = [...tasksDiv.children];

  allTasks.forEach((task, index) => {
    // Animate Collapse And Fade
    task.style.maxHeight = "0px";
    task.style.fontSize = "0px";
    task.style.padding = "0px";
    task.style.marginBottom = "0px";
    task.style.opacity = "0";

    // Remove Each Task From Page After Animation
    setTimeout(() => {
      task.remove();
    }, 450 + index * 50);
  });

  // Clear localStorage
  arrayOfTasks = [];
  localStorage.clear();
};
