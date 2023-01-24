

const fetchingForBannerData = async () => {
    const response = await fetch(requests.fetchNetflixOriginals);
    const data = await response.json();
    const images = [];
    const title = [];
    const description = [];
    for(let i = 0; i < data.results.length; i++){
        images.push(data.results[i].backdrop_path)
        title.push(data.results[i].name)
        description.push(data.results[i].overview)
    }
    
    displayBanner(images, description, title)
    
}

fetchingForBannerData();

displayBanner = (resultImage, movieDescription, movieTitle) => {
    let index = 0;
    let header = document.querySelector('header');
    header.style.transition = '1s'
    let title = document.querySelector('.movie-title');
    let description = document.querySelector('.movie-description')
    headerBackground = `url(${baseUrl}${resultImage[0]}) No-repeat  center/cover rgba(0, 0, 0, .4)`;


    stylingHeader = headerBackground => {
        let period = movieDescription[index].indexOf('.');
        header.style.backgroundBlendMode = 'darken'
        title.innerText = movieTitle[index];
        description.innerText = movieDescription[index]
        cutTitle(movieDescription[index].slice(0, period+1))
        header.style.background = headerBackground
    }

    stylingHeader(headerBackground)
    setInterval(() => {
        index++;

        if(index >= resultImage.length){
            index = 0;
        }
        let headerBackgroundSlideshow = `url(${baseUrl}${resultImage[index]}) no-repeat center/cover rgba(0, 0, 0, .4)`

        stylingHeader(headerBackgroundSlideshow)
    }, 15000)
   
   
}

smoothScrollWhenClicked = () => {
    let netflixLogoLink = document.querySelector('.netflix-logo-link');
    let html = document.querySelector('html');
    netflixLogoLink.addEventListener('click', function(){
        html.style.scrollBehavior = 'smooth';
        setInterval(() => {
            html.style.scrollBehavior = 'unset';
        }, 1000)
    })

}


smoothScrollWhenClicked();


cutTitle = (description) => {
    let shortenedDescription = document.querySelector('.shortenedDescription')
    shortenedDescription.innerText = description

}

