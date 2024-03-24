// Exercise 1
// vòng lặp For
for (var i=0; i<=100; i+=5) {
    console.log (i);
}
// vòng lặp cho kiểu dữ liệu array
var people = ['Jasmine', 'Hannah', 'Julian', 'Seila']
for (var i=0; i < people.length; i++){
    console.log (people[i]);
}
for (var i=people.length - 1; i >=0; i--){
    console.log (people[i]);
}

// vòng lặp cho kiểu dữ liệu đối tượng
var person = {
    name: 'Jasmine',
    age: 25,
    gender: 'female'
}
for (var key in person){
    console.log (person[key]);
}

// Exercise 2
// Vòng lặp Do/ White
var i = 0;
do {
    i++;
    console.log(i);
} while (i < 10);
// Sự khác biệt với for: k kiểm tra điều kiện ở lần đầu tiên, ktra từ lần 2
// Sử dụng vòng lặp While trong tình huống người dùng login không thành công và có thể login lại 5 lần
var i = 0
var isSuccess = false;
do {
    i++;
    console.log('số lần login ' + i);
    if (false) {
        isSuccess = true;
    }
} while (!isSuccess && i <= 5);

//Exercise 3
// Arrow function
var myFunction = (a,b) => a*b
console.log (myFunction (3,4));

var person = (name, age, gender) => ({'Name': name, 'Age': age, 'Gender': gender});
console.log(person('Jasmine', 25, 'female'));