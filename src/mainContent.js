export const mainContent = () => { 
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