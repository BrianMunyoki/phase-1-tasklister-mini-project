document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const newTaskDescription = document.getElementById("new-task-description").value;

    // Create new list item
    const li = document.createElement("li");
    li.textContent = newTaskDescription;

    // Add it to the task list
    taskList.appendChild(li);

    // Reset form input
    form.reset();
  });
});
