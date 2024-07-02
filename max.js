// conditionaly found big Number
/* let mangoprice = 567;
let bananaprice = 21240;
let pineapple = 340; */
/* if(bananaprice > mangoprice && bananaprice >pineapple){
    console.log('bana is big');
}
else if(mangoprice>bananaprice && mangoprice >pineapple){
    console.log('mango is big ');
}
else if(pineapple >mangoprice && pineapple>bananaprice){
    console.log('pineapple is bigg');
}
else {
    console.log('no one')
} */

    // get found big Number with function

   /*  function foundbig (num1,num2 ,num3){
        if(num1>num2 && num1 >num3 ){
            return num1,'num one is bigg';
        }
        else if(num2 >num1 && num2> num3 ){
            return num2,'number tow is big ';
        }
        else {
            return num3,'number three is big';
        }
    }
    let num1 = 485;
    let num2 = 7465;
    let num3 = 85496;
    
    bignumber = foundbig(num1,num2,num3);
    console.log(bignumber); */


    // get found small Number with function

      /* function foundsmall (num1,num2 ,num3){
        if(num1<num2 && num1 <num3 ){
            return num1,'num one is small';
        }
        else if(num2 <num1 && num2< num3 ){
            return num2,'number tow is samll';
        }
        else {
            return num3,'number three is smal;
        }
    }
    let num1 = 485;
    let num2 = 7465;
    let num3 = 85496;
    
    bignumber = foundsmall(num1,num2,num3);
    console.log(bignumber); */

    // get found big Number with Math.Max
     
    /* let num1 = 485;
    let num2 = 7465;
    let num3 = 85496;
    let max = Math.max(num1,num2,num3);
    console.log('big number is ',max);
     */

    
    // if(num1>num2 && num1 > num3){
    //     console.log('number one is big ');
    // }
    // else if(num2 >num1 && num2 > num3){
    //     console.log('number two is big');
    // }
    //  else {
    //     console.log('three is big');
    //  }

function getsmallnumber(num1 ,num2,num3){
    if(num1<num2 &&num1<num3){
        return num1 ,'number is small';
    }
    else if(num2 <num1 && num2<num3){
        return num2 ,'numbet two is small';
    }
    else {
        return num3, 'number three is small';
    }
}
   let num1 = 85484;
    let num2= 9559;
    let num3 = 86496;

    result = getsmallnumber( num1,num2,num3);
    console.log(result);
