
const MOVIES_URL = "http://www.omdbapi.com/?s=batman&apikey=" + myKey


let movieLinks = document.getElementById('movieLinks')
let movieInfo = document.getElementById('movieInfo')

function displayMovies(movies) {

  let movieItems =  movies.Search.map(function(movie){
      let movieID = movie.imdbID
      return `<li>
      <div><img src="${movie.Poster}"></img></div>
      <div><a onclick="displayMovieInfo('${movieID}')" href="#movieInfo">${movie.Title}</a></div>
      </li>`


  })
  movieLinks.innerHTML = movieItems.join('')

}

function getMovies() {

  $.get(MOVIES_URL,function(data){
      displayMovies(data)
  })
}

getMovies()
