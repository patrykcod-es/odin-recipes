console.log("hello world!");

//break string into individual words and add it to array
//go through each of the array element and get first letter capitalized

function capitalize(string) {
  let stringToLowerCase = string.toLowerCase();
  let arr = stringToLowerCase.split(" ");
  let array = [];
    for (let i = 0; i < arr.length ; i++){
        array += arr[i].charAt(0).toUpperCase() + arr[i].slice(1) +" "

    }
    console.log(array);
}
console.log(capitalize("JEBAC PIS i kOnfedERACJE"));



function lastLetter(string){
    console.log(string[string.length - 1] );
}
lastLetter('jebac pis i konfederacje')

// ask for a number
// check if you got a number
// print numbers starting from 1
// if number is devided by 3 print fizz
// if number is devided by 5 print Buzz
// if number is devided by 3 and 5 print Fizz Buzz

function fizzBuzz(x){
    for (let i = 1; i < x; i++){
        if(i % 15 === 0){
            console.log('Fizz Buzz');
        }else if(i % 5 === 0 ){
            console.log('Buzz');
        }else if(i % 3 === 0){
            console.log('Fizz');
        }else{
            console.log(i);
        }
    }
}
//let number = prompt('Fizz Buzz Number')
fizzBuzz(number)