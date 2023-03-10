// when appending menu items, 
// probably have each secton/function within the menu module it's own function 
// which is the function for each section is then exported, 
// within each section, it can be a function that creates the elements, 
// then different styles can be applied, 


// you can possibly use p elements, have a div be the title, 

// I would possibly add a button at the top, that says click here to order online 
// text above button then just a standard button styled 

import menuBurgerIcon from '../burger.png';

import wingsMenuImg from '../scott-eckersley-R-7_ErUOLxw-unsplash.jpg'; 

import menuBurgerImg1 from '../Burgers-image-3.jpg'; 

import menuBurgerImgFinal from '../pexels-natan-machado-fotografia-gastronômica-15141034.jpg';

export const menuContent = () => { 

let div = document.createElement('div'); 

div.classList.add('menu-section-div');

let menuBurgerIconImg = document.createElement('img'); 

menuBurgerIconImg.classList.add('menu-burger-top-img');

menuBurgerIconImg.src = menuBurgerIcon; 

let lineBreak = document.createElement("br");

let orderOnlineBtn = document.createElement('button'); 

orderOnlineBtn.classList.add('menu-order-online-btn'); 

orderOnlineBtn.textContent = 'Order Online';

let starterMenuText = document.createElement('div'); 

starterMenuText.textContent = "Starters and Sides";

starterMenuText.classList.add('starter-menu-header-text');

let cheeseFriesInput = document.createElement('div'); 

cheeseFriesInput.classList.add('cheese-fries-input-text');

cheeseFriesInput.textContent = 'Cheese-Fries or Regular Fries: $2'; 

let cheeseFriesDescriptionText = document.createElement('p');

cheeseFriesDescriptionText.classList.add('cheese-fries-description-text');

cheeseFriesDescriptionText.textContent = 'Crispy loaded cheese fries served with blue cheese or our signature sauce';

cheeseFriesInput.appendChild(cheeseFriesDescriptionText); 

let onionRingsInput = document.createElement('div'); 

onionRingsInput.classList.add('onion-rings-input'); 

onionRingsInput.textContent = 'Onion Rings: $3'; 

let onionRingsDescriptionText = document.createElement('p'); 

onionRingsDescriptionText.classList.add('onion-rings-description-text'); 

onionRingsDescriptionText.textContent = 'Fresh onion slices, coated in batter, breadcrumbs, floar, along with pepper, paprika and onion powder sprinkled on for a real kick'; 

onionRingsInput.appendChild(onionRingsDescriptionText);

let bonelessWingsInput = document.createElement('div');

bonelessWingsInput.classList.add('boneless-wings-input'); 

bonelessWingsInput.textContent = "Boneless Wings: 5ct: $2 / 10ct: $3.25 / 20ct: $6"; 

let bonelessWingsDescriptionText = document.createElement('p');

bonelessWingsDescriptionText.classList.add('boneless-wings-description-text'); 

bonelessWingsDescriptionText.textContent = 'Served with blue cheese, BBQ sauce, butter and garlic and cajun buffalo';

bonelessWingsInput.appendChild(bonelessWingsDescriptionText);

let mozzarellaStickInput = document.createElement('div');

mozzarellaStickInput.classList.add('mozzarella-stick-input');

mozzarellaStickInput.textContent = 'Mozzarella Sticks: $3';

let mozzarellaStickDescription = document.createElement('p'); 

mozzarellaStickDescription.classList.add('mozzarella-stick-description-text');

mozzarellaStickDescription.textContent = 'Served with out marinara sauce'; 

mozzarellaStickInput.appendChild(mozzarellaStickDescription); 

let alecNachosInput = document.createElement('div'); 

alecNachosInput.classList.add('alec-nacho-input');

alecNachosInput.textContent = "Alec's Nachos Supreme: $5";

let alecNachosDescription = document.createElement('p');

alecNachosDescription.classList.add('alec-nachos-description-text'); 

alecNachosDescription.textContent = 'Tortilla chips loaded with beans, chili, melted chedder cheese, lettuce, onions, jalapenos, tomatoes, served with sour cream and salsa'

alecNachosInput.appendChild(alecNachosDescription); 

let wingsMenuContentImg1 = new Image(); 

wingsMenuContentImg1.classList.add('wings-picture-menu-content'); 

wingsMenuContentImg1.src = wingsMenuImg;

let burgerMenuText = document.createElement('div');

burgerMenuText.textContent = 'Famous-Burgers';

burgerMenuText.classList.add('burger-menu-header-text');

let theClassicBurgerInput = document.createElement('div');

theClassicBurgerInput.classList.add('classic-burger-input');

theClassicBurgerInput.textContent = 'The Classic: $5.25';

let theClassicBurgerDescription = document.createElement('p');

theClassicBurgerDescription.classList.add('the-classic-burger-description-text'); 

theClassicBurgerDescription.textContent = "Get ready, tdwo fresh buns, the finest grass-fed ground beef patties, crisp lettuce, tomato, onions, sirachi and mayo sauce, topped off peppers and your choice of spices!";

theClassicBurgerInput.appendChild(theClassicBurgerDescription);

let doubleBaconCheeseburgerInput = document.createElement('div');

doubleBaconCheeseburgerInput.classList.add('double-bacon-cheese-burger-input');

doubleBaconCheeseburgerInput.textContent = 'The infamous double bacon cheeseburger: $6.25';

let doubleBaconCheeseBurgerDescription = document.createElement('p');

doubleBaconCheeseBurgerDescription.textContent = "The freshest buns, prime quality bacon, two of the finest grass fed beef patties, lettuce, onion, tomato, mayo";

doubleBaconCheeseBurgerDescription.classList.add('double-bacon-cheeseburger-description-text');

doubleBaconCheeseburgerInput.appendChild(doubleBaconCheeseBurgerDescription); 

let elkBurgerInput = document.createElement('div'); 

elkBurgerInput.classList.add('elk-burger-input');

elkBurgerInput.textContent = 'Elk Burger: $7'; 

let elkBurgerDescription = document.createElement('p'); 

elkBurgerDescription.classList.add('elk-burger-description-text'); 

elkBurgerDescription.textContent = 'Freshly made burger buns, onion, tomato, prime quality elk patties, lettuce, served with mayo, mustard';

elkBurgerInput.appendChild(elkBurgerDescription); 

let fritaBurger = document.createElement('div'); 

fritaBurger.classList.add('frita-burger-input');

fritaBurger.textContent = 'Frita Burger/Frita Cubana: $6.50'; 

let fritaBurgerDescription = document.createElement('p');

fritaBurgerDescription.classList.add('frita-burger-description-text');

fritaBurgerDescription.textContent = 'A true classic, cuban rolls, ketchup, shoestring potatoes, onions, fresh beef patty, mayo'; 

fritaBurger.appendChild(fritaBurgerDescription); 

let burgerMenuContentImg2 = new Image(); 

burgerMenuContentImg2.classList.add('menu-picture-burger-img-2');

burgerMenuContentImg2.src = menuBurgerImg1;

let cheeseSteaksMenuText = document.createElement('div'); 

cheeseSteaksMenuText.classList.add('cheese-steak-header-text');

cheeseSteaksMenuText.textContent = "Classic Philly Cheesesteak's"; 

let classicPhillyCheeseSteakInput = document.createElement('div'); 

classicPhillyCheeseSteakInput.classList.add('classic-philly-cheesesteak-input'); 

classicPhillyCheeseSteakInput.textContent = 'Traditional Philly Cheesesteak: $6'; 

let classicPhillyCheeseSteakDescription = document.createElement('p'); 

classicPhillyCheeseSteakDescription.classList.add('classic-philly-cheesesteak-description-text');

classicPhillyCheeseSteakDescription.textContent = "Taste the tradition! Thinly sliced chopped ribeye steak, american cheese, provolone, along with Cheez Whiz. Served on out freshly made hoagie roll with fried onions and peppers."; 

classicPhillyCheeseSteakInput.appendChild(classicPhillyCheeseSteakDescription); 

let steakMilanoCheeseSteakInput = document.createElement('div'); 

steakMilanoCheeseSteakInput.classList.add('steak-milano-cheesesteak-input'); 

steakMilanoCheeseSteakInput.textContent = 'Steak Milano Cheesesteak: $6.25';

let steakMilanoCheeseSteakDescription = document.createElement('p'); 

steakMilanoCheeseSteakDescription.classList.add('steak-milano-cheesesteak-description-text');

steakMilanoCheeseSteakDescription.textContent = 'Soft fluffy Italian roll, thin-sliced ribeye meat and beefsteak tomato, provolone or american cheese, oregano and vidalia onions'; 

steakMilanoCheeseSteakInput.appendChild(steakMilanoCheeseSteakDescription);

let menuContentImg3 = new Image(); 

menuContentImg3.src = menuBurgerImgFinal;

let pepperCheeseSteakInput = document.createElement('div');

pepperCheeseSteakInput.classList.add('pepper-cheesesteak-input'); 

pepperCheeseSteakInput.textContent = 'Pepper CheeseSteak: $5'; 

let pepperCheeseSteakDescription = document.createElement('p');

pepperCheeseSteakDescription.classList.add('pepper-cheesesteak-description-text');

pepperCheeseSteakDescription.textContent = 'Hoagie roll, thin-sliced ribeye steak, bell peppers, onions, provolone cheese, italian seasoning';

pepperCheeseSteakInput.appendChild(pepperCheeseSteakDescription);

let phillyCheeseSteakBurgerInput = document.createElement('div'); 

phillyCheeseSteakBurgerInput.classList.add('philly-cheesesteak-burger-input'); 

phillyCheeseSteakBurgerInput.textContent = 'Philly Cheesesteak Burger: $6.25'; 

let phillyCheeseSteakBurgerDescription = document.createElement('p'); 

phillyCheeseSteakBurgerDescription.classList.add('philly-cheesesteak-burger-description'); 

phillyCheeseSteakBurgerDescription.textContent = 'Fresh italian buns, prime ground beef, onions, jalopeno peppers, melted chedder or provolone cheese, lettuce, italian spices, served with cheese sauce and mayo' 

phillyCheeseSteakBurgerInput.appendChild(phillyCheeseSteakBurgerDescription);

div.appendChild(menuBurgerIconImg);

div.appendChild(lineBreak);

div.appendChild(orderOnlineBtn);

div.appendChild(starterMenuText);

div.appendChild(cheeseFriesInput);

div.appendChild(onionRingsInput);

div.appendChild(mozzarellaStickInput);

div.appendChild(alecNachosInput); 

div.appendChild(bonelessWingsInput);

div.appendChild(wingsMenuContentImg1);

div.appendChild(burgerMenuText);

div.appendChild(theClassicBurgerInput);

div.appendChild(doubleBaconCheeseburgerInput); 

div.appendChild(elkBurgerInput);

div.appendChild(fritaBurger);

div.appendChild(burgerMenuContentImg2);

div.appendChild(cheeseSteaksMenuText);

div.appendChild(classicPhillyCheeseSteakInput); 

div.appendChild(steakMilanoCheeseSteakInput);

div.appendChild(pepperCheeseSteakInput);

div.appendChild(phillyCheeseSteakBurgerInput);

div.appendChild(menuContentImg3);

return div; 

} 

