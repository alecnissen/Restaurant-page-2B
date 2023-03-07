// when appending menu items, 
// probably have each secton/function within the menu module it's own function 
// which is the function for each section is then exported, 
// within each section, it can be a function that creates the elements, 
// then different styles can be applied, 


// you can possibly use p elements, have a div be the title, 

export const menuContent = () => { 

let div = document.createElement('div'); 

div.classList.add('menu-section-div');

// div.textContent = 'Starters'; 

let starterMenuText = document.createElement('div'); 

starterMenuText.textContent = "Starters and Sides";

starterMenuText.classList.add('starter-menu-header-text');

let cheeseFriesInput = document.createElement('div'); 

cheeseFriesInput.classList.add('cheese-fries-input-text');

cheeseFriesInput.textContent = 'Cheese-Fries'; 

let cheeseFriesDescriptionText = document.createElement('p');

cheeseFriesDescriptionText.classList.add('cheese-fries-description-text');

cheeseFriesDescriptionText.textContent = 'Crispy loaded cheese fries served with blue cheese or our signature sauce';

cheeseFriesInput.appendChild(cheeseFriesDescriptionText); 

let onionRingsInput = document.createElement('div'); 

onionRingsInput.classList.add('onion-rings-input'); 

onionRingsInput.textContent = 'Onion Rings'; 

let onionRingsDescriptionText = document.createElement('p'); 

onionRingsDescriptionText.classList.add('onion-rings-description-text'); 

onionRingsDescriptionText.textContent = 'Fresh onion slices, coated in batter, breadcrumbs, floar, along with pepper, paprika and onion powder sprinkled on for a real kick'; 

onionRingsInput.appendChild(onionRingsDescriptionText);

let bonelessWingsInput = document.createElement('div');

bonelessWingsInput.classList.add('boneless-wings-input'); 

bonelessWingsInput.textContent = "Boneless Wings:"; 

let bonelessWingsDescriptionText = document.createElement('p');

bonelessWingsDescriptionText.classList.add('boneless-wings-description-text'); 

bonelessWingsDescriptionText.textContent = '5ct, 10ct, 20ct. Served with blue cheese, BBQ sauce, butter and garlic and cajun buffalo';

bonelessWingsInput.appendChild(bonelessWingsDescriptionText);

let mozzarellaStickInput = document.createElement('div');

mozzarellaStickInput.classList.add('mozzarella-stick-input');

mozzarellaStickInput.textContent = 'Mozzarella Sticks';

let mozzarellaStickDescription = document.createElement('p'); 

mozzarellaStickDescription.classList.add('mozzarella-stick-description-text');

mozzarellaStickDescription.textContent = 'Served with out marinara sauce'; 

mozzarellaStickInput.appendChild(mozzarellaStickDescription); 

let alecNachosInput = document.createElement('div'); 

alecNachosInput.classList.add('alec-nacho-input');

alecNachosInput.textContent = "Alec's Nachos Supreme";

let alecNachosDescription = document.createElement('p');

alecNachosDescription.classList.add('alec-nachos-description-text'); 

alecNachosDescription.textContent = 'Tortilla chips loaded with beans, chili, melted chedder cheese, lettuce, onions, jalapenos, tomatoes, served with sour cream and salsa'

alecNachosInput.appendChild(alecNachosDescription);

let burgerMenuText = document.createElement('div');

burgerMenuText.textContent = 'Famous-Burgers';

burgerMenuText.classList.add('burger-menu-header-text');

let theClassicBurgerInput = document.createElement('div');

theClassicBurgerInput.classList.add('classic-burger-input');

theClassicBurgerInput.textContent = 'The Classic';

let theClassicBurgerDescription = document.createElement('p');

theClassicBurgerDescription.classList.add('the-classic-burger-description-text'); 

theClassicBurgerDescription.textContent = "Get ready, two fresh buns, the finest grass-fed ground beef patties, crisp lettuce, tomato, onions, sirachi and mayo sauce, topped off peppers and your choice of spices!";

theClassicBurgerInput.appendChild(theClassicBurgerDescription);

let doubleBaconCheeseburgerInput = document.createElement('div');

doubleBaconCheeseburgerInput.classList.add('double-bacon-cheese-burger-input');

doubleBaconCheeseburgerInput.textContent = 'The infamous double bacon cheeseburger';

let doubleBaconCheeseBurgerDescription = document.createElement('p');

doubleBaconCheeseBurgerDescription.textContent = "The freshest buns, prime quality bacon, two of the finest grass fed beef patties, lettuce, onion, tomato, mayo";

doubleBaconCheeseBurgerDescription.classList.add('double-bacon-cheeseburger-description-text');

doubleBaconCheeseburgerInput.appendChild(doubleBaconCheeseBurgerDescription); 

let elkBurgerInput = document.createElement('div'); 

elkBurgerInput.classList.add('elk-burger-input');

elkBurgerInput.textContent = 'Elk Burger'; 

let elkBurgerDescription = document.createElement('p'); 

elkBurgerDescription.classList.add('elk-burger-description-text'); 

elkBurgerDescription.textContent = 'Freshly made burger buns, onion, tomato, prime quality elk patties, lettuce, served with mayo, mustard';

elkBurgerInput.appendChild(elkBurgerDescription); 

let fritaBurger = document.createElement('div'); 

fritaBurger.classList.add('frita-burger-input');

fritaBurger.textContent = 'Frita Burger/Frita Cubana'; 

let fritaBurgerDescription = document.createElement('p');

fritaBurgerDescription.classList.add('frita-burger-description-text');

fritaBurgerDescription.textContent = 'A true classic, cuban rolls, ketchup, shoestring potatoes, onions, fresh beef patty, mayo'; 

fritaBurger.appendChild(fritaBurgerDescription); 

let cheeseSteaksMenuText = document.createElement('div'); 

cheeseSteaksMenuText.classList.add('cheese-steak-header-text');

cheeseSteaksMenuText.textContent = "Classic Philly Cheesesteak's"; 

let classicPhillyCheeseSteakInput = document.createElement('div'); 

classicPhillyCheeseSteakInput.classList.add('classic-philly-cheesesteak-input'); 

classicPhillyCheeseSteakInput.textContent = 'Traditional Philly Cheesesteak: $5'; 

let classicPhillyCheeseSteakDescription = document.createElement('p'); 

classicPhillyCheeseSteakDescription.classList.add('classic-philly-cheesesteak-description-text');

classicPhillyCheeseSteakDescription.textContent = "Taste the tradition! Thinly sliced chopped ribeye steak, american cheese, provolone, along with Cheez Whiz. Served on out freshly made hoagie roll with fried onions and peppers."; 

classicPhillyCheeseSteakInput.appendChild(classicPhillyCheeseSteakDescription); 

let steakMilanoCheeseSteakInput = document.createElement('div'); 

steakMilanoCheeseSteakInput.classList.add('steak-milano-cheesesteak-input'); 

steakMilanoCheeseSteakInput.textContent = 'Steak Milano Cheesesteak: $4.25';

let steakMilanoCheeseSteakDescription = document.createElement('p'); 

steakMilanoCheeseSteakDescription.classList.add('steak-milano-cheesesteak-description-text');

steakMilanoCheeseSteakDescription.textContent = 'Soft fluffy Italian roll, thin-sliced ribeye meat and beefsteak tomato, provolone or american cheese, oregano and vidalia onions'; 

steakMilanoCheeseSteakInput.appendChild(steakMilanoCheeseSteakDescription);

div.appendChild(starterMenuText);

div.appendChild(cheeseFriesInput);

div.appendChild(bonelessWingsInput);

div.appendChild(onionRingsInput);

div.appendChild(mozzarellaStickInput);

div.appendChild(alecNachosInput);

div.appendChild(burgerMenuText);

div.appendChild(theClassicBurgerInput);

div.appendChild(doubleBaconCheeseburgerInput); 

div.appendChild(elkBurgerInput);

div.appendChild(fritaBurger);

div.appendChild(cheeseSteaksMenuText);

div.appendChild(classicPhillyCheeseSteakInput); 

div.append(steakMilanoCheeseSteakInput);

return div; 

} 

