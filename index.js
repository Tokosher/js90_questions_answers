// "use strict";

// function foo () {
//     console.log(this);
// }

// foo();

// function foo() {
//     console.log(this);
// }

// const obj = {
//     logCtx: foo
// }

// const objPerson = {
//     name: 'Max',
//     log: foo
// }

// obj.logCtx();
// objPerson.log();

// const objA = {
//     log() {
//         console.log(this)
//     }
// }

// const objB = {
//     foo: objA.log
// }

// objB.foo();
// objA.log();

// Питання з таблички

// bind

// const person = {
//     name: 'Thomas',
//     surname: 'Smith'
// }

// const person2 = {
//     name: 'Kate',
//     surname: 'Smith'
// }

// function foo (callback) {
//     console.log(this);
//     console.log(this.name);
//     console.log(this.surname);

//     callback();
// }

// function onFunctionComplete () {
//     console.log('Function complete');
// }

// // bind
// const bindedFunction = foo.bind(person, onFunctionComplete); // this === person
// bindedFunction();

// const bindedToPerson2 = foo.bind(person2);
// bindedToPerson2()

// call
// foo.call(person, onFunctionComplete);

// apply
// foo.apply(person, [onFunctionComplete])

// const words = 'Lorem ipsum dolor sit amet';
// const wordsArray = words.split(' ');

// let shortestWord = wordsArray[0];
// let longestWord = '';


// console.log(wordsArray);
// wordsArray.forEach(word => {
//     if (shortestWord.length > word.length) {
//         shortestWord = word;
//     }

//     if (longestWord.length < word.length) {
//         longestWord = word;
//     }
// })

// wordsArray.forEach(word => {
//     if (word.length === longestWord.length) {
//         console.log(word);
//     }
// })

// console.log(shortestWord);
// console.log(longestWord);

// const shortestWordIndex = wordsArray.indexOf(shortestWord);
// const longestWordIndex = wordsArray.indexOf(longestWord);

// wordsArray[shortestWordIndex] = longestWord;
// wordsArray[longestWordIndex] = shortestWord;
// const result = wordsArray.join(' ');
// console.log(result);

// function makeAlpha (newAlpha, callback) {
//     console.log('...Making the object new alpha...');
//     console.log('...Making the object new alpha...');
//     console.log('...Making the object new alpha...');
//     console.log('New alpha for object is done!');
//     console.log(`New alpha is ${newAlpha}`);

//     callback();
// }

// makeAlpha(0, removeObjectFromTheScreen);

// function removeObjectFromTheScreen () {
//     console.log('...Deleting object from screen');
//     console.log('...Deleting object from screen');
//     console.log('...Deleting object from screen');
//     console.log('Object has been deleted');
// }

// function showCarInfo () {
//         console.log(this.brand);
//         console.log(this.year);
// }

// const car1 = {
//     brand: 'Toyota',
//     year: 2010
// }

// const car2 = {
//     brand: 'BMW',
//     year: 2016
// }

// showCarInfo.call(car1);
// showCarInfo.apply(car2);

// class Car {
//     brand;
//     year;
//     liters;
//     info;
//     color;

//     constructor ({ brand, year, liters, info, color }) {
//         this.brand = brand;
//         this.year = year;
//         this.liters = liters;
//         this.info = info;
//         this.color = color;
//     }
// }

// const car1 = new Car({
//     color: 'black',
//     brand: 'Toyota',
//     year: 2013,
//     liters: 300,
//     info: 'info'
    
// });
// const car2 = new Car({
//     liters: 250,
//     color: 'red',
//     brand: 'BMW',
//     year: 2010,
//     info: 'additional info'
// });
// console.log(car1);
// console.log(car2);