document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const newTaskDescription = document.getElementById("new-task-description").value;

    if (newTaskDescription !== "") {
      const li = document.createElement("li");
      li.textContent = newTaskDescription;
      taskList.appendChild(li);
    }

    form.reset();
  });
});
