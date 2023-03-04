
import './style.css';

import { headerContent } from './headerContent';

import { mainContent } from './mainContent'; 

import { footerContent } from './footerContent';

headerContent(); 

mainContent(); 

footerContent();

// variable to determine which module the user clicks, if menu is pressed, 
// render menu content, if contact is pressed, render contact info 
// let moduleVariable 

let headerHomeBtn = document.querySelector('.home-btn');

let headerMenuBtn = document.querySelector('.menu-btn'); 

let headerContactBtn = document.querySelector('.contact-btn');

console.log(headerHomeBtn);

console.log(headerMenuBtn);

console.log(headerContactBtn); 

// headerHomeBtn.addEventListener('click', () => {
//     moduleVariable = 'Home';
//     determinePage();
//     return
// }) 

// headerMenuBtn.addEventListener('click', () => { 
//     moduleVariable = 'Menu';
//     determinePage();
//     return
// }) 

// headerContactBtn.addEventListener('click', () => { 
//     moduleVariable = 'Contact';
//     determinePage();
//     return
// })

// remove previous content/styles then render new 

// function determinePage () { 
//     let mainContentDivContainer = document.getElementById('content'); 
//     console.log(mainContentDivContainer);
//     if (moduleVariable === 'Home') { 
//         // mainContentDivContainer.remove();

//         initialPageLoad().headerContent(); 
//         initialPageLoad().mainContent();

//         initialPageLoad().footerContent();  
//     } else if (moduleVariable === 'Menu') { 
//         // mainContentDivContainer.remove();
//         initialPageLoad().headerContent(); 
//         initialPageLoad().footerContent();  
//     } else if (moduleVariable === 'Contact') { 
//         // mainContentDivContainer.remove();

//         initialPageLoad().headerContent(); 
//         initialPageLoad().footerContent(); 
//     }
// } 

// determinePage();