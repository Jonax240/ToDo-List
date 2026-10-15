const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul");

function addTask() {
  const task = input.value.trim();

  if (task === "") {
    return;
  }

  const li = document.createElement("li");
  li.innerText = task;

  // Création du bouton de suppression
  const buttonRemove = document.createElement("button");
  buttonRemove.innerText = "Supprimer";
  li.appendChild(buttonRemove);
  
  // Événement pour supprimer la tâche
  buttonRemove.addEventListener("click", (event) => {
    event.stopPropagation(); // Évite que le clic ne traverse le li
    li.remove();
  });

  // On ajoute le bouton dans le li
  li.appendChild(buttonRemove);

  // On ajoute le li dans la liste ul
  list.appendChild(li);

  input.value = "";

  // Événement pour barrer/débarrer la tâche
  li.addEventListener("click", function () {
    li.classList.toggle("completed");
  });
}

button.addEventListener("click", addTask);

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});