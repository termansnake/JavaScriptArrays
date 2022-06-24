const orders=[
    {
        customerName:"Nicolas",
        total:60,
        delivered:true,
    },
    {
        customerName:"Zulema",
        total:120,
        delivered:false,
    },
    {
        customerName:"Santiago",
        total:180,
        delivered:true,
    },
    {
        customerName:"Valentina",
        total:240,
        delivered:true,
    },
];
//De un objeto podemos sacar un array con map
console.log("original",orders);
const totalArray = orders.map(item =>item.total);
console.log("Nuevo array con los totales",totalArray);
// Nuevo array con los totales [ 60, 120, 180, 240 ]

//Agregamos un uevo elemnto al objeto 
const agregarTax = orders.map((item)=>{
    return {
        ...item,
        tax:0.19,
    };
});
console.log('Agreagar un nuevo atributo a los objetos', agregarTax);
// Agreagar un nuevo atributo a los objetos [
//     { customerName: 'Nicolas', total: 60, delivered: true, tax: 0.19 },
//     { customerName: 'Zulema', total: 120, delivered: false, tax: 0.19 },
//     { customerName: 'Santiago', total: 180, delivered: true, tax: 0.19 },
//     { customerName: 'Valentina', total: 240, delivered: true, tax: 0.19 }
//   ]
console.log("original",orders);
// original [
//     { customerName: 'Nicolas', total: 60, delivered: true },
//     { customerName: 'Zulema', total: 120, delivered: false },
//     { customerName: 'Santiago', total: 180, delivered: true },
//     { customerName: 'Valentina', total: 240, delivered: true }
//   ]

// ejemplo 
function solution(array) {
	return array.map(item => ({ ...item, 'taxes': Math.trunc(item.price * .19) }))
}; 