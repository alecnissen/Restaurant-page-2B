export const menuContent = () => { 
let contentDivContainer = document.getElementById('content');

let div = document.createElement('div'); 

div.textContent = 'helllllloo'; 

div.style.backgroundColor = 'yellow'; 

div.style.color = 'black';

contentDivContainer.append(div);  

return div; 

// document.body.append(contentDivContainer);
}