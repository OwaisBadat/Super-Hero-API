
const Batman_URL = "http://www.omdbapi.com/?s=batman&apikey=281fbaa7"

let moviesLinks = $("moviesLinks")
let moviesInfo = $("moviesInfo")


function displayMovies(movies) {
  let movieItems = movies.Search.map(function(movie){
      return `<li>
      <label>${movie.Title}</label>
      <img src="${movie.Poster}"></img>
      </li>`

  })

  moviesLinks.innerHTML = movieItems.join('')
}

function requestMovies() {
  #.get(Batman_URL,function(data) {
    displayMovies(data)
  )}
}
