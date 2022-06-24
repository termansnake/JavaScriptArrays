//REDUCE no retorna un nuevo array
// como mismo lo dice reduce el array 
const totals = [1,2,3,4];

///for
let sum = 0;
for (let index = 0; index < totals.length; index++) {
    const element = totals[index];
    sum = sum + element
}
console.log(sum);
//REDUCE
const rta = totals.reduce((sum,item) => sum + item, 0);
console.log(rta);


