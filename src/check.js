const Machine = require('../src/Machine');

const machine = new Machine();


let my = [{'crisps': 100}, {'chocolate': 350}, {'mints': 70}];

//console.log(my[0].mints)
//console.log(machine.deposit(20));
machine.deposit(50);
console.log(machine.selectItem('mints'));