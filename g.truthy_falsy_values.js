//falsy vale => false, "", null, undefined, 0, -0, NaN

// if(null){
//     console.log('hello');
// }

//truthy value => all value except falsy 
// if(5/2){
//     console.log('hello')  //as condition is true
// }

// let user= 'hari@123';
// if(user){
//     console.log('Send sms') //if user then send sms
// }


//?check polarity of a number
// if(condition1){
//     //some code
// }
// else if(condition2){
//      //some code
// }
// else{
//     //some code here
// }

// let num= -5;
// if(num >0){
//     console.log('+ve');
// }
// else if( num <0){
//     console.log('-ve');
// }
// else{
//     console.log('zero');
// }


//?switch 
//?multiple choice qns

 let day= 9;
 switch(day){
     case 1 : 
        console.log('sunday');
        break;
     case 2 : 
        console.log('monday');
        break;
     case 3: 
        console.log('tuesday');
        break;
     case 4: 
        console.log('wednesday');
        break;
     case 5: 
        console.log('thursday');
        break;
     case 6 : 
        console.log('friday');
        break;
     case 7 : 
        console.log('saturday');
        break
     default:
         console.log('Invalid day number');      //break rakya ni narakya ni vayo
 }


//?ternary

// let num = 21;

// let rem = num % 2;
// rem === 0 ? console.log('even') : console.log('odd');

//?polarity check by ternary

let num= 10;

num >0 
   ? console.log('+ve')
   : num<0
   ? console.log('-ve')
   : console.log('zero');
 

   //otherwise:
// if(num >0){
//          console.log('+ve');

//   }
//   else if( num <0){
//          console.log('-ve');
//   }
//   else{
//          console.log('zero');
//   }