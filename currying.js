// let multiply=function(x,y){
//     console.log(x*y);
// }
let multiply=function(x){
    return function(y){
    console.log(x*y);}
}
let multipletwo=multiply(2);
multipletwo(5);
let multiplethree=multiply(3);
multiplethree(5);
