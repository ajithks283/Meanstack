//method over loading --> ithanu thazhe koduthekanath
//method over riding
class Maths{
    add(num){
        console.log("inside single argument method")
    }
    add(num1,num2){
        console.log("inside two argument method")
    }
    add(num1,num2,num3){
        console.log("inside 3 argument method")
    }
}
var math=new Maths()
math.add(10,20)
math.add(10,20,30)


//constructor
//name  