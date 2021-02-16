var number=13;
var prime;
flag=0;
for(i=2;i<number;i++)
{
    
    if(number%i==0)
    {
        flag=1;
        break;
      //  console.log("not prime");
    }
    
}
if(flag==0)
{
    console.log("prime");
}
else{
    console.log("not prime");
}