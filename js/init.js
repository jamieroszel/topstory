(function($){
  $(function(){

    $('.sidenav').sidenav();

  }); // end of document ready
})(jQuery); // end of jQuery name space


const $topStories = $('#topStories');
const $popularStories = $('#popularStories');
const $newsWire = $('#newsWire');
const topStoriesApi = "https://api.nytimes.com/svc/topstories/v2/us.json?api-key=KU39qauZuNAf0jiQG6W2yKwlSiQBuWkB";
const popularStoriesApi = "https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=KU39qauZuNAf0jiQG6W2yKwlSiQBuWkB";
const timesWireApi = "https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=KU39qauZuNAf0jiQG6W2yKwlSiQBuWkB";


let headlines = document.getElementById("headlines");

fetch(topStoriesApi)
.then(response => response.json())
.then(data => {
  console.log(data);

data.results.map(article => {
  console.log(article.title);

  let a = document.createElement("a");
  a.setAttribute('href', article.url);
  a.innerHTML = article.title;

  let p = document.createElement("p");
  p.innerHTML = article.abstract;
  
  headlines.appendChild(a);
  headlines.appendChild(p);
})

})

let popularStories = document.getElementById("popularStories");

fetch(popularStoriesApi)
.then(response => response.json())
.then(data => {
  console.log(data);

data.results.map(article => {
  console.log(article.title);

  let a = document.createElement("a");
  a.setAttribute('href', article.url);
  a.innerHTML = article.title;

  let p = document.createElement("p");
  p.innerHTML = article.abstract;
  
  popularStories.appendChild(a);
  popularStories.appendChild(p);
})

})

let timesWire = document.getElementById("timesWire");

fetch(timesWireApi)
.then(response => response.json())
.then(data => {
  console.log(data);

data.results.map(article => {
  console.log(article.title);

  let a = document.createElement("a");
  a.setAttribute('href', article.url);
  a.innerHTML = article.title;

  let p = document.createElement("p");
  p.innerHTML = article.abstract;
  
  timesWire.appendChild(a);
  timesWire.appendChild(p);
})

})