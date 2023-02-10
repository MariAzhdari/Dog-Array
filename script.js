const checkDog = function(myDoges , yourDoge){
    const myCorrectDog =myDoges.slice();
    myCorrectDog.splice(0,1);
    myCorrectDog.splice(-2)
    console.log(myCorrectDog);
    const dogs =myCorrectDog.concat(yourDoge);
   
    dogs.forEach(function(dog,i){
       if(dog >= 3){
        console.log(`dog number${i+1} is an adult,${dog} years old `);
       }else{
        console.log(`dog number${i+1} is an puppy,${dog} years old `);
       }
    })

}
checkDog([9,10,3,2,11],[3,18,5,7,1])