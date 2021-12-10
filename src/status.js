/* eslint-disable import/prefer-default-export */
function check(input, item, label, setStored, trashIcon, moreIcon) {
  input.addEventListener('change', () => {
    if (input.checked) {
      item.completed = true;
      label.style.textDecoration = 'line-through';
      trashIcon.style.display = 'block';
      moreIcon.style.display = 'none';
    } else {
      item.completed = false;
      label.style.textDecoration = 'none';
      trashIcon.style.display = 'none';
      moreIcon.style.display = 'block';
    }
    setStored();
  });

  if (item.completed === true) {
    input.checked = true;
    label.style.textDecoration = 'line-through';
    moreIcon.style.display = 'none';
  } else {
    trashIcon.style.display = 'none';
  }
}

export { check };
