//arrays dentro de oro array
const matriz = [
    [1,2,3],
    [4,5,6, [1,2, [1,2]]],
    [7,8,9]
];

const newArray = [];
for (let i = 0; i < matriz.length; i++) {
    const array = matriz[i];
    for (let j = 0; j < array.length; j++) {
        const element = matriz[i][j];
        newArray.push(element);
    }
}
const rta = matriz.flat(3); // eliges los niveles dentro del array
console.log('for', newArray);
console.log('flat', rta);
//flat [
  //  1, 2, 3, 4, 5, 6,
  //  1, 2, 1, 2, 7, 8,
  //  9
//  ]
  
functionprofundidad(list) {
    let newList = [];
    if (typeof list != "object") return [list];
    list.forEach(element => {
        newList = newList.concat(profundidad(element));
    });
    return newList;
};

const newArray1 = profundidad(matriz);

console.log(newArray1);