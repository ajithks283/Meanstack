class Bank{
    createAccount(acno,pname,minbal){
        this.acno=acno;
        this.pname=pname;
        this.bal=minbal;
    }
    deposit(amount)
    {
        this.bal+=amount;
        console.log("account number creadited with  "+amount+" available balnce= "+this.bal);

    }
  
    withdraw(amount)
   {

    if(amount>this.bal)
    {
        console.log("Insufficient bal")
    }
    else{
        this.bal-=amount;
        console.log("account debited with"+amount+"available balance="+this.bal);

    }
}

balanceEng()
{
    console.log(this.bal);
}
}
var obj=new Bank();
obj.createAccount(100,"ajith",3000);
obj.deposit(9000)
obj.withdraw(6000);
obj.withdraw(6000);
obj.withdraw(6000);
//obj.deposit(5000);