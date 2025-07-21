var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

//Form

form.addEventListener('submit', addItem);

function addItem(e){
    e.prevenDefault();

    console.log(1);
}
