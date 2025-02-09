// alert('hi javascript basic')
/*
//Khai bao bien var
var fullName = 'Do Xuan Giap';
var age = 21;
//cac bien trong javascript
//var, let, const
//const được sử dụng để khai báo 1 hằng số, và giá trị của nó không thay đổi trong suốt chương trình.

let khai báo biến chỉ có thể truy cập được trong block bao quanh nó được xác định bằng cặp {}.

hoisting?
tham trị, tham chiếu?

var khai báo biến có thể truy cập ở phạm vi hàm số hoặc bên ngoài hàm số, toàn cục.


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
    // var b = 1;

    // if (a===b) {
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
var b = "1";

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
 * 

var a = null;
var b = 2;
var c = 3;

// if (a > 0 || b > 0 || c > 0) {
//     console.log('Dieu kien dung!')
// } else {
//     console.log('Dieu kien sai!')
// }

if (a) {
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

    truesy - falsy(false, null, undefined, 0 , [],...)


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

var pen = {
name: "thien long",
nsx: "",
gia: 10000,
viet: () => {
    console.log("pen thien long");
    }
}

pen.viet()

// Array

var myArray = [
    'JavaScript',
    'PHP',
    'Ha Noi',
];

a = [1,2,3,4,5])
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

// console.log(cong(2, 8))


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

// do/while
// var i = 0;

// var isSuccess = false;

// do{
//     i++;

//     console.log('Nap the lan ' + i);

//     //thanh cong
//     if(true){
//         isSuccess = true;
//     }

// }while (!isSuccess && i <= 3);

//----------------------------------------------------------------------------------------------------
// break & continue in loop
// for(var i = 0; i < 10; i++){

//     if (i%2 !== 0) {
//         continue
//     }

//     console.log(i);

    // if (i >= 5) {
    //     break;
    // }
// }

//----------------------------------------------------------------------------------------------------

/*
    Array methods
        forEach()
        every()
        some()
        find()
        filter()
        map()
        reduce()
*/

// var courses = [
//     {
//         id: 1,
//         name: 'Javascript',
//         coin: 100
//     },
//     {
//         id: 2,
//         name: 'HTML, CSS',
//         coin: 200
//     },
//     {
//         id: 3,
//         name: 'Rupy',
//         coin: 220
//     },
//     {
//         id: 4,
//         name: 'PHP',
//         coin: 200
//     },
//     {
//         id: 5,
//         name: 'ReactJS',
//         coin: 480
//     },
// ]


//forEach()----------------------

// courses.forEach(function(course, index){
//     console.log(index, course);
// });


//every()------------------------

// var isFree = courses.every(function(course, index){
//     return course.coin === 0;
// });
// console.log(isFree);


//some()-------------------------

// var isFree = courses.some(function(course, index){
//     return course.coin === 0;
// });
// console.log(isFree);


//find()--------------------------

// var course = courses.find(function(course, index){
//     return course.name === 'Rupy';
// });

// console.log(course);


//filter()------------------------

// var listCourse = courses.filter(function(course, index){
//     return course.name === 'Rupy';
// });

// console.log(listCourse);


//map()---------------------------

// function courseHandler(course, index){
//     // console.log(course);
//     return {
//         id: course.id,
//         name: `Khoa hoc: ${course.name}`,
//         coin: course.coin,
//         coiinText: `Gia: ${course.coin}`,
//         index: index,
//     };
// };

// var newCourses = courses.map(courseHandler);

// console.log(newCourses);

//reduce()---------------------------


//De hieu, ngan gon, hieu nang
// var totaCoin = 0;

// for (var course of courses) {
//     totaCoin += course.coin;
// }

// console.log(totaCoin);

// var i = 0;

// function coinHandler(accumulator, currentValue, currentIndex, originArray){
//     i++;

//     var total = accumulator + currentValue.coin;

