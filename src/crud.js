/* eslint-disable import/no-cycle */
import {
  items,
  AddItem,
  setStored,
  displayList,
  checkList,
} from './index.js';

const addCrud = () => {
  const addEnter = document.querySelector('.add-enter');
  addEnter.addEventListener('keyup', ({ key }) => {
    if (key === 'Enter' && addEnter.value !== '') {
      const newEntry = new AddItem(addEnter.value, items.length);
      items.push(newEntry);
      addEnter.value = '';
      checkList.innerHTML = '';
      setStored();
      displayList();
    }
  });
};

const removeCrud = (trashIcon) => {
  trashIcon.addEventListener('click', () => {
    const filtered = items.filter((item) => item.id !== trashIcon.id);
    filtered.forEach((item, i) => {
      item.index = i;
      item.id = `item-${i}`;
    });
    localStorage.setItem('newItems', JSON.stringify(filtered));
    displayList();
  });
};

const clearCrud = () => {
  const clearBtn = document.querySelector('.button');
  clearBtn.addEventListener('click', () => {
    const filtered = items.filter((item) => (item.completed !== true));
    filtered.forEach((item, i) => {
      item.index = i;
      item.id = `item-${i}`;
    });
    localStorage.setItem('newItems', JSON.stringify(filtered));
    displayList();
  });
};

const editCrud = () => {
  const editable = document.querySelectorAll('.edit');
  for (let i = 0; i < editable.length; i += 1) {
    editable[i].addEventListener('keyup', ({ key }) => {
      if (key === 'Enter' && editable[i].value !== '') {
        items[i].description = editable[i].textContent;
        editable[i].blur();
        setStored();
      }
    });
  }
};

export {
  addCrud,
  removeCrud,
  clearCrud,
  editCrud,
};
