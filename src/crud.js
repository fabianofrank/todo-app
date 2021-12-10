/* eslint-disable import/no-cycle, object-curly-newline */
import { newTask, AddItem, setStored, displayList, checkList } from './index.js';

const addCrud = () => {
  const addEnter = document.querySelector('.add-enter');
  addEnter.addEventListener('keyup', ({ key }) => {
    if (key === 'Enter' && addEnter.value !== '') {
      const newEntry = new AddItem();
      newEntry.description = addEnter.value;
      newEntry.index = newTask.items.length;
      newTask.items.push(newEntry);
      addEnter.value = '';
      checkList.innerHTML = '';
      setStored();
      displayList();
    }
  });
};

const removeCrud = (trashIcon) => {
  trashIcon.addEventListener('click', () => {
    newTask.items.forEach((item, index) => {
      if (item.completed === true) {
        newTask.items.splice(index, 1);
      }
    });
    setStored();
    displayList();
  });
};

const clearCrud = () => {
  const clearBtn = document.querySelector('.button');
  clearBtn.addEventListener('click', () => {
    const filtered = newTask.items.filter((item) => (item.completed !== true));
    const setStored = () => localStorage.setItem('newItems', JSON.stringify(filtered));
    setStored();
    displayList();
  });
};

const editCrud = () => {
  const editable = document.querySelectorAll('.edit');
  for (let i = 0; i < editable.length; i++) {
    editable[i].addEventListener('keyup', ({ key }) => {
      if (key === 'Enter' && editable[i].value !== '') {
        newTask.items[i].description = editable[i].textContent;
        editable[i].blur();
        setStored();
      }
    });
  }
};

export { addCrud, removeCrud, clearCrud, editCrud };
