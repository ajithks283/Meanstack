//var expns=[25000,26000]
var exp={
    jan:25000,
    feb:26000,
    march:27000,
    april:30000

}
console.log(exp["jan"])
console.log(exp["april"])


exp["may"]=32000;
console.log(exp)

exp["feb"]+=1000;
console.log(exp["feb"])//exp.feb-also using