/* eslint-disable no-loop-func */
import { items } from './__mock__/index.js';
import { displayList, setStored } from './src/index.js';

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

function check(input, item, label, setStored, trashIcon, moreIcon) {
  input.addEventListener('change', () => {
    if (input.checked) {
      item.completed = true;
      label.style.textDecoration = 'line-through';
      trashIcon.style.display = 'block';
      moreIcon.style.display = 'none';
    } else {
      item.completed = false;
      label.style.textDecoration = 'none';
      trashIcon.style.display = 'none';
      moreIcon.style.display = 'block';
    }
    setStored();
  });

  if (item.completed === true) {
    input.checked = true;
    label.style.textDecoration = 'line-through';
    moreIcon.style.display = 'none';
  } else {
    trashIcon.style.display = 'none';
  }
}

export { editCrud, clearCrud, check };