//     console.table({
//         'Luot chay: ': i,
//         'Bien tich chu: ': accumulator,
//         'Gia khoa hoa: ': currentValue.coin,
//         'Tich tru duoc: ': total,
//     });
    
//     return total;
// }

// var totaCoin = courses.reduce(coinHandler, 0);

// console.log(totaCoin);

// var i = 0;
// var totaCoin = courses.reduce(function(total,course){
//     i++;

//     // console.log(i, total, course);

//     return total + course.coin; 
// },0);// intial value 

// console.log(totaCoin)

// var numbers = [100, 200, 220, 200, 480];

// var totaCoin = numbers.reduce(function(total, number){
//     return total + number;
// },0)

// console.log(totaCoin)

//Bai tap---------------------------

// Flat - "Lam phang" mang tu Depth array - "Mang sau"
// var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9,]];

// var flatArray = depthArray.reduce(function(flatOutput, depthItem) {
//     return flatOutput.concat(depthItem);
// }, []);

// console.log(flatArray);

// // Lay ra casc khoa hoc dua vao 1 mang moi

// var topics = [
//     {
//         topic: "Font-end",
//         courses: [
//             {
//                 id: 1,
//                 title: "HTML, CSS"
//             },
//             {
//                 id: 2,
//                 title: "JavaScript"
//             }
//         ]
//     },
//     {
//         topic: "Back-end",
//         courses: [
//             {
//                 id: 1,
//                 title: "PHP"
//             },
//             {
//                 id: 2,
//                 title: "NodeJS"
//             }
//         ]
//     },
// ];

// var newCourses = topics.reduce(function(courses, topic){
//     return courses.concat(topic.courses)
// },[])

// console.log(newCourses);


// var htmls = newCourses.map(function(course){
//     return `
//       <div>
//         <h2>${course.title}</h2>
//         <p>ID: ${course.id}</p>
//       </div>  
//     `;
// });

// console.log(htmls)

//---------------------------------------------------------

//Phuong thuc includes method

// console.log(Array.prototype.includes)

// var title = 'Responsive web design';

// console.log(title.includes('Responsive'));

// var courses = [
//     'Javascript',
//     'PHP',
//     'Dart'
// ];
// console.log(courses.includes('PHP'));

//---------------------------------------------------------

/**
 * Math object
 -Math.PI
 -Math.round()
 -Math.abs()
 -Math.ceil()
 -Math.floor()
 -Math.random()
 -Math.min()
 -Math.max()
 */

//  console.log(Math.PI);//so PI

//  console.log(Math.round(3.14));//Lam tron so

//  console.log(Math.abs(-4));//Gia tri tuyet doi

//  console.log(Math.ceil(4.1))//Lam tron tren

//  console.log(Math.floor(4.999))//Lam tron duoi

//  console.log(Math.random());//Tra ve day so thap phan nho hon 1 ngau nhien

//  //VD: 
//  console.log(Math.floor(Math.random() * 100));

// var random = Math.floor(Math.random() * 5);

// var bonus = [
//     '10 coin',
//     '20 coin',
//     '30 coin',
//     '40 coin',
//     '50 coin',
// ]

// console.log(bonus[random]);

// var random = Math.floor(Math.random() * 100);

// if (random < 50) {
//     console.log('cuong hoa thanh cong')
// }

// console.log(Math.min());

// console.log(Math.max());

//---------------------------------------------------------
//callback? 
//- La ham (function) dc truyen qua doi so khi gọi hàm khác
//- Duoc goi lai (trong ham nhan doi so)

// function myFunction(param){
//     param('Hoc lap trinh');
// };

// function myCallback(value){
//     console.log('Value: ', value);
// }

// // myCallback(123);
// myFunction(myCallback);

// Array.prototype.map2 = function(callback) {
//     var arrayLength = this.length;

//     for (var i = 0; i < arrayLength; ++i) {
//         callback(this[i], i);
//     }
// }

// var courses = [
//     'Javascript',
//     'PHP',
//     'RUby'
// ];

