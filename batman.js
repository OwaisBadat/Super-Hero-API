
const MOVIES_URL = "http://www.omdbapi.com/?s=batman&apikey=" + myKey


let movieLinks = document.getElementById('movieLinks')
let movieInfo = document.getElementById('movieInfo')

function displayMovies(movies) {

  let movieItems =  movies.Search.map(function(movie){
      let movieID = movie.imdbID
      return `<li>
      <div><img src=${movie.Poster}></img></div>
      <div><a onclick=displayMovieInfo("${movie.imdbID}") href="#movieInfo">${movie.Title}</a></div>
      </li>`


  })
  movieLinks.innerHTML = movieItems.join('')
  }
  function displayMovieInfo(imdbID) {

    const MOVIES_INFO = `http://www.omdbapi.com/?i=${imdbID}&apikey=${myKey}`

    $.get(MOVIES_INFO, function(data) {
      let = movieItemInfo = `
      <div id="movieInfoContainer">
        <div id="selectedMovie">
          <li><h2>${data.Title}</h2></li>
          <img src="${data.Poster}"></img>
        </div>
        <div id="infoList">
          <ul>
          <li>${data.Year}</li>
          <li>${data.Rated}</li>
          <li>${data.Released}</li>
          <li>${data.Runtime}</li>
          <li>Directed by: ${data.Director}</li>
          </ul>
        </div>
      </div>`

      movieInfo.innerHTML = movieItemInfo
    })

}

function getMovies() {

  $.get(MOVIES_URL,function(data){
      displayMovies(data)
  })
}

getMovies()
