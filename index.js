const numbers = [ 12, 11, 11, 18, 18, 7, 9 ];

const avarageRounded = (numberArray) => {
    let sum = 0;
    for (let i=0; i<numberArray.length; i++) {
        sum += numberArray[i];
    }
    const avarage = Math.round(sum / numberArray.length);

    return avarage;
}
    
console.log(avarageRounded(numbers));