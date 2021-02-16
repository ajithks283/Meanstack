arr=[1,2,10,11,12];
var element=11;
var low=0;
var upp =arr.length-1;
while(low<=upp)
{
let mid=math.floor((low+upp))/2;
if(arr[mid]==element)
{
    flag=1;
    break;
}
else if(element>arr[mid])
{
    low=mid+1;

}
else if(element>arr[mid])
{
    upp=mid-1;

}
}