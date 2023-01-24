const fetchingData = async (title, link) => {
    const response = await fetch(link);
    const data = await response.json();

    displayingData(title, data);
}

fetchingData('Netflix Originals', requests.fetchNetflixOriginals);
fetchingData('Trending', requests.trending);
fetchingData('Upcoming', requests.fetchUpcoming);
fetchingData('Popular', requests.fetchPopularNow);
fetchingData('Top Rated', requests.fetchTopRated);