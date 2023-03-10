import { headerContent } from './headerContent';

import { mainContent } from './mainContent'; 

import { footerContent } from './footerContent';  

let contentDivContainer = document.getElementById('content'); 

export function renderPageContents() { 
    contentDivContainer.appendChild(headerContent());

    contentDivContainer.appendChild(mainContent());

    contentDivContainer.appendChild(footerContent());


} 


