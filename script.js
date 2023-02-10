const checkDog = function(myDoges , yourDoge){
    const myCorrectDog =myDoges.slice();
    myCorrectDog.splice(0,1);
    myCorrectDog.splice(-2)
    console.log(myCorrectDog);

}
checkDog([9,10,3,2,11],[3,18,5,7,1])