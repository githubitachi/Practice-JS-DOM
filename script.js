// script.js
var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

//Form
form.addEventListener('submit', addItem);


//addItem
function addItem(e){
    e.preventDefault(); // Corrected typo here!

    console.log(1);
}