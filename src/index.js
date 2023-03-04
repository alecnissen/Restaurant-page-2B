// import './initialPageLoad';
// import { initialPageLoad } from './initialPageLoad';
// import initialPageLoad from './initialPageLoad';

// console.log(initialPageLoad.headerContent()); 

// work on setting up the entire header, 
// each section should be it's own module/function 

// work on the rest of the styling, 
// fine with just a header, subheader, font, color, background color 
// font size 


import './style.css';

import { initialPageLoad } from './initialPageLoad';

initialPageLoad().headerContent(); 

initialPageLoad().mainContent();

initialPageLoad().footerContent();  

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
    let mainContentDivContainer = document.getElementById('content'); 
    console.log(mainContentDivContainer);
    if (moduleVariable === 'Home') { 
        mainContentDivContainer.remove();

        initialPageLoad().headerContent(); 
        initialPageLoad().mainContent();

        initialPageLoad().footerContent();  
    } else if (moduleVariable === 'Menu') { 
        mainContentDivContainer.remove();
        initialPageLoad().headerContent(); 
        initialPageLoad().footerContent();  
    } else if (moduleVariable === 'Contact') { 
        mainContentDivContainer.remove();

        initialPageLoad().headerContent(); 
        initialPageLoad().footerContent(); 
    }
} 

determinePage();