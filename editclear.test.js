import { editCrud, clearCrud, check } from './editclear.js';
import { addItem, editItem, input } from './__mock__/index.js';

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

  // test('check completed items', () => {
    
  // });
});