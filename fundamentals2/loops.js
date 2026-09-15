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

//loop in reverse
for(i = jonasArray.length - 1; i >= 0; i--){

}

//while loop is more versatil than the for loop 

let rep = 1 ;
while (rep <=10){
    console.log('while loop')
    rep++
}