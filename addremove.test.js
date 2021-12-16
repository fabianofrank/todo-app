import { items, addItem, removeItem } from './__mock__/index.js';

describe('Adding and removing functions', () => {
  test('increases items by one', () => {
    const item = {
      description: 'something 3',
      index: 2,
    };
    addItem(item);
    expect(items.length).toEqual(3);
  });

  test('removes items by one', () => {
    const item = {
      description: 'something 3',
      index: 2,
    };
    removeItem(item);
    expect(items.length).toEqual(2);
  });
});
