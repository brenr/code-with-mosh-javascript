const movie = {
  title: 'a',
  releaseYear: 2018,
  rating: 4.5,
  director: 'b'
};

showProperties(movie);

function showProperties(obj) {
  for (prop in obj) {
    if (typeof obj[prop] === 'string') {
      console.log(prop, obj[prop]);
    }
  }
}
