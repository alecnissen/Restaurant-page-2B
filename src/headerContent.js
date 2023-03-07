export function headerContent() { 

    const headerContentDiv = document.createElement('div'); 

    const headerBtnContainer = document.createElement('div');

    headerBtnContainer.classList.add('header-btn-div');
    
    headerContentDiv.classList.add('header-content-container');
    
    // headerContentDiv.innerHTML = "Alec's House of Burgers <br> The Best In The City!";
    
    headerContentDiv.textContent = "Alec's House of Burgers \r\n The Best In The City!";

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

    headerContentDiv.append(headerBtnContainer); 
    
    return  headerContentDiv ;
    
}