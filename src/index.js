/* eslint-disable import/no-cycle, object-curly-newline */
import './style.css';
import more from './more.png';
import trash from './trash.png';
import reload from './reload.png';
import enter from './enter.png';
import { check } from './status.js';
import { addCrud, clearCrud, editCrud, removeCrud } from './crud.js';

// Object Template
class CreateTask {
  constructor() {
    this.items = [];
  }
}

const newTask = new CreateTask();
class AddItem {
  constructor(description, index) {
    this.description = description;
    this.completed = false;
    this.index = index;
  }
}

// Storage
const setStored = () => localStorage.setItem('newItems', JSON.stringify(newTask.items));
const getStored = () => JSON.parse(window.localStorage.getItem('newItems'));
// const removeStored = () => localStorage.removeItem('');

// Display Task
const checkList = document.querySelector('.checklist');
function displayList() {
  const list = getStored();
  if (list !== null && list !== undefined) {
    newTask.items = list;
  }
  const oldList = document.querySelectorAll('.container');
  [...oldList].forEach((e) => e.remove());
  newTask.items.forEach((item) => {
    const container = document.createElement('div');
    const input = document.createElement('input');
    const label = document.createElement('label');
    const moreIcon = document.createElement('img');
    moreIcon.src = more;
    const trashIcon = document.createElement('img');
    trashIcon.src = trash;
    container.appendChild(input);
    container.appendChild(label);
    container.appendChild(moreIcon);
    container.appendChild(trashIcon);
    container.classList.add('container');
    input.classList.add('checkbox');
    label.classList.add('edit');
    input.setAttribute('type', 'checkbox');
    label.setAttribute('contenteditable', 'true');
    const textNode = document.createTextNode(item.description);
    label.appendChild(textNode);
    checkList.appendChild(container);
    check(input, item, label, setStored, trashIcon, moreIcon);
    editCrud();
    removeCrud(trashIcon);
    getStored();
  });
}

// Display Input
const form = document.querySelector('.form');
const formInput = document.createElement('input');
formInput.classList.add('add-enter');
formInput.placeholder = 'Add to your list...';
form.appendChild(formInput);

// Enter & Reload Icons
const enterIcon = document.createElement('img');
form.appendChild(enterIcon);
enterIcon.src = enter;
const reloadIcon = document.createElement('img');
const head = document.querySelector('.head');
head.appendChild(reloadIcon);
reloadIcon.src = reload;

// CRUD
addCrud();
clearCrud();

window.addEventListener('load', () => {
  displayList();
});

export { newTask, CreateTask, AddItem, getStored, setStored, displayList, checkList }
