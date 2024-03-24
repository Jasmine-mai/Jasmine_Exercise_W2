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


