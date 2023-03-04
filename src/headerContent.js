export function headerContent() { 
    const contentDivContainer = document.getElementById('content'); 

    const headerContent = document.createElement('div'); 

    const headerBtnContainer = document.createElement('div');

    headerBtnContainer.classList.add('header-btn-div');
    
    headerContent.classList.add('header-content-container');
    
    headerContent.innerHTML = "Alec's House of Burgers <br> The Best In The City!";
    
    const homeBtn = document.createElement('button');

    homeBtn.classList.add('home-btn');

    const menuBtn = document.createElement('button'); 

    menuBtn.classList.add('menu-btn');

    const contactBtn = document.createElement('button');

    contactBtn.classList.add('contact-btn');

    homeBtn.textContent = 'Home'; 

    menuBtn.textContent = 'Menu';

    contactBtn.textContent = 'Contact';

    headerBtnContainer.append(homeBtn);

    headerBtnContainer.append(menuBtn);

    headerBtnContainer.append(contactBtn);

    headerContent.append(headerBtnContainer);
    
    contentDivContainer.append(headerContent);

    document.body.append(contentDivContainer);
    
}