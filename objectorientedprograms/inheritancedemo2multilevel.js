class Parent{
    m1(){
        console.log("inside parent m1 method")
    }
}
class Child extends Parent{
    m2(){
        console.log("inside child m2 method")
    }

}
class Subchild extends Child{
    m3(){
    console.log("inside subchild m3 method")
    }
}
var sb=new Subchild();
sb.m3();
sb.m2();
sb.m1()
var pa=new Parent();
pa.m1()
//pa.m2() not a function