
const MOVIES_URL = "http://www.omdbapi.com/?s=batman&apikey=281fbaa7"


let movieLinks = document.getElementById('movieLinks')
let movieInfo = document.getElementById('movieInfo')

function displayMovies(movies) {

  let movieItems =  movies.Search.map(function(movie){
      return `<li>
      <div><img src="${movie.Poster}"></img></div>
      <div><a onclick="displayMovieInfo(${movie.imdbID})"href="#movieInfo">${movie.Title}</a></div>
      </li>`


  })
  movieLinks.innerHTML = movieItems.join('')
}


function displayMovieInfo(imdbID){
  return `<li>
  <div>
    <title>${movie.Title}</title>
    <img src="${movie.Poster}"></img>
  </li>
  <li>

  </li>`
}
function getMovies() {

  $.get(MOVIES_URL,function(data){
      displayMovies(data)
  })
}

getMovies()
