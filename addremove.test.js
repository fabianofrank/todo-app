import { items, addItem, removeItem } from "./__mock__/index";

describe('Adding and removing functions', () => {
  test('increases items by one', () => {
    const item = {
      description: '',
      index: 2
    }
    addItem(item);
    expect(items.length).toEqual(3);
  })

  test('removes items by one', () => {
    const item = {
      description: '',
      index: 2
    }
    removeItem(item);
    expect(items.length).toEqual(2);
  })
})
