//Modificamos todo un array
const elements = ["Fire", "Air", "Water","Earth"];

let rtaFinal = '';
const separator = '--';
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    rtaFinal = rtaFinal + element + separator;
}

const rta = elements.join('--')
console.log('for', rtaFinal);
console.log('join', rta); // join Fire--Air--Water--Earth

const title = 'Curso de manipulación de arrays';
console.log(title.split(' ')); //[ 'Curso', 'de', 'manipulación', 'de', 'arrays' ]
const urlFinal = title.split(' ').join('-').toLowerCase();
console.log(urlFinal); //curso-de-manipulación-de-arrays

const despedida = ["Gracias!","Excelente","Curso!"]
console.log(despedida.join(" "))