window.addEventListener("load", () => {
  let formId = document.getElementById("form_id");
  let input = document.getElementById("text_add");
  let tasks = document.getElementById("tasks");

  formId.addEventListener("submit", (e) => {
    e.preventDefault();

    let task = input.value;

    if (!task) {
      alert(`Please Fill this Task`);
      return;
    }
    let task_el = document.createElement("div");
    task_el.classList.add("task");

    let content_el = document.createElement("div");
    content_el.classList.add("content");

    task_el.appendChild(content_el);

    let task_input_el = document.createElement("input");
    task_input_el.classList.add("text");
    task_input_el.type = "text";
    task_input_el.value = task;
    task_input_el.setAttribute("readonly", "readonly");

    content_el.appendChild(task_input_el);

    let action = document.createElement("div");
    action.classList.add("actions");

    let editButton = document.createElement("button");
    editButton.classList.add("edit");
    editButton.innerHTML = "Edit";

    let deleteButton = document.createElement("button");
    deleteButton.classList.add("delete");
    deleteButton.innerHTML = "Delete";

    action.appendChild(editButton);
    action.appendChild(deleteButton);

    task_el.appendChild(action);

    tasks.appendChild(task_el);
    input.value = "";

    editButton.addEventListener("click", () => {
      if (editButton.innerText.toLowerCase() == "edit") {
        task_input_el.removeAttribute("readonly");
        task_input_el.focus();
        editButton.innerText = "Save";
      } else {
        task_input_el.setAttribute("readonly", "readonly");
        editButton.innerText = "Edit";
      }
    });

    deleteButton.addEventListener("click", () => {
      tasks.removeChild(task_el);
    });
  });
});
