import burgerPic1 from '../burger-pic-1.jpg';

import burgerPic2 from '../burger-pic-2.jpg';

export const mainContent = () => { 

    const mainDivContainer = document.createElement('div'); 

    const textOverImagesDiv = document.createElement('div');

    textOverImagesDiv.classList.add('text-over-image-styles');
    // change here, textContent 
    // textOverImagesDiv.innerHTML = 'Welcome! <br> <br> Experience the Tradition <br> <br> Since 1994 we have been proudly serving the community. <br> <br> We take pride in our work and cannot wait to serve you and create wonderful memories';

    textOverImagesDiv.textContent = 'Welcome! \r\n \r\n Experience and taste the Tradition! \r\n \r\n Since 1994 we have been proudly serving the community. \r\n \r\n We take pride in our work and cannot wait to serve you and create wonderful memories';

    mainDivContainer.classList.add('main-content-div-container');

    const burgerImg1 = new Image();

    const burgerImg2 = new Image();

    burgerImg1.classList.add('burger-pics');

    burgerImg2.classList.add('burger-pics');

    burgerImg1.src = burgerPic1;

    burgerImg2.src = burgerPic2;

    mainDivContainer.append(burgerImg1);

    mainDivContainer.append(textOverImagesDiv);

    mainDivContainer.append(burgerImg2);

    return  mainDivContainer ;
    
} 