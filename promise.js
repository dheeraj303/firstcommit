var posts=[{title:"post1", body:"this is post 1"}];

// function getposts(){
//     setTimeout(()=>{
//     let output="";
//     posts.forEach((post)=>{
//         output+=`<li>${post.title}</li>`
//     });
//     document.body.innerHTML=output;
// },1000);
// setTimeout(getposts,1000);
// }

// function createpost(post){
//  return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         // post.createdAt=Date.now();
//         posts.push(post);
//         const error =false;
//         if(!error){
//             resolve();
//         }else{
//             reject('Error: Something went wrong');
//         }
      
//     },1000);
// });
// }


const createpost=async ()=>{
    const create=(post)=>{ 
        return new Promise((resolve,reject)=>{
         setTimeout(()=>{
           // post.createdAt=Date.now();
         
           posts.push(post);
           console.log(posts);
           const error =false;
           if(!error){
               resolve();
           }else{
               reject('Error: Something went wrong');
           }
         
       },1000);
    }
    )};
    
//    console.log('createpost1');

   const getposts=()=>{return new Promise((resolve, reject) => {
        setTimeout(()=>{
                let output="";
                posts.forEach((post)=>{
                    output+=`<li>${post.title}</li>`
                });
                document.body.innerHTML=output;
            },1000);
            // setTimeout(getposts,1000);
            resolve();
        });
    }
    
    let createpost1=await create({title:'post two',body:'this is post two'});
    getposts();

 const deletem = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            //    console.log(posts.length);
                if(posts.length!=0){
                    posts.pop();
                    // console.log(posts);
                    resolve();
                }else{
                    reject('Array is empty');
                }
        },1000);
    });

    
await deletem;
 getposts();
}
 
//    await getposts;
  
   

   createpost().then(()=>console.log('done'));

// function deletepost(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
               
//                 if(posts.length!=0){
//                     posts.pop();
//                     resolve();
//                 }else{
//                     reject('Array is empty');
//                 }
//         },1000);
//     });
// }
// createpost({title:'post two',body:'this is post two'})
// .then(getposts)
// .catch(err=>console.log(err));
// createpost({title:'post three',body:'this is post three'})
// .then(getposts)
// .catch(err=>console.log(err));
// console.log(posts);

// deletepost().then(()=>
// {getposts();
//     deletepost().then(()=>{
//         getposts();
//         deletepost().then(()=>{
//             getposts();
//             deletepost().then(()=>{
//                 getposts();
//             }).catch(err=>console.log(err));
//         }).catch(err=>console.log(err));
//     }).catch(err=>console.log(err));
// }).catch(err=>console.log(err));
// .then(getposts).then(getposts).catch(err=>console.log(err));


// const promise1=Promise.resolve('HelloWorld');
// const promise2=10;
// const promise3=new Promise((resolve,reject)=>{
//     setTimeout(resolve,2000,'Goodbye')
// });

// Promise.all([promise1,promise2,promise3]).then(values=>console.log(values));
// class User{
//     constructor(){
//         this.lastactivity=Date.now();
//     }
//     getactivity(){
//         console.log(this.lastactivity);
//     }
// }
// var u1=new User();
// function updatelastuseractiviytime(){
//     return new Promise((resolve,reject)=>{
//         u1.lastactivity=Date.now();
//         resolve();
//     })
// }

// Promise.all([createpost({title:'post two',body:'this is post two'})
// ,updatelastuseractiviytime()]).then((values)=>{
//     console.log(posts);
//     u1.getactivity();
// });
   
// console.log(posts);
// console.log(u1.lastactivity);


// deletepost().then(()=>
// {getposts();
//     deletepost().then(()=>{
//         getposts();
//         deletepost().then(()=>{
//             getposts();
//             deletepost().then(()=>{
//                 getposts();
//             }).catch(err=>console.log(err));
//         }).catch(err=>console.log(err));
//     }).catch(err=>console.log(err));
// }).catch(err=>console.log(err));
// .then(getposts).then(getposts).catch(err=>console.log(err));