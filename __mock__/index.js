/* eslint-disable import/no-mutable-exports, max-classes-per-file, prefer-const */
let items = [
  {
    description: 'something 1',
    completed: false,
    index: 0,
    id: 'item-0',
  },
  {
    description: 'something 2',
    completed: true,
    index: 1,
    id: 'item-1',
  },
];

const input = 'something 4';

class AddItem {
  constructor(description, index) {
    this.description = description;
    this.completed = false;
    this.index = index;
    this.id = `item-${this.index}`;
  }
}

const addItem = (elem) => {
  const item = new AddItem(elem.description, elem.index);
  items.push(item);
};

const removeItem = () => {
  const filtered = items.pop();
  return filtered;
};

const editItem = (item) => {
  item.description = input;
};

const checkItem = (item) => {
  item.completed = !item.completed;
};

class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = String(value);
  }

  removeItem(key) {
    delete this.store[key];
  }
}

global.localStorage = new LocalStorageMock();

const setStored = (items) => global.localStorage.setItem('newItems', JSON.stringify(items));
const getStored = () => JSON.parse(global.localStorage.getItem('newItems'));

const clearItems = (items) => {
  const filtered = items.filter((item) => (!item.completed));
  setStored(filtered);
  items = getStored();
  return items;
};

export {
  items,
  addItem,
  removeItem,
  editItem,
  AddItem,
  input,
  checkItem,
  clearItems,
};
