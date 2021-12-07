import './style.css';
import more from './more.png';
import reload from './reload.png';
import enter from './enter.png';

// Array of Objects
let items = [
  {
    description: 'Do something 1',
    completed: false,
    index: 0,
  },
  {
    description: 'Do something 2',
    completed: false,
    index: 1,
  },
  {
    description: 'Do something 3',
    completed: false,
    index: 2,
  },
];

// Add Object
class AddItem {
  constructor(description, index) {
    this.description = description;
    this.completed = false;
    this.index = index;
  }
}

// Storage
function setStored() {
  localStorage.setItem('newItems', JSON.stringify(items));
}

function getStored() {
  JSON.parse(localStorage.getItem('newItems'));
}

// Display Function
const checkList = document.querySelector('.checklist');

function displayList() {
  const list = getStored();
  if (list !== null && list !== undefined) {
    items = list;
  }
  items.forEach((item) => {
    const container = document.createElement('div');
    const input = document.createElement('input');
    const label = document.createElement('label');
    const icon = document.createElement('img');
    icon.src = more;
    container.appendChild(input);
    container.appendChild(label);
    container.appendChild(icon);
    container.classList.add('container');
    input.classList.add('checkbox');
    input.setAttribute('type', 'checkbox');
    if (item.completed === true) {
      input.checked = true;
    }
    input.addEventListener('change', () => {
      if (input.checked) {
        item.completed = true;
      } else {
        item.completed = false;
      }
    });
    const textNode = document.createTextNode(item.description);
    label.appendChild(textNode);
    checkList.appendChild(container);
    getStored();
  });
}

// Enter Input
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

// Enter Event
const addEnter = document.querySelector('.add-enter');
addEnter.addEventListener('keyup', ({ key }) => {
  if (key === 'Enter' && addEnter.value !== '') {
    const newEntry = new AddItem();
    newEntry.description = addEnter.value;
    newEntry.index = items.length;
    items.push(newEntry);
    addEnter.value = '';
    checkList.innerHTML = '';
    setStored();
    displayList();
  }
});

window.addEventListener('load', () => {
  displayList();
});
