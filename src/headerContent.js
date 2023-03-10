import headerBurgerIcon from 'burger.png';

export function headerContent() {  

    const headerContentDiv = document.createElement('div'); 

    const headerBtnContainer = document.createElement('div');

    headerBtnContainer.classList.add('header-btn-div');
    
    headerContentDiv.classList.add('header-content-container');
    
    // headerContentDiv.innerHTML = "Alec's House of Burgers <br> The Best In The City!";
    
    headerContentDiv.textContent = "Alec's House of Burgers and Cheesesteak's \r\n The Best In The City! \r\n  Dine-in, Takeout, Delivery";

    let headerBurgerTopIcon = document.createElement('img'); 

    headerBurgerTopIcon.src = headerBurgerIcon;

    headerBurgerTopIcon.style.width = '4em';

    const homeBtn = document.createElement('button');

    homeBtn.classList.add('home-btn');

    const menuBtn = document.createElement('button'); 

    menuBtn.classList.add('menu-btn');

    const orderOnlineBtn = document.createElement('button');

    orderOnlineBtn.classList.add('order-online-btn');

    const contactBtn = document.createElement('button');

    contactBtn.classList.add('contact-btn');

    homeBtn.textContent = 'Home'; 

    menuBtn.textContent = 'Menu';

    // orderOnlineBtn.textContent = 'Order Online';

    contactBtn.textContent = 'Contact';

    headerContentDiv.append(headerBurgerTopIcon);

    headerBtnContainer.append(homeBtn);

    headerBtnContainer.append(menuBtn);

    // headerBtnContainer.append(orderOnlineBtn);

    headerBtnContainer.append(contactBtn);

    headerContentDiv.append(headerBtnContainer); 
    
    return  headerContentDiv ;
    
}