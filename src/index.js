import './style.css';

import { renderPageContents } from './initialPageLoad'; 

import { menuContent } from './menuContent.js';
// import { headerContent } from './headerContent';
import { mainContent } from './mainContent';
// import { footerContent } from './footerContent'; 
import { contactPage } from './contactSectionContent'; 

let contentDivContainer = document.getElementById('content'); 

renderPageContents(); 

let containerChildren = contentDivContainer.children; 

let moduleVariable;

let headerHomeBtn = document.querySelector('.home-btn');

let headerMenuBtn = document.querySelector('.menu-btn'); 

let headerContactBtn = document.querySelector('.contact-btn');

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

function determinePage () { 
    if (moduleVariable === 'Home') {   
         contentDivContainer.replaceChild(mainContent(), containerChildren[1]);
    } else if (moduleVariable === 'Menu') { 
        contentDivContainer.replaceChild(menuContent(), containerChildren[1]);
    } else if (moduleVariable === 'Contact') { 
        contentDivContainer.replaceChild(contactPage(), containerChildren[1]);
    }
} 

// determinePage(); 
