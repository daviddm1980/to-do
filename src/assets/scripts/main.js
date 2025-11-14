

const textArea = document.getElementById('toDo');
const containerToDo = document.getElementById('toDoContainer');

function crearTarea() {
    const valorArea = textArea.value;

    if (textArea.value === '') return;

    const tareaElement = document.createElement('p');
    tareaElement.classList.add('tarea');
    tareaElement.textContent = valorArea.trim();
    containerToDo.appendChild(tareaElement);

    textArea.value = '';
}


document.getElementById('btnEnviar').addEventListener('click',crearTarea);