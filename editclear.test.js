import {
  editItem,
  input,
  checkItem,
  items,
  clearItems,
} from './__mock__/index.js';

describe('editing and clearing functions', () => {
  test('edits text', () => {
    const item = {
      description: 'something 3',
      index: 2,
    };
    editItem(item);
    expect(item.description).toBe(input);
  });

  test('check completed items', () => {
    const item = {
      description: 'something 3',
      index: 2,
      completed: true,
    };
    checkItem(item);
    expect(item.completed).toBeFalsy();
  });

  test('clears checked items', () => {
    clearItems(items);
    expect(items.length).toBe(1);
  });
});
