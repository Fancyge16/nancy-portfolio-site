function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();
  if (task === "") return;

  const li = document.createElement("li");
  li.innerHTML = `${task} <button onclick="removeTask(this)">❌</button>`;

  document.getElementById("taskList").appendChild(li);
  input.value = "";
}

function removeTask(button) {
  button.parentElement.remove();
}

