//   export default function initialPageLoad () { 
//     const headerContent = () => { 
//     let container = document.getElementById('content');
//     console.log(container);
//     }
//   } 

  
//   initialPageLoad(); 

export default function initialPageLoad () { 
    const contentDiv = document.getElementById('content');
    const headerContent = document.createElement('div');
    // const headerContainer = document.createElement('container');

    headerContent.classList.add('header-content-container');

    headerContent.innerHTML = "Alec's House of Burgers <br> The Best In The City!";

    // headerContainer.append(headerContent);

    contentDiv.append(headerContent);

    document.body.append(contentDiv);

    // return contentDiv;
} 

