const form = document.getElementById('addForm');
const itemList = document.getElementById('items');
const filter = document.getElementById('filter');

// Load saved items
document.addEventListener('DOMContentLoaded', loadItems);

// Add item
form.addEventListener('submit', addItem);

// Remove item
itemList.addEventListener('click', removeItem);

// Filter items
filter.addEventListener('keyup', filterItems);

function addItem(e) {
  e.preventDefault();
  const newItem = document.getElementById('itemInput').value;

  if (newItem.trim() !== '') {
    createListItem(newItem);
    saveToLocalStorage(newItem);
    form.reset();
  }
}

function createListItem(text) {
  const li = document.createElement('li');
  li.className = 'list-group-item';
  li.textContent = text;

  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'delete-btn';
  deleteBtn.textContent = 'Delete';

  li.appendChild(deleteBtn);
  itemList.appendChild(li);
}

function removeItem(e) {
  if (e.target.classList.contains('delete-btn')) {
    const itemText = e.target.parentElement.firstChild.textContent;
    e.target.parentElement.remove();
    removeFromLocalStorage(itemText);
  }
}

function filterItems(e) {
  const text = e.target.value.toLowerCase();
  const items = itemList.getElementsByTagName('li');

  Array.from(items).forEach((item) => {
    const itemName = item.firstChild.textContent.toLowerCase();
    item.style.display = itemName.includes(text) ? 'flex' : 'none';
  });
}

function saveToLocalStorage(item) {
  let items = JSON.parse(localStorage.getItem('items')) || [];
  items.push(item);
  localStorage.setItem('items', JSON.stringify(items));
}

function removeFromLocalStorage(item) {
  let items = JSON.parse(localStorage.getItem('items')) || [];
  items = items.filter((i) => i !== item);
  localStorage.setItem('items', JSON.stringify(items));
}

function loadItems() {
  const items = JSON.parse(localStorage.getItem('items')) || [];
  items.forEach((item) => createListItem(item));
}
