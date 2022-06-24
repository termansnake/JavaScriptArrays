const letter = ['a', 'b', 'c'];
const newLetters = letter.map(item => item + '++');
console.log('original ' + letter);
console.log('Map ' + newLetters);

//Multiplica con array por dos 
function solution(array) {
	const newArray = array.map(item => item * 2);
    console.log(newArray); 
}; 
solution([1, 2, 3, 4, 5, 6 ,8 ,9]);


function solutions(array) {
	return array.map(item => item * 2);   
};
console.log(solutions([1, 2, 3, 4, 5, 6 ,8 ,9]));