//No modifica el araray sino crea uno nuevo 
const elements = [1,1,2,2];
const othersElements = [3,3,4,4];

const newArray = [...elements]; //Para que no se copie referencia en memoria
//split 
for (let index = 0; index < othersElements.length; index++) {
    const element = othersElements[index];
    newArray.push(element);
}
console.log('for', newArray); //for [ 1, 1, 2, 2, 3, 3, 4, 4 ]
const rta = elements.concat(othersElements);
console.log('concat', rta); //concat [ 1, 1, 2, 2, 3, 3, 4, 4]
const rta2 = [...elements, ...othersElements];
const rta3 = [...elements, ...'random'];

console.log('...', rta2);
console.log('rta3', rta3);
elements.push(...othersElements); //agragamos a elements el othersElements
console.log('elements', elements);//