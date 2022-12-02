// this.name="Ram";
// console.log(this.name);

// const work=function(work){
//     const work2=(_work) =>{
//         console.log(`${this.name} worked on ${_work}`);
//     }
//     work2(work);
// }

// this.mohan={
//     name:'mohan'
// }
// let shyam={
//     name:'shyam'
// }
// let name=function(name){
//     this.name=name;
// }
// const ramu=new name('ramu');
// work.call(ramu,'flutter');
// work.call(this, 'developer');
// work.call(this.mohan, 'developer');
// work.call(shyam, 'developer');

class student{
    static count=0;
    constructor(name,age,number,marks){
        this.name=name;
        this.age=age;
        this.number=number;
        this.marks=marks;
        student.count++;
    }
    eligible(){
        if(this.marks>=40){
            console.log("eligible");
        }else{
            console.log("not eligible");
        }
    }
   count(){
        console.log(student.count);
    }
     eligibleplacement(minmarks){
            return (age) =>{
                if(this.marks>minmarks && this.age>=age){
                    console.log(`${this.name} is eligible`);
                }else{
                    console.log("not eligible");
                }
            }
    }
}

let s1=new student('ram',20,12345,40);
let s2=new student('ramu',19,12345,80);
let s3=new student('ramdev',20,12345,60);
let s4=new student('balram',20,12345,30);
let s5=new student('rama',20,12345,20);
s1.eligible();
s2.eligible();
s3.eligible();
s4.eligible();
s5.eligible();
s1.count();
s1.eligibleplacement(40)(20);
s2.eligibleplacement(40)(20);
s3.eligibleplacement(40)(20);
s4.eligibleplacement(40)(20);
s5.eligibleplacement(40)(20);