import { addCrud, removeCrud } from "./addremove";

test('increases items by one', () => {
  document.body.innerHTML = '<div class="checklist"></div>';
  let items = [
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
  addCrud()
  expect(items.length).toBe(3);
})

