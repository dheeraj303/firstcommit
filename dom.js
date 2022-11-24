// // console.log(document);
// console.log(document.title);
// document.title="hello";
// console.log(document.all[7]);

// var head=document.getElementById('header-title');
// var head1=document.getElementById('main-header');
// head1.style.borderBottom = "thick solid #0000FF";
// head.style.color="red";


//get element by class name
// var items=document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent='Hello 2';
// // items[1].style.fontWeight='bold';
// items[1].style.color='green';
// items[2].style.backgroundColor='green';

// for(var i=0;i<items.length;i++){
//     items[i].style.fontWeight='bold';
// }


//get element by tag name
var items=document.getElementsByTagName('li');
console.log(items);
console.log(items[1]);
items[1].textContent='Hello 2';
// items[1].style.fontWeight='bold';
items[1].style.color='green';
items[2].style.backgroundColor='green';

for(var i=0;i<items.length;i++){
    items[i].style.fontWeight='bold';
}








