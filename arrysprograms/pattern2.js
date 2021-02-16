var arr=[1,2,3,4];
num=6;
var l=0;
var u=arr.length-1;
while(l<u)
{
    let total=arr[l]+arr[u]
    if(total==num){
        console.log(arr[l],arr[u])
        break;
    }
    else if(total<num)
    {
        l+=1;
    }
    else{
        u-=1;
    }
}