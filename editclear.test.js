import { editCrud, clearCrud, check } from './editclear.js';
import { addItem, editItem, input, checkItem } from './__mock__/index.js';

describe('editing and clearing functions', () => {
  test('edits text', () => {
    const item = {
      description: 'something 3',
      index: 2,
    };
    addItem(item);
    editItem(item);
    expect(item.description).toBe(input);
  });

  // test('clears checked items', () => {
    
  // });

  test('check completed items', () => {
    const item = {
      description: 'something 3',
      index: 2,
      completed: true,
    };
    addItem(item);
    checkItem(item);
    expect(item.completed).toBeFalsy();
  });
});