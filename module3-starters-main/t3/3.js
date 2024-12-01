'use strict';
const target=document.getElementById('target');
const names = ['John', 'Paul', 'Jones'];
for (let i=0;i<names.length;i++){
    const list= document.createElement('li');
    list.textContent=names[i];
    target.appendChild(list)
}
