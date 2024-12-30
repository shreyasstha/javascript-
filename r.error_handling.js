//const x =2;
//nepal does not print

let x = 2; //prints nepal as wells

//*x = 7;  //error as x =2 so all the code are useless from here

try {
    x=7;
    console.log("nepal"); //error so does not print this
} catch (error) {
    //console.log(error.message);
    console.log("error here");
}
console.log("HI");