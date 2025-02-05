//In ra màn hình: Viết chương trình in ra dòng chữ "Hello, World!".

// var result = 'Hello, World!';
// console.log(result);

//================================================================================================

// Biến và kiểu dữ liệu: Khai báo một số biến với các kiểu dữ liệu khác nhau (String, Number, Boolean) và in ra màn hình.

// var name = 'Giap';
// console.log(name);

// let age = 20;
// console.log(age);

// const isAdult = true;
// console.log(isAdult);

//=================================================================================================

// Tính tổng của 2 số: Viết hàm nhận vào 2 số và trả về tổng của chúng.

// function sum(a, b) {
//     return a + b;
// };
 
// var result = sum(2, 8);

// console.log(result)

//=================================================================================================

// Kiểm tra số chẵn/lẻ: Viết chương trình kiểm tra một số xem nó có phải là số chẵn hay không.

// function isEven(number){
//     return number % 2 === 0;
// }

// let num = parseFloat(prompt("")); 
// if (isEven(num)) {
//     console.log(`${num} là số chẵn`);
// } else {
//     console.log(`${num} là số lẻ`);
// }

//=================================================================================================

// Kiểm tra số chẵn/lẻ: Viết chương trình kiểm tra một số xem nó có phải là số chẵn hay không.

// function kiemTraChanLe(so){
//     if(so % 2 === 0){
//         return "Day la so chan";
//     }else{
//         return "Day la so le";
//     }
// }

// console.log(kiemTraChanLe(5));
// console.log(kiemTraChanLe(4));

//=================================================================================================

// Chuyển đổi chuỗi thành số: Viết chương trình nhận vào một chuỗi và chuyển nó thành số.

// function chuyenDoi(chuoi) {
//     let so = parseFloat(chuoi);
//     if(isNaN(so)){
//         return 'Khong the chuyen thanh chuoi';
//     }

//     return so;
// }

// console.log(chuyenDoi('123'));
// console.log(chuyenDoi('abc'));

//=================================================================================================

// Sắp xếp mảng: Viết chương trình sắp xếp một mảng số theo thứ tự tăng dần.

// function sapXepMang(mang) {
//     return mang.sort(function(a, b){
//         return a - b;
//     })
// }

// let mangSo = [5, 8 ,7 , 2, 9];
// console.log(sapXepMang(mangSo));

//=================================================================================================

// Tính giai thừa: Viết hàm tính giai thừa của một số.

// function tinhGiaithua(n){
//     if(n < 0){
//         return "Số không thể tính giai thừa.";
//     }

//     let giaiThua = 1;
//     for (let i = 1; i <= n; i++) {
//         giaiThua *= i;
//     }
//     return giaiThua;
// }
// console.log(tinhGiaithua(5));


//=================================================================================================

//Đảo ngược chuỗi: Viết chương trình đảo ngược một chuỗi.

// function reverseString(str) {
//     return str.split('').reverse().join('');
//   }
  
//   console.log(reverseString("Giapzo123"));

//=================================================================================================

// Kiểm tra số nguyên tố: Viết hàm kiểm tra xem một số có phải là số nguyên tố không.

// function isPrime(num) {
//     if (num <= 1) return false; 
//     if (num <= 3) return true;  
  
//     if (num % 2 === 0 || num % 3 === 0) return false; 
  
//     for (let i = 5; i * i <= num; i += 6) {
//       if (num % i === 0 || num % (i + 2) === 0) return false;
//     }
//     return true;
//   }
  
//   console.log(isPrime(5)); 
//   console.log(isPrime(10));

//=================================================================================================

//Tính số ngày trong tháng: Viết hàm nhận vào tháng và năm, trả về số ngày trong tháng đó.

// function getDaysInMonth(month, year) {
//     return new Date(year, month, 0).getDate();
//   }
  
//   console.log(getDaysInMonth(2, 2024)); 
//   console.log(getDaysInMonth(2, 2023)); 
//   console.log(getDaysInMonth(4, 2023));
  
