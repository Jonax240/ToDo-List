const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul");

console.log(input);
console.log(button);
console.log(list);


// Étape 3 : réagir au clic
button.addEventListener("click", function () {

    console.log("Button waz clicked !");

    // Étape 4 : récupérer la tâche
    const task = input.value;

    console.log(task);

    // Étape 5 : créer un <li>
    const li = document.createElement("li");

    // Ajouter le texte de la tâche
    li.innerText = task;

    // Ajouter le <li> dans la <ul>
    list.appendChild(li);
});