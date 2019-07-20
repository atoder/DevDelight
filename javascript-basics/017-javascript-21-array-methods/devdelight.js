// Array and methods

// 1) forEach
/*
 *let arr = [1,2,3];
 *
 *arr.forEach(function(el) {
 *  console.log(el);
 *});
 */

// 2) map
/*
 *let arr2 = [1,2,3];
 *
 *let arr3 = arr2.map(function(el) {
 *  return el * 2;
 *});
 *console.log(arr3);
 */

// 3) filter
/*
 *let arr4 = [1,2,3];
 *
 *let arr5 = arr4.filter(function(el) {
 *  return el > 1;
 *})
 *console.log(arr5);
 */

// 4) reduce
/*
 *let arr6 = [1,2,3];
 *let arr7 = arr6.reduce(function(accumulator, el) {
 *  return accumulator + el;
 *});
 *console.log(arr7);
 */

// 5) reduceRight
/*
 *let arr6 = [1,2,3];
 *let arr7 = arr6.reduce(function(accumulator, el) {
 * return accumulator + el;
 *});
 *console.log(arr7);
 */




// 6) every
/*
 *let arr8 = [1,2,3,4];
 *console.log(arr8.every(function(el){
 *  return el > 5;
 *}));
 *
 */

// 7) some
/*
 * let arr8 = [1,2,3,4];
 * console.log(arr8.some(function(el){
 *   return el > 5;
 * }));
 *
 */
// 8) indexOf
/*
 *let arrOfWords = ['hello', 'whats happening', 'whatsup'];
 *console.log(arrOfWords.indexOf('whatsup'));
 *
 */
// 9) concat
/*
 *let arrDevdelight = ['devdelight', 'developmentdoneright'];
 *let arrOfNumbers = [0,1,2,3];
 *console.log(arrDevdelight.concat(arrOfNumbers));
 *
 */

// 10) lastIndexOf
/*
 *let arrIndex = [1,4,5,1,4];
 *console.log(arrIndex.lastIndexOf(1));
 */

// 11) unshift
/*
 *let arrayUnshift = [4,5,6];
 *arrayUnshift.unshift(1,2,3);
 *console.log(arrayUnshift);
 */

// 12) shift
/*
 *let arrShift = [1,2,3];
 *arrShift.shift();
 *console.log(arrShift);
 *arrShift.shift();
 *console.log(arrShift);
 */


// 13) pop 14) push
/*
 *let arrPop = [1,2,3];
 *console.log(arrPop.pop());
 */
/*
 *arrPop.push(4);
 *arrPop.push(5);
 *console.log(arrPop);
 */

// 15) join
/*
 *let arrJoin = [1,4, 'say hello', 'to', 'my', 'little', 'friend'];
 *console.log(arrJoin);
 *let str = arrJoin.join();
 *console.log(str);
 */

// 16) split
/*
 *let arrNew = str.split(',');
 *console.log(arrNew);
 */

// 17) slice
//let arrSlice = [1,2,3,4];
// slice -start, up to end index
/*
 *console.log(arrSlice.slice(2,4));
 *console.log(arrSlice);
 *
 */

// 18) splice
let arrSplice = [1,2,3,4];
// beginning index and how many elements
// arrSplice.splice(1,3);
// console.log('splice: ', arrSplice);
// index
// how many elements to replace
// what element to replace the index with
/*
 *arrSplice.splice(0, 1, 13);
 *console.log(arrSplice);
 */


// 19) reverse
/*
 *let arrReverse = [1,2,3];
 *console.log(arrReverse.reverse(arrReverse));
 */

// 20) sort
let arrSort = ['Dmitriy', 'Igor', 'Alex', 'Abc'];
console.log(arrSort.sort());
let arrSort2 = [1,100,4,124];
//1,4, 100, 124
console.log(arrSort2.sort());
console.log(arrSort2.sort(function(a,b) {
  // a, b is less than 0
  // put a before b
  //return a-b;

  // a, b is greater than 0
  // put b before a
  return b-a;

  // if a,b is 0, then do nothing

}));

// 21) toString();
console.log([1,3,4].toString());
