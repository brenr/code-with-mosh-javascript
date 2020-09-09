
const movies = [
    { title: 'a', year: 2018, rating: 4.5 },
    { title: 'b', year: 2018, rating: 4.7 },
    { title: 'c', year: 2018, rating: 3.0 },
    { title: 'd', year: 2017, rating: 4.5 }
];

// All movies in 2018 with rating > 4
// Sort them by rating in descending
// Pick the title prop and display in output
// Expected output:
// 'b'
// 'a'
function test1(array) {
    return array
        .filter(movie => movie.year == 2018 && movie.rating >= 4)
        .sort((a, b) => b.rating - a.rating)
        .map(movie => movie.title);
}

console.log(test1(movies)); // -> ['b', 'a']