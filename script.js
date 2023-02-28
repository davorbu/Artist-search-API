
let term = '';
const updateTerm = () => {
    term = document.getElementById('searchTerm').value;
    
    if (!term || term === '') {
        alert('Please enter a seach term');
    } else {
        const url = `https://itunes.apple.com/search?term=${term}`;
        const songContainer = document.getElementById('songs');
        while (songContainer.firstChild) {
            songContainer.removeChild(songContainer.firstChild);
        }
        fetch(url)
            .then((Response) => Response.json())
            .then((data) => {
                 console.log(data.results);
                const artists = data.results;
                return artists.map(result => {
                    const article = document.createElement('article'),
                    artists = document.createElement('li'),
                    song = document.createElement('p'),
                          
                    audioSource = document.createElement('source')          

                    artists.innerHTML = result.artistName;
                    song.innerHTML = result.trackName;
                   
                    audioSource.src = result.previewUrl;
                                   
                    article.appendChild(artists);
                    article.appendChild(song);
                        
                     songContainer.appendChild(article);
                })
            })      
    }
}
const searchBtn = document.getElementById('searchTermBtn');
searchBtn.addEventListener('click', updateTerm)


