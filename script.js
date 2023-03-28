/*let js = 'amazing';

// console.log(40+8+23-10);

console.log('Amos');
console.log(23);


let firstName = 'Amos';

let PI = 3.142;
console.log(firstName);

// Give a reasoanble name your variable
let myFistJob = 'Programmer';
let myCurrentJob = 'Teacher';


console.log(myFistJob)




let javsriptIsFun = true;
console.log(javsriptIsFun);


// console.log(typeof true);
console.log(typeof javsriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Amos');


javsriptIsFun = 'YES!';

console.log(typeof javsriptIsFun);



let year;

console.log(year)

console.log(typeof year)

year = 1991


console.log(year)

console.log(typeof year)

console.log(typeof null)




let age = 30;
age = 31;


const birthYear = 1991;
// birthYear = 1990

// const job;


var job = 'programmers';

job = 'teacher';

lastName = 'Adeyemo';

console.log(lastName)



// Mathematical Operators






const now = 2037

const ageJonas = now - 1981;
const ageSerah = now - 2011;


console.log(ageJonas, ageSerah);


console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);



const firstName = 'Amos';
const lastName = 'Adeyemo'


console.log(firstName + ' ' + lastName)

// Assignment Operators


let x = 10 + 5;

x += 10;   // x = x + 10 = 25;

x *= 4 // x = x * 4 = 100;

x++; // x = x + 1;

x--;

x--;


console.log(x)

// comparism operators

console.log(ageJonas > ageSerah); // > < >= <=

console.log(ageSerah >= 18);


const isFullAge = ageSerah >= 18


// code challenge one

const markWeight = 95;
const markHeight = 1.88;

const johnWeight = 85;
const johnHeight = 1.76;

const calculateMarkBmi = markWeight / markHeight ** 2;
const calculateJohnBmi = johnWeight / johnHeight ** 2;

const markHighterBmi =   calculateMarkBmi > calculateJohnBmi;


console.log(calculateJohnBmi, calculateMarkBmi)
console.log(markHighterBmi)



// template literals

const firstName = `Amos`;
const job = `programmer`;
const birthYear = 1991;
const year = 2037;


const amos = "I'm " + firstName + ', a ' + (year -birthYear) + ' years old ' + job + '!'

const amosNew = `I'm  ${firstName}, a ${year - birthYear} years old ${job}`




console.log(amos)
console.log(amosNew)
console.log(`String
with
multiple
line
`)




const age = 15;

const isOldEnough = age >= 18

if(isOldEnough){
    console.log(`Serah can start driving 😍❤`)
}else{
    const yearsLeft = 18 - age;

    console.log(`Serah is too young. Wait another ${yearsLeft} years :)`)


}


const birthYear = 2015;

let century;

if(birthYear <= 2000){
    century = 20;
}else{
    century = 21;
}

console.log(century)




// code challenge two

const markWeight = 95;
const markHeight = 1.88;

const johnWeight = 85;
const johnHeight = 1.76;

const calculateMarkBmi = markWeight / markHeight ** 2;
const calculateJohnBmi = johnWeight / johnHeight ** 2;

const markHighterBmi =   calculateMarkBmi > calculateJohnBmi;


if(markHighterBmi){
    console.log(`Mark BMI ${calculateMarkBmi} is higher than John ${calculateJohnBmi}`)
}else{
    console.log(`John BMI ${calculateJohnBmi} is higher than Mark ${calculateMarkBmi}`)
}



// type convertion
const inputYear = '1991';

console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);


console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23)


// type coercion

console.log('I am ' + 23 + ' years old')
console.log('23' - '10' - 3);
console.log('23' * '6');
console.log('23' / '2');

let n = '1' + 1

n = n - 1;

console.log(n)





// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0))
console.log(Boolean(undefined))
console.log(Boolean('Jonas'))
console.log(Boolean({}))
console.log(Boolean(''))


const money = 0;

if(money){
    console.log(`Dont spend it all`)
}else{
    console.log(`You should get aa job`)
}

let height;

if(height){
    console.log(`YAY! Height is defined`)
}else{
    console.log(`Height is UNDEFINED`)
}




const age = '18'

if(age === 18) console.log(`You just become an adult (strict)`)

if(age == 18) console.log(`You just become an adult (loose)`)


const favourite = Number(prompt(`what is  your favourite number`))

console.log(favourite)
console.log(typeof favourite);


if(favourite === 23){
    console.log(`Cool! 23 is an amazing number`)
}else if(favourite === 7){
    console.log(`7 is also a cool number`)
} else if (favourite === 9){
    console.log(`9 is also a cool number`)
}else{
    console.log(`Number is not 23 or 7 or 9`)
}


if(favourite !== 23) console.log(`Why not 27`)



// loggical operations


const hasDriversLicense = true; // A
const hasGoodVision = true; // B


console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);



// if(hasDriversLicense && hasGoodVision){
//     console.log(`Serah is able to drive`)
// }else{
//     console.log(`Someone else should drive`)
// }

const isTired = false;

console.log(hasDriversLicense || hasGoodVision || isTired)
console.log(hasDriversLicense && hasGoodVision && isTired)



if(hasDriversLicense && hasGoodVision && !isTired){
    console.log(`Serah is able to drive`)
}else{
    console.log(`Someone else should drive`)
}

*/

// chanllenge 3

const averageDolphinsScore = (96 + 108 + 89) / 3;
const averageKoalas = (88 + 91 + 110) / 3;

if(averageDolphinsScore > averageKoalas){
    console.log(`Dolphins wins`);
}else if(averageDolphinsScore < averageKoalas){
    console.log(`Koalas wins`);
}else if(averageDolphinsScore === averageKoalas){
    console.log(`The tie is draw`);
}

console.log(averageDolphinsScore, averageKoalas)


const newAverageDolphinsScore = (97 + 112 + 101) / 3;
const newAverageKoalasScore = (109 + 95 + 106) / 3;

console.log(newAverageDolphinsScore, newAverageKoalasScore)

if((newAverageDolphinsScore > newAverageKoalasScore) && (newAverageDolphinsScore >= 100 && newAverageKoalasScore > 100)){
    console.log(`Dolphins wins`)
}else if((newAverageKoalasScore > newAverageDolphinsScore) && (newAverageDolphinsScore >= 100 && newAverageKoalasScore > 100)){
    console.log(`Koalas wins`)
} else if((newAverageDolphinsScore === newAverageKoalasScore) && (newAverageDolphinsScore >= 100 && newAverageKoalasScore > 100)){
    console.log(`The tie is draw`)
}


// if(newAverageDolphinsScore >= 100){
//     console.log('yes')
// }



// if(newAverageKoalasScore >= 100){
//     console.log(`yess`)
// }