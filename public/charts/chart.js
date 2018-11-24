var stringSimilarity = require("string-similarity");
  
  fetch("/librarybooks")
  .then(function (response) {
    return response.json();
  })
  .then(function (books) {
    var author = document.querySelector("#author").value.trim();
    var title = document.querySelector("#title").value.trim();
    var genre = document.querySelector("#genre").value.trim();
    var year = document.querySelector("#year").value.trim();
    year = parseInt(year);
    
    booksJSON = [];
    var titleArr = [];
    var authorArr = [];
    var genreArr = [];
    var yearArr = [];
    
    
    for (i = 0; i < books.length; i++) {
      titleArr.push(books[i].title)
      authorArr.push(books[i].author)
      genreArr.push(books[i].genre)
      yearArr.push(books[i].year)
    }
    
    var stringSimilarity = require("string-similarity");
    title = stringSimilarity.findBestMatch(title, titleArr);
    author = stringSimilarity.findBestMatch(author, authorArr);
    genre = stringSimilarity.findBestMatch(genre, genreArr);
    year = stringSimilarity.findBestMatch(year, yearArr);

    title = title.bestMatch.target;
    author = author.bestMatch.target;
    genre = genre.bestMatch.target;
    year = year.bestMatch.target;

    console.log(title)

    for (i = 0; i < books.length; i++) {

      if (books[i].title === title || books[i].author === author || books[i].title.toLowerCase() === title.toLowerCase() || books[i].author.toLowerCase() === author.toLowerCase() || books[i].title.toLowerCase().replace(/\s/g, '') === title.replace(/\s/g, '') || books[i].author.toLowerCase().replace(/\s/g, '') === author.toLowerCase().replace(/\s/g, '') ||
        books[i].genre === genre || books[i].year === year || books[i].genre.toLowerCase() === genre.toLowerCase() || books[i].genre.toLowerCase().replace(/\s/g, '') === genre.replace(/\s/g, '')) {
        booksJSON.push(books[i]);
      }
    }