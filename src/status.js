export function check(input, item, label, setStored) {
  input.addEventListener('change', () => {
    if (input.checked) {
      item.completed = true;
      label.style.textDecoration = 'line-through';
    } else {
      item.completed = false;
      label.style.textDecoration = 'none';
    }
    setStored();
  });

  if (item.completed === true) {
    input.checked = true;
    label.style.textDecoration = 'line-through';
  }
}
