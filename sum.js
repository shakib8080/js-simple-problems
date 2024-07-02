// // Array element jog KeyboardEvent

// // let number = [48,45,78,43,22,12,];
// // let sum = 0;
// // for(let i = 0 ; i <number.length ; i++){
// //     let element = number[i];
// //     // console.log(element);
// //     sum = sum + element ;
// // }
// // console.log(sum);

// // let number = [48,45,78,43,22,12,];
// // let sum = 0;
// // for(let i = 0; i<number.length ; i++){
// //     let element = number[i];
// //     sum = sum + element;
// // }
// // console.log(sum);

// // Array Element jog kora  WIth function


// function getsum (number){
//     let sum = 0;
//     for(let i = 0 ; i <number.length; i++){
//         let element = number[i];
//         sum = sum + element;

//     }
//     return sum;
// }
// ammaelements = getsum([938,345,778,64,]);
// console.log(ammaelements);


// let number = [94,45,64,35,66,];
// let sum =0 ;
//  for(let i = 0 ; i <number.length; i++){
//     let element = number[i];
//     sum = sum +element;
//     }
//     console.log(sum);

    function jogfol (number){
        let sum = 0; 
        for(let i = 0; i <number.length; i++){
            let element = number[i];
            sum = sum +element;
        }
        return sum;
    }

    let mynumber =[94,45,64,35,66,];
    result = jogfol(mynumber);
    console.log(result);