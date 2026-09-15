//this should be placed on the very first line or block of code. 
// using strict makes developer easier way to write secure code to avoid accidental errors
'use strict';

//functions are lines of code that we can reuse on different parts of code.
/**function fruitProcessor (apples, oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    console.log(apples, oranges)
    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`
    //return is the value the function will give back to the operation made into it
    return juice;


}
//we should be able to create a new variable in which we will attach/insert the values to make the return
const appleJuice = fruitProcessor(5, 0)
console.log(appleJuice);


//calling functions inside other functions
let cutFruitPieces = (fruit) => {
    return fruit *4 ;
}
//arrays
let friends = ['Michael', 'Steven', 'Peter']


console.log(friends[1])
console.log(friends.length) //properties of the array, amount of elements inside the array 
console.log(friends[friends.length - 1])//latest element inside the array 

friends[2] = 'Jays'; //this will make the change on the memory space assigned to 

const calcAge = function (birthYeah){
    return 2037 - birthYeah;
}
//WE CANNOT DO OPERATIONS WITH THE COMPLETE ARRAY BUT WE CAN DO IT DATA USED ON THE POSITION

//METHODS MODIFY THE ARRAYS. ARE THE BEST WAY TO MODIFY THEM 
//push adds a new element into the array
friends.push('Thomas')
//unshift method add a new element right at the begining of the array
friends.unshift('Felipe')
//Remove elements 
//pop remove the last element of the array
//we don't need to to pass any argument this will return the delete element 
friends.pop()
//shift deletes the first item
friends.shift()

//hwo to locate a certain element on the array
friends.indexOf('Steven')

//includes returns true if it finds a match inside the array
friends.includes('Steven')



//TODO: OBJECTS
const jonasObject = {
    name: 'Jonas',
    lastName: 'Brother',
    age: 2027 - 1999,
    job:'Singer',
    friends: ['Michael', 'Peter', 'Steven']
}

//DOT and bracket notation to change data for an object

console.log(jonasObject)

//dot notation, to reference a property inside the object, when we have the clear notation of the property inside the object we should use this
console.log(jonasObject.lastName)
//bracket notation is the same, we can place any notation that we want
console.log(jonasObject['lastName'])

const interstedIn = prompt('What do you want to know about Jonas? Choos between name, lastName, age, job, firneds')
console.log(jonasObject[interstedIn])

//use both dot and bracket to add properties

jonasObject.location = 'Portugal';
jonasObject ['Twitter']= '@jonasBrother1999'

//challenge
console.log(`Jonas has ${jonasObject.friends.length} and his best friend is ${jonasObject.friends[0]}`)
**/

//Object Methods

/** 
const felipe = {
    firstName :'Felipe',
    lastName : 'Baracaldo',
    birthYeah: 1999,
    job: 'Software Developer',
    friends: ['Santi', 'Mateo', 'Calvo'],
    hasDriversLicence: true,
        // we can pass even fucntions in it actually.
    calcAge: function(){
        return 2027 - this.birthYeah;
    }
}
    **/
//this will make to reduce error of using wrong data inside and outside the object 
//this keyword. basically is used to locate any property that is placed on the object to demonstrate were it is located
console.log(felipe.calcAge())

//for statement 
for(let rep= 1  ; rep <= 10 ; rep++){
    console.log(`Lifting weights repetition ${rep}`)
}

//looping arrays, breaking and continuing

const jonasArray= [
    'Jonas',
    'Schemedtmann',
    2027-1995,
    'teacher',
    ['Michael', 'Peter', 'Steven']
]

for (let i = 0; i <= jonasArray.length ; i++){
    console.log(jonas[i])
}

//we can pause and continue any loop according to a condition. 
for (let i = 0; i <= jonasArray.length; i++){
    //here it comes de condition for it 
    if(typeof jonas[i] !=='string ') continue;
    //what this means is that if the type of the properties inside the array are differente than a string, this will skip them and just count the ones that fullflls the condition 
    console.log(jonas[i], typeof jonas[i])
}