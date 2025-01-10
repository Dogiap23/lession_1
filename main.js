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

//Hiểu hơn về câu lệnh điều kiện và phép so sánh

/**
 * 0
 * ''
 * null
 * undefined
 * NaN
 * false
 */

// var a = 1;
// var b = 2;

// var result = 'A' || 'B' || null || 'D';

// console.log(result)

// if (result) {
//     console.log('Dieu kien dung!');
// }else{
//     console.log('Dieu kien sai');
// }

//----------------------------------------------------------------------------------------------------

/*
Chuỗi trong JavaScript
4. Chú ý độ dài khi viết code
5. Template String ES6 
 */


// 1. Tạo chuỗi 
// - các cách tạo chuỗi
// - Nên dùng cách nào? Lý do?
// -Kiểm tra data type 

// var fullName = 'Giap zo'; //C1

// var fullName = new String('Giap zo'); //C2

//2. Một số case sử dụng backslash (\)

// var fullName = 'Giap \'zo\'';
// console.log(fullName)

//3. Xem độ dài chuỗi
// var fullName = 'Giap \'zo\'';
// console.log(fullName.length)


//5. Template String ES6 

// var firstName = 'giap';
// var lastName = 'zo';
// console.log(`Toi la: ${firstName} ${lastName}`)

//----------------------------------------------------------------------------------------------------

// Lam viec voi chuoi

// var myString = '   Hoc JS co JS JS ban   ';


// Keyword: Javascript string methods 

// //     1. Length
// console.log(myString.length)

// //     2. Find index
// console.log(myString.indexOf('JS'))
// console.log(myString.indexOf('JS', 6))
// console.log(myString.lastIndexOf('JS'))

// //     3. Cut string
// console.log(myString.slice(4, 6))
// console.log(myString.slice(4))


// //     4. Replace
// console.log(myString.replace('JS', 'Javascript'));
// console.log(myString.replace(/JS/g, 'Javascript'));

// //     5. Convert to upper case
// //     6. Convert to lower case

// console.log(myString.toUpperCase());
// console.log(myString.toLowerCase());

// //     7. Trim
// console.log(myString.trim());

// //     8. Split
// var languages = 'Javascript , PHP, Ruby'
// console.log(languages.split(', '))

// //     9. Get a character by index
// const myString2 = 'Giap zo'
// console.log(myString2.charAt())
// console.log(myString2[1])

//----------------------------------------------------------------------------------------------------
 
/*
Kieu so (Number) trong Javascript 

1. Tao gia tri Number
    -Cac cach tao 
    - Dung cach nao? Tia sao?
    - Kiem tra data type

2. Lam viec voi Number
    -To String 
    - TO Fixed
    Keyword: Javascirpt number methods
*/

// var age = 18;
// var PI = 3.14; 

// var otherNumber = new Number(10); // Khong duoc dung
// console.log(typeof age);

// var result = 20 / 'ABC'
// console.log(result)
// console.log(isNaN(result))

// console.log(age.toString())//chuoi

//lam tro`n so
// console.log(PI.toFixed())

//----------------------------------------------------------------------------------------------------

/*
Mang trong Javascript - Array
1. Tao mang 
    - Cach tao
    - Su dung cach nao? Tai sao?
    - Kiem tra dat type?
2. Truy xuat mang 
    - Do dai mang
    - Lay phan tu theo index
*/

//index, key

// var languages = [
//     'Javascript',
//     'PHP',
//     'Rupy',
//     'Dart',
    
// ];

// // console.log(languages.length)
// console.log(languages[0])


//Khong khuyen dung

// var languages = new Array(
//     'Javascript',
//     'PHP',
//     'Rupy',
//     'Dart',
//     null,
//     undefined,
//     function () {

//     },
//     {},
//     123,
// );

// console.log(languages)

//----------------------------------------------------------------------------------------------------

/*
Lam viec voi Array

//keyword: Javascript array methods

1. To string
2. Join
3. Pop
4. Push
5. Shift
6. Unshift
7. Splicing
8 Concat
9. Slicing
*/

// var languages = [
//     'Javascript',
//     'PHP',
//     'Rupy',
// ]

// var languages2 = [
//     'Dart',
//     'Ruby'
// ]

// // console.log(languages.toString());
// // console.log(languages.join(', ' ))
// // console.log(languages.pop())//Xoa element cuoi mang va tra ve phan tu da xoa
// // console.log(languages.push('dart'))
// // console.log(languages.shift())//Xoa phan tu dau tien cua mang
// // console.log(languages.unshift('Python'))
// // languages.splice(1, 0, 'Dart')
// // console.log(languages.concat(languages2))
// console.log(languages.slice(1,2))

