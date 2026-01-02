document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const input = document.getElementById("new-task-description");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    buildToDo(input.value);
    form.reset();
  });
});

function buildToDo(task) {
  const ul = document.getElementById("tasks");

  const li = document.createElement("li");
  li.textContent = task;

  ul.appendChild(li);
}