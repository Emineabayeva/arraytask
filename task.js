   
        // task1

// let a = parseInt(prompt("eded daxil edin"))
// let eded = 3
// let factorial =1 
// for (let i = 1; i <= eded; i++) {
//         factorial=factorial*i
//         console.log(factorial);
// }


     // task2

// let array = [2, 4, 6, 7, 10, 12, 58, 9];
// let maxindex=0;
// let minindex=0;
// let min = array[0];
// let max = array [0];

// for (let i = 1; i < array.length; i++) {
//     if (array [i] > max) {
//         max = array[i];
//         maxindex = i;
//     }
//     if (array[i] < min) {
//         min = array[i];
//         minindex = i;
//     }
// }
// let deyisme = array[maxindex];
// array[maxindex] = array[minindex];
// array[minindex] = deyisme;

// console.log(array);


        //  task3

//  let array =[1,3,15,24,35,57]
//  let maxSin =0
//  for (let i = 0; i < array.length; i++) {
//    if( array[i]%2 !==0){
//     if(maxSin===0 || array[i]>maxSin){
//         maxSin= array[i]; }
//    }
//  }
//  console.log("max singul;",maxSin);
      
            //  task4

 let array =[7,10,17,33,54,67];
 let max = array[0];
 let min = array[0];
 for (let i = 1; i < array.length; i++) {
    if(array[i]<min){
        min=array[i];

    }
    if(array[i]>max){
        max= array[i];
    }
 }
 let ortalama=(min+max)/2;
 console.log("minimum:",min);
 console.log("maximum:",max);
 console.log("ortalama:",ortalama);

