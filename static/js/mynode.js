const notebookButton = document.querySelector('#notebook-button');
const notebook = document.querySelector('#notebook');
const closeButton = document.querySelector('.close-button');

notebookButton.addEventListener('click', (event) => {
  if (event.target === notebookButton) {
    notebook.classList.add('show');
  }
});

closeButton.addEventListener('click', () => {
  notebook.classList.remove('show');
});

document.addEventListener('click', (event) => {
  if (!notebook.contains(event.target) && event.target !== notebookButton) {
    notebook.classList.remove('show');
  }
});

function doTask() {
  // Выполнение задачи
}