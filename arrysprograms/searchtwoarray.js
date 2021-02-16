// var ar = [10, 11, 13, 14, 15];
// var arr2 = [8, 9, 10, 11, 16];
// for (let i = 0; i < ar.length; i++) {
//     for (j = 0; j < arr2.length; j++) {
//         if (ar[i] == arr2[j])
//             console.log(ar[i]);

//         else if (ar[i] > arr2[j]) {
//             arr2 += 1;
//         }
//         else if{
//             ar + = 1;

//         }
    
//     }
// }
var ar = [10, 11, 13, 14, 15];
var arr2 = [8, 9, 10, 11, 16];
var p1=0,p2=0;
while((p1<ar.length)&(p2<arr2,length)){
    if(ar[p1]==arr2[p2]){
        console.log(ar[p1]);
        p1+=1;
    }
    else if(ar[p1]>arr2[p2]){
        p2+=1;
    }
    else{
        p1+=1;
    }
    
}