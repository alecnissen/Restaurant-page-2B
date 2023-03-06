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

starterMenuText.textContent = 'Starters';

let cheeseFriesInput = document.createElement('div'); 

cheeseFriesInput.classList.add('cheese-fries-input-text');

cheeseFriesInput.textContent = 'Cheese-Fries'; 

let cheeseFriesDescriptionText = document.createElement('p');

cheeseFriesDescriptionText.classList.add('cheese-fries-description-text');

cheeseFriesDescriptionText.textContent = 'Crispy loaded cheese fries served with blue cheese or our signature sauce';

cheeseFriesInput.appendChild(cheeseFriesDescriptionText); 

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

div.appendChild(starterMenuText);

div.appendChild(cheeseFriesInput);

div.appendChild(bonelessWingsInput);

div.appendChild(mozzarellaStickInput);

div.appendChild(alecNachosInput);
// div.style.backgroundColor = 'yellow'; 

// div.style.color = 'black';

return div; 
    } 
