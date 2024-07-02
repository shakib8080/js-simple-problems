/* function finndlargest (numbers){
    let largest = numbers[0];
    for(let i = 0 ; i <numbers.length ; i++){
        let element = numbers[i];
        if(element > largest){
            largest = element
        }
    
    }
    return largest;
}
   
let number = [-23,-34,-5,-67,-64,];
let numb = [23,34,567,64,];
result = finndlargest(number);
console.log(result);
 */


function findsmallsnumber (number){
    let smallis = number[0];
    for(let i = 0; i <number.length; i++){
        let element = number[i];
       if(element < smallis){
       smallis =element
       }
    }
    return smallis;
}

let num = [34,5,1,86,4,3,345];
let result = findsmallsnumber(num);
console.log(result);