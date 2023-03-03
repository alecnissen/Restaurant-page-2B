// header with title and subtitle, 
// main content with picture of burger, 

// find a way to add the buttons into the header, 
// you will need to create another div, 
// create the buttons and add them to the div 
// append the button div to the maincontent container 

 export function initialPageLoad () { 
    const contentDivContainer = document.getElementById('content'); 
    
    const headerContent = () => { 
    
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

    // headerContent.append(homeBtn);

    // headerContent.append(menuBtn);

    // headerContent.append(contactBtn);

    headerContent.append(headerBtnContainer);
    
    contentDivContainer.append(headerContent);

    document.body.append(contentDivContainer);
    

    } 

    const mainContent = () => { 

        let contentDivContainer = document.getElementById('content');

        console.log(contentDivContainer);

        const mainDivContainer = document.createElement('div'); 

        // middle text div 
        const textOverImagesDiv = document.createElement('div');

        textOverImagesDiv.classList.add('text-over-image-styles');

        textOverImagesDiv.innerHTML = 'Welcome! <br> <br> Experience the Tradition <br> <br> Since 1994 we have been proudly serving the community. <br> <br> We take pride in our work and cannot wait to serve you and create wonderful memories';

        mainDivContainer.classList.add('main-content-div-container');

        const burgerImg1 = new Image();

        const burgerImg2 = new Image();

        burgerImg1.classList.add('burger-pics');

        burgerImg2.classList.add('burger-pics');

        // const burgerBackgroundImg = new Image(); 

        // burgerBackgroundImg.classList.add('burger-background-img');

        // burgerBackgroundImg.src = '../angelo-pantazis-gMCO0iXeo_c-unsplash.jpg'

        burgerImg1.src = '../burger-picture-medium-size.jpg';

        burgerImg2.src = '../angelo-pantazis-gMCO0iXeo_c-unsplash.jpg';
        
        // mainDivContainer.append(burgerImg1); 

        // append text content in the middle, 
        mainDivContainer.append(burgerImg1);

        mainDivContainer.append(textOverImagesDiv);

        mainDivContainer.append(burgerImg2);

        // mainDivContainer.append(textOverImagesDiv);



        // contentDivContainer.append(textOverImagesDiv);

        contentDivContainer.append(mainDivContainer);

        document.body.append(contentDivContainer);
    } 

    const footerContent = () => { 
        let contentDivContainer = document.getElementById('content'); 

        let footerDiv = document.createElement('div');

        footerDiv.classList.add('footer-content-div'); 

        footerDiv.innerHTML = '<br> Address: 1234 South Broad Street, Philadelphia PA <br> <br> Phone: 666-666-666'; 

        contentDivContainer.append(footerDiv);

        document.body.append(contentDivContainer);
    }
    
    return { 
        headerContent,
        mainContent,
        footerContent,
    } 
} 

// this was able to print the text to the screen, 

// the only difference is that there is no inner function, 

// old function 

// export function initialPageLoad () { 
//     const contentDiv = document.getElementById('content');
//     const headerContent = document.createElement('div');
//     // const headerContainer = document.createElement('container');

//     headerContent.classList.add('header-content-container');

//     headerContent.innerHTML = "Alec's House of Burgers <br> The Best In The City!";

//     contentDiv.append(headerContent);

//     document.body.append(contentDiv);

//     // return headerContent;
// }  



// why does this function work when I don't have a method attached to it 
// I need each section within their own function 
// so it can be called, and it's data can be private. 

// remember 3 sections, header, main, footer, each of those sections 
// each section uses a div, then adds content to the div, then 
// appends the div to the main content container. 

// go back to previous function, get output, then 
// then refactor to use modules 

// I was able to get output using just one function, 
// but I thought each section was supposed to be it's own function
// as well??? 

// can I get output from just the one function ? 

// it works when I dont headerContent within a function, 
// but I thought that's the point of modules, 
// keeping certain functions tucked away and 
// keeping their data private. 

// I am having trouble with rest page, 

// I am trying to write my inital page load function 

// within it's own file and module, 

// I am trying to append a div with some simple text 

// to a container 

//  I am exporting it to another page, which then
// calls the function to run, 

// right now I just one error stating cannot apply style 

//from dist/style.css, css is in src folder, 

// also I noticed that when I remove the inner function, 

// from inital page load, it works fine 

// which confused me because I thought each section should be 

// in it's own function, to keep data private, 

// I'm confused on why this not working. 

