//object => contains other primary data types
//complex data type

//object => key value pair

//student1

// let firstName="Rohan"
// let lastName="shrestha";
// let address='baneshwor';
// let email="rohan@gmail.com";


// let student1 ={
//     firstName : 'Rohan',
//     lastName :'Shrestha',
//     address: 'baneshwor',
//     email :'rohan@gmail.com',
// };
// console.log(student1)

//?CURD
// ?C => Create/Add
// ?R=> Retrive/Read
// ?U=> Update/edit
// ?D=> delete/remove

//?=============eg1=================
let animalDetails ={
    name :'Tiger',
};

//?dot(.) operator or square([])operator are used to add or call values 


//?add
//animalDetails.weight ='200kg';
animalDetails['weight'] = '300kg';
animalDetails.avgAge = '30';

//?read
// console.log(animalDetails.name)
//console.log(animalDetails['name'])
//console.log(animalDetails.avgAge)

//?upsert(update/insert)
//?update
//animalDetails.name = 'Lion';
// console.log(' for update')
// animalDetails['avgAge'] = 35;
// console.log(animalDetails)

//?delete
//console.log('for delete')
//delete animalDetails['avgAge']
//delete animalDetails.name
//console.log(animalDetails)



//?=================eg2================
//?nested object

let studentDetails ={
    firstName: 'Amisha',
    lastName: 'kc',
    address:{
        permanent :'ktm',
        temporary :'Bkt',
    },
    isGraduated: false,
    image: null,
};
//?read
//console.log(studentDetails.address.permanent);
//console.log(studentDetails['address']['temporary']);
//console.log(studentDetails.address['permanent']);
//console.log(studentDetails['address'].temporary);

//?udate/insert
//studentDetails.address.temporary='patan';
//studentDetails.address.newAddress='Pokhara'
//console.log(studentDetails)

//delete studentDetails.address.temporary;
//console.log(studentDetails)



//?===========eg3=============

let laptopDetails = {
    name: 'GF56',
    brand :'hp',
    ram: 22,
    ssd : 512,
};
let fieldName ='brand'
//console.log(laptopDetails[fieldName]);    // square bracket is compulsary as fieldName is not inside laptopDetails
//console.log(laptopDetails.fieldName)  //undefined as fieldName is not inside laptopDetails





