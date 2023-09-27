const time = new Date().toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric"
  });
  
  document.getElementById("time").innerText = time;
  
  const list = document.getElementById("todo-list");
  