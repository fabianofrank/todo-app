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

const input = 'something 4'

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

const localStorage = (function() {
  var store = {};
  return {
    getItem: function(key) {
      return store[key];
    },
    setItem: function(key, value) {
      store[key] = value.toString();
    },
    clear: function() {
      store = {};
    },
    removeItem: function(key) {
      delete store[key];
    }
  };
})();

// Object.defineProperty(window, 'localStorage', { value: localStorageMock });
const setStored = () => localStorage.setItem('newItems', JSON.stringify(items));
const getStored = () => JSON.parse(localStorage.getItem('newItems'));

const clearItems = (items) => {
  const filtered = items.filter((item) => (item.completed !== true));
  setStored('newItems', filtered);
  return items = getStored();
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
