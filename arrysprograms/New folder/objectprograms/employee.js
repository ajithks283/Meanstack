var employee={
    id:1000,
    name:"raju",
    desig:"developer",
    salary:30000,

}
console.log(employee.salary);
employee["salary"]+=1000;
if("gender" in employee)
{
console.log("exist")
}
else{
   // console.log("not exist")
   employee["gender"]="male";
}