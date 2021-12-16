import { editCrud, clearCrud } from './editclear.js';

describe('editing and clearing functions', () => {
  test('edits text', () => {
  
  });

  test('clears checked items', () => {
    const item = {
      description: '',
      index: 2,
    };
    removeItem(item);
    expect(items.length).toEqual(2);
  });
});