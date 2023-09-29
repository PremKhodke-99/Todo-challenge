const time = new Date().toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric"
  });
  document.getElementById("time").innerText = time;
  
  const list = document.getElementById("todo-list");
  const form = document.getElementById("task-form");
  
  let count = 1;
  
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.target;
    const task = form.elements["todo-task"].value;
  
    if (task !== "") {
      const li = document.createElement("li");
      li.className = "list-group-item p-3";
  
      const check = document.createElement("input");
      check.type = "checkbox";
      check.className = "form-check-input me-1";
      check.id = `todo-${count}`;
  
      check.addEventListener("change", function () {
        if (check.checked) {
          li.classList.add("text-muted");
          li.style.textDecoration = "line-through";
        } else {
          li.classList.remove("text-muted");
          li.style.textDecoration = "none";
        }
      });
  
      count++;
  
      li.appendChild(check);
      li.appendChild(document.createTextNode(" " + task));
      list.appendChild(li);
    }
  });
  
  let clear = document.getElementById("clear-btn");
  clear.addEventListener("click", function () {
    list.innerText = "";
  });
  
