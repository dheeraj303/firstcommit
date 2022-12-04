posts=[{title:"post1", body:"this is post 1"}];

function getposts(){
    setTimeout(()=>{
    let output="";
    posts.forEach((post)=>{
        output+=`<li>${post.title}</li>`
    });
    document.body.innerHTML=output;
},1000);
setTimeout(getposts,1000);
}

function createpost(post){
 return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // post.createdAt=Date.now();
        posts.push(post);
        const error =false;
        if(!error){
            resolve();
        }else{
            reject('Error: Something went wrong');
        }
      
    },1000);
});
}

function deletepost(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
               
                if(posts.length!=0){
                    posts.pop();
                    resolve();
                }else{
                    reject('Array is empty');
                }
        },1000);
    });
}

createpost({title:'post two',body:'this is post two'})
.then(getposts)
.catch(err=>console.log(err));
createpost({title:'post three',body:'this is post three'})
.then(getposts)
.catch(err=>console.log(err));
console.log(posts);

deletepost().then(()=>
{getposts();
    deletepost().then(()=>{
        getposts();
        deletepost().then(()=>{
            getposts();
            deletepost().then(()=>{
                getposts();
            }).catch(err=>console.log(err));
        }).catch(err=>console.log(err));
    }).catch(err=>console.log(err));
}).catch(err=>console.log(err));
// .then(getposts).then(getposts).catch(err=>console.log(err));