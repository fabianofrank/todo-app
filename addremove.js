const setStored = () => localStorage.setItem('newItems', JSON.stringify(items));

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

class AddItem {
  constructor(description, index) {
    this.description = description;
    this.completed = false;
    this.index = index;
    this.id = `item-${this.index}`;
  }
}

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

function displayList() {
  const list = getStored();
  if (list !== null && list !== undefined) {
    items = list;
  }
  const oldList = document.querySelectorAll('.container');
  [...oldList].forEach((e) => e.remove());
  items.forEach((item, i) => {
    items[i].index = i;
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
    trashIcon.id = item.id;
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

export { addCrud, removeCrud }