// courses.map2(function(course, index){
//     // console.log(index, course);
//     return `<h2>${course}</h2>`
// });
 
// var htmls = courses.map(function(course){
//     return `<h2>${course}</h2>`;
// });

// console.log(htmls.join(''));

// courses.map(function(course){
//     console.log(course)
// })

//-----------------------------------------------------------------

// var courses = [
//     'Javascript',
//     'PHP',
// ];
// //Khong bo qua truong hop nao
// // for (var i = 0; i < courses.length; ++i) {
// //     console.log(courses[i]);
// // }

// //bo qua cac truong hop khong co gia tri
// for (var index in courses) {
//     console.log(courses[index]);
// }

//--------------------------------------------------
//Xay dung phuong thuc forEach

// Array.prototype.forEach2 = function(callback) {
//     for (var index in this) {
//         console.log('index: ', index)
//     }
// }

// var courses = [
//         'Javascript',
//         'PHP',
//         'Ruby'
//     ];

// // courses.length = 1000;

// console.log(courses);

// // courses.forEach(function(course, index, array){
// // //     console.log(course, index, array);
// // });

// courses.forEach2(function(course, index, array){
//     console.log(course, index, array);
// });  

//--------------------------------------------------
//Xay dung phuong thuc filter: Loc ra cac phan tu thoa man dieu kien

// Array.prototype.filter2 = function(callback){
//     for (var index in this) {
//         if (this.hasOwnProperty(index)) {
//             callback(this[index], index, this);
//         }
//     }
// }

// var courses = [
//     {
//         name: 'Javascript',
//         coin: 680
//     },
//     {
//         name: 'PHP',
//         coin: 860
//     },
//     {
//         name: 'Ruby',
//         coin: 980
//     }
// ];

// // var filterCourses = courses.filter(function(course, index, array){
// //     return course.coin > 700;
// // });

// var filterCourses = courses.filter2(function(course, index, array){
//     console.log(course, index, array);
// });

// console.log(filterCourses);

//--------------------------------------------------
//Xay dung phuong thuc some: Tim ra toi thieu 1 phan tu co thoa man dieu kien trong mang

// Array.prototype.some2 = function(callback){
//     var output = false;

//     for (var index in this) {
//         if (this.hasOwnProperty(index)) {
//             if(callback(this[index], index, this)){
//                 output = true;
//                 break;
//             };
//         }
//     }
//     return output;
// }

// var courses = [
//     {
//         name: 'Javascript',
//         coin: 680,
//         isFinish: true,
//     },
//     {
//         name: 'PHP',
//         coin: 860,
//         isFinish: false,
//     },
//     {
//         name: 'Ruby',
//         coin: 980,
//         isFinish: false,
//     }
// ];

// // var result = courses.some(function(course, index, array){
// //     return course.isFinish;
// // });

// var result = courses.some2(function(course, index, array){
//     return course.isFinish;
// });

// console.log(result);

//--------------------------------------------------
//Xay dung phuong thuc every: 

// Array.prototype.every2 = function(callback){
//     var output = true;

//     for (var index in this) {
//         if (this.hasOwnProperty(index)) {
//             var result = callback(this[index], index, this);
//             if (!result){
//                 output = false;
//                 break;
//             }
//         }
//     }
//     return output;
// }

// var courses = [
//     {
//         name: 'Javascript',
//         coin: 680,
//         isFinish: true,
//     },
//     {
//         name: 'PHP',
//         coin: 860,
//         isFinish: true,
//     },
//     {
//         name: 'Ruby',
//         coin: 980,
//         isFinish: false,
//     }
// ];

// // var result = courses.every(function(course, index, array){
// //     return course.isFinish;
// // });

// var result = courses.every2(function(course, index, array){
//     // return course.isFinish;
//     return course.coin > 500;
// });

// console.log(result);

//--------------------------------------------------------------------------------

//Giới thiệu đệ quy 

// function deQuy(){
//     deQuy();
// }

// deQuy();
