var obj={num:2};
var student={age:20};
var add=function(a,b,c){
    return this.num+a+b+c;
}
var printage=function(){
    console.log(this.age);
}
printage.call(student);

console.log(add.call(obj,1,2,3));
var arr=[1,2,3];
console.log(add.apply(obj,arr));

var bound=add.bind(obj);
console.log(bound(1,2,3));