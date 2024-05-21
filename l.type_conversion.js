//type conversion

//string to number

const x= '100';
const numericX =Number(x);
console.log(numericX, typeof numericX)

console.log(Number('10nep'))  //does not convert it to number
console.log(+'10nep')

//?num to string
let y =5;
console.log(x, String(x));


//let z = false;
//console.log(typeof x.toString());
//console.log(typeof `${x}`);