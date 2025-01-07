// alert('hi javascript basic')
/*
//Khai bao bien var
var fullName = 'Do Xuan Giap';
var age = 21;


//Goi ham thong bao
alert(fullName);
alert(age);
*/

//----------------------------------------------------------------

//Ham built-in
/*
    Ham console

    console.log('Day la thong bao')

    var fullName = 'Do Xuan Giap';

console.log(fullName);
*/

//----------------------------------------------------------------------------------------------------

/*
        Ham confirm

        confirm('Xac nhan du tuoi');
*/

//----------------------------------------------------------------------------------------------------

/*
    prompt('Xac nhan du tuoi')
*/

//----------------------------------------------------------------------------------------------------

/*
    setTimeout(function() {
        alert('thong bao')
    }, 1000)
*/

//----------------------------------------------------------------------------------------------------

/*
    setInterval(function(){
        console.log('thong bao' + Math.random)
    },1000);
*/

//----------------------------------------------------------------------------------------------------


/*
    //toan tu ++ --
    //prefix tien to
    //postfix hau to

    var a = 6;

    a++;

    console.log(a);
*/

//----------------------------------------------------------------------------------------------------


/**toán tử gán 
    var a = 1;

    // a = a + 2;
    a -= 2;

    console.log(a);
    */

    /**Toa tu chuoi 

    // var firstName = 'Giap';
    // var lastName = 'Do';

    // console.log(firstName + '' + lastName);

    var name = "Giap"

    name = name + 'Do'

    console.log(name);
*/

//----------------------------------------------------------------------------------------------------


/**Toan tu so sanh 

    // var a = 1;
    // var b = 2;

    // if (a==b) {
    //     console.log('Dieu kien dung!')
    // }else{
    //     console.log('Dieu kien sai!')
    // }


    // var a = 'giap';
    // var b = 'giap';
    // if (a==b) {
    //     console.log('Dieu kien dung!')
    // } else {
    //     console.log('Dieu kien sai!')
    // }
*/

//----------------------------------------------------------------------------------------------------


/**Boolean 

var a = 1;
var b = 2;

var isSuccess = a > b;

console.log(isSuccess);
*/

//----------------------------------------------------------------------------------------------------


/** If - Esle 

// var isSuccess = 1 > 2;

var fullName = 'Giap Zo'

if (fullName) {
    console.log('Dieu kien dung!')
} else {
    console.log('Dieu kien sai!')
}
*/

//----------------------------------------------------------------------------------------------------

/** 
 * Toan tu logic
 * 1. AND (&&)
 * 2. OR (||)
 * 3. NOT (!)
 

var a = 1;
var b = 2;
var c = 3;

// if (a > 0 && b > 0 && c > 0) {
//     console.log('Dieu kien dung!')
// } else {
//     console.log('Dieu kien sai!')
// }

if (!(a < 0)) {
    console.log('Dieu kien dung!')
} else {
    console.log('Dieu kien sai!')
}
*/

//----------------------------------------------------------------------------------------------------

/*
Kieu du lieu trong Javascript

1. Du lieu nguye thuy - Primitive Data
    - Number
    - String
    - Boolean
    - Undefined
    - Null
    - Symbol (tong thong khong duoc su dung)

2. Du lieu phuc tap - Complex Data
    - Function
    - Object


//Number type
var a = 1;
var b = 2;
var c = 1.5;

console.log(typeof a);

//String type
var fullName = 'Giap Zo';

console.log(fullName);
console.log(typeof fullName);

//Boolean type
var isSuccess = true;

console.log(isSuccess);

//Undefined type
var age;
console.log(age);

//Null type
var isNull = null; //Khong co gi
console.log(isNull);

//Symbol type
var id = Symbol('id'); //unique
console.log(id);

//Function

var myFunction = function(){
    alert('Hi xin chao cac ban!')
}

myFunction();

//Object type

var myObject = {
    name: 'Giap Zo',
    age: 20,
    address: 'Ha Noi',
};

console.log('myObject', myObject);

// Array

var myArray = [
    'JavaScript',
    'PHP',
    'Ha Noi',
];

console.log(myArray)
*/

//----------------------------------------------------------------------------------------------------

// Toan tu so sanh - P2

/**
 * ===
    * var a = 1;
    var b = '1';

    console.log(a === b)

 * !==
    var a = 1;
    var b = '1';

    console.log(a !== b)
 */

//----------------------------------------------------------------------------------------------------


