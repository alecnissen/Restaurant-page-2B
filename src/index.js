
import './style.css';

import { headerContent } from './headerContent';

import { mainContent } from './mainContent'; 

import { footerContent } from './footerContent'; 

import { menuContent } from './menuContent';

headerContent(); 

mainContent(); 

footerContent(); 

let contentDivContainer = document.getElementById('content'); 

let containerChildren = contentDivContainer.children; 

console.log(containerChildren);

// variable to determine which module the user clicks, if menu is pressed, 
// render menu content, if contact is pressed, render contact info 
let moduleVariable 

let headerHomeBtn = document.querySelector('.home-btn');

let headerMenuBtn = document.querySelector('.menu-btn'); 

let headerContactBtn = document.querySelector('.contact-btn');

console.log(headerHomeBtn);

console.log(headerMenuBtn);

console.log(headerContactBtn); 

headerHomeBtn.addEventListener('click', () => {
    moduleVariable = 'Home'; 
    determinePage();
    return
}) 

headerMenuBtn.addEventListener('click', () => { 
    moduleVariable = 'Menu';
    determinePage();
    return
}) 

headerContactBtn.addEventListener('click', () => { 
    moduleVariable = 'Contact';
    determinePage();
    return
})

// remove previous content/styles then render new 

function determinePage () { 
    if (moduleVariable === 'Home') { 
        headerContent(); 
        mainContent();
        footerContent();  
    } else if (moduleVariable === 'Menu') { 
        // headerContent(); 
        console.log('hey');
        contentDivContainer.replaceChild(menuContent(), containerChildren[1]);
        // menuContent();
        // footerContent();  
    } else if (moduleVariable === 'Contact') { 
        headerContent(); 
        footerContent(); 
    }
} 

determinePage(); 




// codepen example 
// const container = document.getElementById("container");
// const changeCenter = document.getElementById("change");

// // create a function to dupliate the header, footer, container

// const header = (() => {
//   const createHeader = () => {
//     let header = document.createElement("header");
//     let h1 = document.createElement("h1");
//     h1.textContent = "Header";
//     header.appendChild(h1);
//     container.appendChild(header);
//   };
//   return { createHeader };
// })();

// // add center and footer and call on load page

// const center = () => { 
//   let centerDiv = document.createElement('div'); 
//   let h1 = document.createElement('h1'); 
//   h1.textContent = 'Center'; 
//   centerDiv.appendChild(h1);
//   container.appendChild(centerDiv);
// } 

// const footer



// const loadPage = (() => {
//   header.createHeader()
//   center();
// })();

// // on button click change center content 


// const container = document.getElementById("container");
// const changeCenter = document.getElementById("change");

// // create a function to dupliate the header, footer, container

// const header = (() => {
//   const createHeader = () => {
//     let header = document.createElement("header");
//     let h1 = document.createElement("h1");
//     h1.textContent = "Header";
//     header.appendChild(h1);
//     container.appendChild(header);
//   };
//   return { createHeader };
// })();

// // add center and footer and call on load page

// const center = () => { 
//   let centerDiv = document.createElement('div'); 
//   let h1 = document.createElement('h1'); 
//   h1.textContent = 'Center'; 
//   centerDiv.appendChild(h1);
//   container.appendChild(centerDiv);
// } 

// const footer = () => { 
//  let footerDiv = document.createElement('div'); 
//  let h1 = document.createElement('h1');
//  h1.textContent = 'Footer';
//  footerDiv.appendChild(h1);
//  container.appendChild(footerDiv);
  
// }



// const loadPage = (() => {
//   header.createHeader()
//   center();
//   footer();
// })();

// // on button click change center content

// changeCenter.addEventListener('click', () => { 
//  // remove the center element, tried using .remove() 
//   center().remove();
  
  
// })