//=================================================================================================

// Tính diện tích và chu vi hình tròn: Viết hàm tính diện tích và chu vi của hình tròn từ bán kính.

// function tinhDTvaCV(banKinh) {
//     if (banKinh <= 0) {
//         return "Bán kính không hợp lệ";
//     }

//     var dienTich = Math.PI * banKinh * banKinh; 
//     var chuVi = 2 * Math.PI * banKinh;         

//     return { dienTich, chuVi }; 
// }

// var banKinh = 5;
// var ketQua = tinhDTvaCV(banKinh);

// if (typeof ketQua === "string") {
//     console.log(ketQua); 
// } else {
//     console.log(`Diện tích hình tròn: ${ketQua.dienTich}`);
//     console.log(`Chu vi hình tròn: ${ketQua.chuVi}`);
// }

//=================================================================================================

// Tìm số lớn nhất trong mảng: Viết chương trình tìm số lớn nhất trong mảng.

// function timSo(arr){
//     if(arr.length === 0){
//         return 'Mang rong';
//     };

//     var max = arr[0];
//     for(var i = 1; i < arr.length; i++){
//         if(arr[i] > max){
//             max = arr[i];
//         };
//     };
//     return max;
// }

// var number = [1, 2, 3, 4, 5, 9, 8 , 7, 6];
// console.log('So lon nhat: ', timSo(number));

// ================================================================

// Kiểm tra chuỗi palindrome: Viết hàm kiểm tra xem một chuỗi có phải là palindrome hay không (đọc xuôi ngược giống nhau).

// Kiểm tra chuỗi là palindrome
function isPalindrome(str) {
    let reversed = str.split('').reverse().join('');
    return str === reversed;
}
// Ví dụ
console.log(isPalindrome("madam")); 
console.log(isPalindrome("hello")); 

// Tính số Fibonacci tại vị trí n
function fibonacci(n) {
    if (n <= 1) return n;
    let a = 0, b = 1, temp;
    for (let i = 2; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}
// Ví dụ
console.log(fibonacci(5)); 
console.log(fibonacci(10)); 

// Đếm số lần xuất hiện của một phần tử trong mảng
function demSo(arr, element) {
    return arr.filter(item => item === element).length;
}
// Ví dụ
console.log(demSo([1, 2, 2, 3, 2, 4], 2));

// Tạo một mảng các số từ 1 đến n
function createArray(n) {
    return Array.from({ length: n }, (_, i) => i + 1);
}
// Ví dụ
console.log(createArray(5)); 

// Kiểm tra năm nhuận
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
// Ví dụ
console.log(isLeapYear(2024)); 
console.log(isLeapYear(2023)); 

// Tính tổng các số lẻ trong mảng
function sumOddNumbers(arr) {
    return arr.filter(num => num % 2 !== 0).reduce((sum, num) => sum + num, 0);
}
// Ví dụ
console.log(sumOddNumbers([1, 2, 3, 4, 5])); 

// Tìm các phần tử chung trong 2 mảng
function findCommonElements(arr1, arr2) {
    return arr1.filter(item => arr2.includes(item));
}
// Ví dụ
console.log(findCommonElements([1, 2, 3], [2, 3, 4])); 

// Sắp xếp mảng theo chiều giảm dần
function sortDescending(arr) {
    return arr.sort((a, b) => b - a);
}
// Ví dụ
console.log(sortDescending([3, 1, 4, 1, 5, 9])); 

// Kiểm tra một số có phải số nguyên tố không
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
// Ví dụ
console.log(isPrime(7)); 
console.log(isPrime(10)); 

// Lọc các số nguyên tố trong mảng
function filterPrimes(arr) {
    return arr.filter(isPrime);
}
// Ví dụ
console.log(filterPrimes([1, 2, 3, 4, 5, 6, 7, 8, 9])); 

// Tính giai thừa của một số
function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
// Ví dụ
console.log(factorial(5)); 
