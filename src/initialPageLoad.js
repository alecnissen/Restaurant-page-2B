  export default function initialPageLoad () { 
    const headerContent = () => { 
    let container = document.getElementById('content');
    console.log(container);
    }
    return { 
        headerContent,
    }
  } 

  
//   initialPageLoad.headerContent();