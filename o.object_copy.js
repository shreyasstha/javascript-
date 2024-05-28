//?object copy

// let x = 5;
// let y = x;

// x=7;
// console.log(y)

let studentDetails ={
    fname:'shreya',
    lname:'shrestha',
    address:{
        permanent:'A'
    }
};

// let studentDetails2 = studentDetails;
// studentDetails2.fname = 'rabin';   //changes the previous fname
// console.log(studentDetails); 

//?...    : copies the details inside, ...studentDetails => copies the fname and lname from above
//?spread operator
//?shallow copy
//let studentDetails2 ={...studentDetails};
//studentDetails2.address.permanent ='D'
//console.log(studentDetails2)  //permanent address gives op:D  for both sD and sD2


//?structuredClone =>deep copy
// let studentDetails2 =structuredClone(studentDetails);
// studentDetails2.address.permanent ='Z';
// console.log(studentDetails2);  //op:A for sD2 and A for sD

