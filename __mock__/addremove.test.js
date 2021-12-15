import { addCrud, removeCrud } from "./__mock__/addremove";

test('expectation', () => {
  document.body.innerHTML = '<div class="checklist"></div>';
  addCrud()
  expect().toBe();
})

test('expectation', () => {
  expect(removeCrud()).toBe();
})
