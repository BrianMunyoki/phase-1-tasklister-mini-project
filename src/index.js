document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    const newTaskDescription = document.getElementById("new-task-description").value;
    const priority = document.getElementById("priority").value;

    // Create list item
    const li = document.createElement("li");
    li.textContent = newTaskDescription + " ";

    // Set color based on priority
    if (priority === "high") {
      li.style.color = "red";
    } else if (priority === "medium") {
      li.style.color = "orange";
    } else {
      li.style.color = "green";
    }

    // Create delete button
    const btn = document.createElement("button");
    btn.textContent = "Delete";
    btn.addEventListener("click", function () {
      li.remove();
    });

    li.appendChild(btn);
    taskList.appendChild(li);

    // Reset the form
    form.reset();
  });
});
