//loop/iteration => repetition

//?for
//?while
//?do...while

//?for loop syntax:
//  for (initial-value;condition; increment / decrement ){
//     //some code here
//  }

// for(let i =1 ;i<10 ;i=i+1 ){
// console.log(i);
// }

//?4. write a js for loop iterates from 30 to 100. 
//?For each iteration, it checks if the current number is odd or even and display a message on screen
//  for(let i=30; i<=100; i++){
//     let rem = i % 2;
//     if(rem % 2 === 0 ){
//         console.log( `${i} is even number`);
//     }
//     else{
//         console.log(i +' is odd number')
//     }
//  }

// op: 30 is even number 
    // 31 is odd number


//?to print in js
//userName= 'Rabin';
//op:my name is rabin
//console.log(`My name is ${userName}`);
//console.log('my name is', userName)
//console.log('my name is ' + userName)


//?6. write a js code to print from 100 to 50
// for(let i=100; i>=50; i--){
//     console.log(i);
// }


//?while loop syntax: same as for loop
//  while(condition){
    //some code here
//     increment/decrement
//  }

// let i = 10
// while(i>=0){
//     console.log(i);
//     i--;
// }




//?do...while loop syntax:

//initial_value
// do{
//     some code here 
//     increment/decrement
// }
// while(condition);

let i =10;
do{
    console.log(i);
    i++;
}
while(i<=20);