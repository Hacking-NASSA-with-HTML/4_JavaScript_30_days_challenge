const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];





// Array.prototype.filter()  **************************************************
// 1. Filter the list of inventors for those who were born in the 1500's

// with vanilla js
// const fifteen = inventors.filter(function (inventor15) {
//     if (inventor15.year >= 1500 && inventor15.year < 1800) {
//         return true;
//     }
// });

// with arrow function
// const fifteen = inventors.filter(x => (x.year >= 1500 && x.year < 1800));


// console.table(fifteen);





// Array.prototype.map()     **************************************************
// 2. Give us an array of the inventors first and last names

// with vanilla js
//const fullNameList = inventors.map(inventor => inventor.first + ' ' + inventor.last);

// with ES6 syntax
// const fullNameList = inventors.map(inventor => `${inventor.first} ${inventor.last}`);


// console.log(fullNameList);





// Array.prototype.sort()      ************************************************
// 3. Sort the inventors by birthdate, oldest to youngest

// with vanilla js
// const ordered = inventors.sort(function (a, b) {
//     if (a.year > b.year) {
//         return 1;
//     } else {
//         return -1;
//     }
// });

// with ternary operator
// const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1);


// console.table(ordered);





// Array.prototype.reduce()             ***************************************
// 4. How many years did all the inventors live all together?

// with vanilla js
// let totalYears = 0;

// for (let index = 0; index < inventors.length; index++) {
//     totalYears += (inventors[index].passed - inventors[index].year);
// }

// with ES6 syntax
// const totalYears = inventors.reduce((total, inventor) => {
//     return total + (inventor.passed - inventor.year);
// }, 0);


// console.log(totalYears);


// 5. Sort the inventors by years lived ***************************************

// with vanilla js
// const oldest = inventors.sort(function (a, b) {
//     const last_Guy = a.passed - a.year;
//     const next_Guy = b.passed - a.year;

//     if (last_Guy > next_Guy) {
//         return -1;
//     } else {
//         return 1;
//     }
// });

// with ES6 syntax
// const oldest = inventors.sort(function (a, b) {
//     const last_Guy = a.passed - a.year;
//     const next_Guy = b.passed - a.year;

//     return last_Guy > next_Guy ? -1 : 1;
// });


// console.table(oldest);





// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name

// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

//const Category = document.querySelector('.mw-category');

// First variant
//const links = Array.from(Category.querySelectorAll('a'));

// Second variant with SPREAD OPERATOR
//const links = [...Category.querySelectorAll('a')];
//const de = links.map(link => link.textContent);
// with added .map() and .filter() methods in 'one' line
// const de = links
//     .map(link => link.textContent)
//     .filter(streetName => streetName.includes('de'));

// Third variant, very concise, works without line 138
// const links = [...document.querySelectorAll('.mw-category a')];
// const de = links
//     .map(link => link.textContent)
//     .filter(streetName => streetName.includes('de'));





// 7. sort Exercise

// // Sort the people alphabetically by last name

// const lastNameSorted = people.sort(function (lastName, firstName) {
//     // const parts = lastName.split(', ');
//     // console.log(parts);


//     const [last, first] = lastName.split(', ');
//     console.log(last, first)
// });

// with ES6 syntax
// const alpha = people.sort(function (lastName, firstName) {
//     const [aLast, aFirst] = lastName.split(', ');
//     const [bLast, bFirst] = firstName.split(', ');
//     return aLast > bLast ? 1 : -1;
// });

// with arrow function
// const alpha = people.sort((lastName, firstName) => {
//     const [aLast, aFirst] = lastName.split(', ');
//     const [bLast, bFirst] = firstName.split(', ');
//     return aLast > bLast ? 1 : -1;
// });


// console.log(alpha);





// 8. Reduce Exercise
// console.log('Hi, Rich Catt! 8th task');
// // Sum up the instances of each of these
// const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike',
//     'walk', 'car', 'van', 'some_shit_car', 'car', 'truck', 'some_shit_car'];

// // with vanilla js
// // const transport = data.reduce(function (obj, item) {
// //     console.log(item);
// //     return obj;
// // }, {});

// // const transport = data.reduce(function (obj, item) {
// //     if (!obj[item]) {
// //         obj[item] = 0;
// //     }
// //     obj[item]++;
// //     return obj;
// // }, {});

// // console.log(transport);

// // with ES6 syntax

// const transport = data.reduce((obj, item) => {
//     if (!obj[item]) {
//         obj[item] = 0;
//     }
//     obj[item]++;
//     return obj;
// }, {});


// console.log(transport);





/******************** Starting to work with FETCH() *************************/
/** This works only with index.html file */
/** because fetch does not exist in Node.js - it's a Browser API. There are
 * Node libraries such as node-fetch and isomorphic-fetch that you can use
 * to fetch HTTP endpoints in your Terminal. */

console.log('Hi, Rich Catt! FETCH() method');

const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

const prom = fetch(endpoint);
console.log(prom);