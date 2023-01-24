
const requests = {
    
    fetchPopularNow : `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US`,
    fetchUpcoming : `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US&page=1`,
    fetchNetflixOriginals: `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&with_networks=213`,
    fetchTopRated : `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US`,
    trending : `https://api.themoviedb.org/3/trending/all/day?api_key=${api_key}&language=en-US`,
}



const baseUrl = 'https://image.tmdb.org/t/p/original'

displayingData = (rowTitle, array) =>{
    let imageAttr = {
        height: '200px',
        width: '140px',
        margin: '5px',
    }

    let moviesContainer = document.querySelector('.movies-container');
    let title = document.createElement('h2');
    title.className = 'row-title'
    let wrapper = document.createElement('div');
    wrapper.className = 'wrapper';
    title.innerText = rowTitle
    wrapper.append(title)
    let contentsContainer = document.createElement('div');
    contentsContainer.className = 'contents-container';
    let trailersContainer = document.createElement('div');
    trailersContainer.className = 'trailers-container'

    for(let i = 0; i < array.results.length; i++){
        let image = document.createElement('img');
        image.src = `${baseUrl}${array.results[i].poster_path}`
        image.className = 'movie-image'
        image.style.height = imageAttr.height
        image.style.width = imageAttr.width
        image.style.margin = imageAttr.margin
        contentsContainer.append(image)
        wrapper.append(contentsContainer, trailersContainer)
    }
    
    moviesContainer.append(wrapper)



}










