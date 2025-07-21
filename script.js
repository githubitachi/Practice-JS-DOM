// script.js
var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

//Form
form.addEventListener('submit', addItem);


//addItem
function addItem(e){
    e.preventDefault(); // Corrected typo here!

    // Get input value
    var newItem = document.getElementById('itemInput').value; // Corrected ID here!

    // Create new li element
    var li = document.createElement('li'); // Correctly create new li element

    // Add class
    li.className = 'list-group-item';

    // Add text node
    li.appendChild(document.createTextNode(newItem));

    // Append li to the item list
    itemList.appendChild(li);

    // Clear the input field after adding the item (optional, but good practice)
    document.getElementById('itemInput').value = '';
}