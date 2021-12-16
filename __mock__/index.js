const items = [
  { description: 'something 1',
    completed: false,
    index: 0,
    id: `item-0`,
  },
  { description: 'something 2',
    completed: true,
    index: 1,
    id: `item-1`,
  },
];

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
}

const removeItem = (elem) => {
  const filtered = items.pop();
  return filtered;
}

export { items, addItem, removeItem }