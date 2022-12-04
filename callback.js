posts=[{title:"post1", body:"this is post 1",createdAt:Date.now()}];

function getposts(){
    setTimeout(()=>{
    let output="";
    posts.forEach((post)=>{
        output+=`<li>${post.title} edited ${Math.floor((Date.now()-post.createdAt)/1000)} seconds ago</li>`
    });
    document.body.innerHTML=output;
},1000);
setTimeout(getposts,1000);
}

function createpost(post,callback){
    setTimeout(()=>{
        post.createdAt=Date.now();
        posts.push(post);
        callback();
        console.log("post created");
    },2000);
}



createpost({title:'post two',body:'this is post two'},getposts);
createpost({title:'post three',body:'this is post three'},getposts);



// updateedited();