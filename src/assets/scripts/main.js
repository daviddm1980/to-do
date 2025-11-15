const textArea = document.getElementById("toDo");

function crearTarea() {
	const valorArea = textArea.value.trim();

	if (textArea.value === "") return;

	const containerToDo = document.querySelector("ul");
	const li = document.createElement("li");
	const tareaElement = document.createElement("p");
	tareaElement.classList.add("tarea");
	tareaElement.textContent = valorArea;

	const times = document.createElement("span");
	times.classList.add("times");
	times.textContent = "X";

	times.addEventListener("click", () => {
		li.remove();
	});
	// li.appendChild()
	li.appendChild(times);
	containerToDo.appendChild(li);
	li.appendChild(tareaElement);

	textArea.value = "";
}

document.getElementById("btnEnviar").addEventListener("click", crearTarea);
