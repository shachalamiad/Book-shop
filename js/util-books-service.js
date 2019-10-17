'use strict';


function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}
function loadFromStorage(key) {
    var str = localStorage.getItem(key);
    var value = JSON.parse(str)
    return value;
}

function closeModal() {
    setTimeout(function () {
        document.querySelector('.add-book').style.display = 'none'; 
          }, 2000);
}