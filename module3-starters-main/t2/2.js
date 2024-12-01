'use strict';
const target= document.getElementById('target');
const items = ["First item", "Second item", "Third item"];
for (let i = 0; i < items.length; i++) {
const list = document.createElement("li");
list.textContent=items[i];
if (i===1){
list.classList.add('my-item')}
target.appendChild(list)
}