const words = ["spray", "limit", "elite", "exuberant"];
// con for
const newArray = [];
for (let index = 0; index < words.length; index++) {
  const element = words[index];
  if (element.length >= 6) {
    newArray.push(element);
  }
}
// con filter
const rta = words.filter((item) => item.length >= 6);
console.log('original',words);
console.log('for', newArray);
console.log('Con filter', rta);
// en ambos casos, el resultado:
//> [ 'exuberant' ]

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

//
const ordenesEntregadas = orders.filter(item => item.delivered); // si es true se integra al nuevo array
console.log(ordenesEntregadas);
//Lo mismo con 100 o mas
const ordenesEntregada = orders.filter(item => item.delivered && item.total>=100);
console.log(ordenesEntregada);
// BUscador SUPER INCREIBLE ESTA FUNCION 
const search = (query) => {
    return orders.filter(item => {
        return item.customerName.includes(query);
    })
}
console.log(search('u'));