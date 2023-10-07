const time = new Date().toLocaleDateString("en-in", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric"
});
document.getElementById("time").innerText = time;


// const initialArr = localStorage.getItem("todos")?JSON.parse(localStorage.getItem("todos")):[];


const list = document.getElementById("todo-list");
const form = document.getElementById("task-form");

let count = 1;

let storage = localStorage.length !== 0 ? JSON.parse(localStorage.get("todos")) : [];

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.target;
    const task = form.elements["todo-task"].value;

    if (task !== "") {
        store(task);

        const li = document.createElement("li");
        li.className = "list-group-item p-3";

        const check = document.createElement("input");
        check.type = "checkbox";
        check.className = "form-check-input me-1";
        check.id = `todo-${count}`;

        const label = document.createElement("label");
        label.className = "form-check-label";
        label.htmlFor = `todo-${count}`;
        label.innerText = task;
        
        check.addEventListener("change", function () {
            if (check.checked) {
                label.classList.add("text-muted");
                label.style.textDecoration = "line-through";
            } else {
                label.classList.remove("text-muted");
                label.style.textDecoration = "none";
            }
        });
        
        count++;

        li.append(check, label);
        list.appendChild(li);
    }
});

let storage1 = [];
function store(task){
    storage1.push(task);
    localStorage.setItem("todos",JSON.stringify(storage1)),[];
};

let clear = document.getElementById("clear-btn");
clear.addEventListener("click", function () {
    list.innerText = "";
});