//----------------------------------------------------------------------------------------------------

/*
Hamf (function) trong Javascript

1. Hàm?
    - Một khối mã
    - Làm 1 việc cụ thể

2. Loại hàm
    - Built-in
    - Tự định nghĩa

3. Tính chất
    - Không thực thi khi định nghĩa
    - Sẽ thực thi được gọi
    - Có thể nhận tham số
    - Có thể trả về giá trị

4. Taọ hàm đầu tiên 
*/

//chứa a-z A-Z 0-9 _ $

// function showDialog() {
//     alert('Hi xin chao cac ban')
// }

// // toan tu call()

// showDialog()

//----------------------------------------------------------------------------------------------------
/*
1. Tham số?
    - Định nghĩa?
    - Kiểu dữ liệu?
    - Tính private?
    - 1 tham số 
    - Nhiều tham số

2. Truyền tham số
    - 1 tahm số
    - Nhiều tham số

3. Arguments?
    - Đối tượng arguments
    - Giưới thiệu vòng for of
*/

// function writeLog(){
//     console.log("day la 1")
// }

// writeLog();

// function writeLog(message, message1){
//     console.log(message)
//     console.log(message1)

// }

// writeLog('test', 'test2')

//----------------------------------------------------------------------------------------------------

//Return trong ham 

// var isConfirm = confirm('Message?');

// console.log(isConfirm)

// function cong(a, b){
//     return a + b;
// }

// var result = cong(2, 8);

// console.log(result)

//----------------------------------------------------------------------------------------------------

/* 
Các loại function

1. Declaration function
2. Expression function
3. Arrow function
*/

// function showMessage(){
//     console.log('Declaration function');
// }

// var showMessage2 = function(){
//     console.log('Expression function');
// }



// setTimeout(function autoLogin(){

// });

// var myObject = {
//     myFunction: function(){
        
//     }
// }

//----------------------------------------------------------------------------------------------------

// Object trong JavaScript

// var myInfo = {
//     name: 'Giap',
//     age: 20,
//     address: 'Hanoi, VN',
//     getName: function(){
//         return this.name;
//     },
    
// };

// //Function --> Phuong thuc / method
// //Others --> Thuoc tinh / property

// myInfo.email = 'xuanngiap@gmail.com'

// console.log(myInfo);

//----------------------------------------------------------------------------------------------------

//Object constructor

// function User(firstName, lastName, avatar){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.avatar = avatar;
// }

// var author = new User('giap', 'zo', 'avatar');
// var user = new User('a', 'b', 'avatar');

// author.title = 'abchgj'
// user.comment = 'comment'

// console.log(author);
// console.log(user);

//----------------------------------------------------------------------------------------------------

//Toan tu 3 ngoi

// var course = {
//     name: 'Javascript',
//     coin: 250
// }

// // if (course.coin > 0) {
// //     console.log(`${course.coin} Coin`);
// // } else {
// //     console.log('Mien phi');
// // }

// var result = course.coin > 0 ? `${course.coin} Coin` : 'Mien phi';
// console.log(result)

// var a = 1;
// var b = 2;

// var c = a > 0 ? a : b;
// console.log(c)

//----------------------------------------------------------------------------------------------------


// Vong lap
/*
1. For - lap voi dieu kien dung
2. For/in - Lap qua key cua doi tuong
3. For/of - Lap qua value cua doi tuong
4. While - Lap khi dieu kien dung
5. Do/while - Lap it nhat 1 lan sau do lap voi dieu kien dung
*/

// 1.For loop

// for (var i = 1; i <= 1000; i++) {
//     console.log(i);
// }

// 2.For/in loop

// var myInfo = {
//     name: "Giap zo",
//     age: 25,
//     address: 'Ha noi'
// }

// for(var key in myInfo) {
//     console.log(myInfo[key]);
// }

// var languages = [
//     'Javascript',
//     'PHP',
//     'Rupy',
//     'Java'
// ];

// for(var key in languages) {
//     console.log(languages[key])
// }

// 3.For/of loop

// var languages = 'Javascript';

// for (var value of languages) {
//     console.log(value);
// }

// var myInfo = {
//     name: 'Giap',
//     age: 25,
// };

// for (var value of Object.keys(myInfo)){
//     console.log(value)
// }

// 4. While loop

// var i = 1;
// while (i <= 1000) {
    
//     console.log(i);
//     i++;
// }

//----------------------------------------------------------------------------------------------------

