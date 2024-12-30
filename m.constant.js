//constant => which cannot be re-assigned

//?primitive data types => string , number, boolean, null, undefined
//?non primitive => object

//?mutable => changeable
//?immutable => unchanged
//?primitive data types are immutable
//?non primitive data types are mutable

// const nation ='Nepal';
// nation ='China';
// console.log(nation)
// nation value cannot be changed

const nationDetails ={
    name :'Nepal',
    population : '3 crore',
}

// nationDetails={
//     nation: 'india'
// }  cannot be re assigned

nationDetails.name ='India'
console.log(nationDetails);


//git clone link
//cd ncit_javascript