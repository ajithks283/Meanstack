class Person{
    constructor(ag,nam){
        this.age=ag;
        this.name=nam;

    }
    printPerson(){
        console.log(this.age);
        console.log(this.name);

    }
}var obj =new Person(25,"akhil");
obj.printPerson();