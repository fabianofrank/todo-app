import { items, addItem, removeItem } from './__mock__/index.js';
import { setStored, displayList,} from './index.js';

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

export { addCrud, removeCrud };