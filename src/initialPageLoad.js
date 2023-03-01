// header with title and subtitle, 
// main content with picture of burger, 



 export function initialPageLoad () { 
     const contentDivContainer = document.getElementById('content'); 
    const headerContent = () => { 
    

    console.log(contentDivContainer);
    
    const headerContent = document.createElement('div');

    headerContent.classList.add('header-content-container');

    headerContent.innerHTML = "Alec's House of Burgers <br> The Best In The City!";

    contentDivContainer.append(headerContent);

    document.body.append(contentDivContainer);

    } 

    // const mainContent = () => { 
    //     const mainDivContainer = document.createElement('div');

    //     mainDivContainer.classList.add('main-content-div-container');

    //     mainDivContainer.textContent = 'Hello world';

    //     contentDivContainer.append(mainDivContainer);

    //     document.body.append(contentDivContainer);
    // }
    
    return { 
        headerContent,

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

