// function add(a,b) {
//   return a+b;
// }
//
// console.log(add(3,1));
//
// var toAdd = [9,5,3];
//
// console.log(add(...toAdd))


// var groupA = ['Jen', 'Cory'];
// var groupB = ['Vikram']
// var final = [3,...groupA];
//
// console.log(final)

var person = ['Andrew',25];
var personTwo = ['Jen', 29]

function printPerson(name,age) {
  console.log('Hi ' + name + ', you are ' + age);
}

printPerson(...person);
printPerson(...personTwo);


var names = ['Mike','Ben']
var final = [...names,'Andrew']

final.forEach((name)=>{
  console.log(`Hi ` + name)
})
