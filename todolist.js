const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul");

// console.log(input);
// console.log(button);
// console.log(list);

button.addEventListener("click", function () {
  // console.log("Button waz clicked !");

  const task = input.value;

  // console.log(task);

  const li = document.createElement("li");

  li.innerText = task;

  list.appendChild(li);

  input.value = "";

  li.addEventListener("click", function () {
    li.classList.toggle("completed");
  });
});

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    // même action que le bouton
    button.click();
  }
});
