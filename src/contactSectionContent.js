
import locationPicture from '../rest-page-contact-page-location-2 (1).png';

import smallBurgerIcon from '../burger.png';

import chefImg from '../jesson-mata-I2Erl2cU_A4-unsplash.jpg';

export const contactPage = () => { 
    let div = document.createElement('div');
    
    div.classList.add('contact-page-container-div-styles'); 

    let contactPageBurgerIcon = document.createElement('img'); 

    contactPageBurgerIcon.style.width = '15em';

    contactPageBurgerIcon.src = smallBurgerIcon;

    let contactPagePhoneNumberText = document.createElement('p'); 

    contactPagePhoneNumberText.classList.add('contact-page-phone-number-styles'); 

    contactPagePhoneNumberText.textContent = 'Phone: 215-468-1546';

    let contactPageAddressText = document.createElement('p'); 

    contactPageAddressText.classList.add('contact-page-address-text-styles'); 

    contactPageAddressText.textContent = 'Address: 1237 E Passyunk Ave, Philadelphia, PA 19147';

    let locationPictureContactPage = new Image();  

    locationPictureContactPage.classList.add('contact-page-location-picture-styles');

    let contactPageFarewellText = document.createElement('p'); 

    contactPageFarewellText.classList.add('contact-page-farewell-text'); 

    contactPageFarewellText.textContent = 'We cannot wait to serve you! \r\n Please visit our wonderful family owned restaurant \r\n take a look at our excellent menu and order online! \r\n Experience Philadelphia Tradition!';

    let burgerChefImg = new Image(); 

    burgerChefImg.classList.add('contact-page-burger-chef-img');

    burgerChefImg.src = chefImg;

    let contactPageLineBreak = document.createElement('br');

    locationPictureContactPage.src = locationPicture;  

    div.appendChild(contactPageBurgerIcon);

    div.appendChild(contactPagePhoneNumberText);

    div.appendChild(contactPageAddressText); 

    div.appendChild(contactPageFarewellText);

    div.appendChild(burgerChefImg);

    div.appendChild(contactPageLineBreak);
    
    div.appendChild(locationPictureContactPage);

return div; 

} 