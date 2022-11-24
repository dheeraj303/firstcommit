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


// //get element by tag name
// var items=document.getElementsByTagName('li');
// console.log(items);
// console.log(items[1]);
// items[1].textContent='Hello 2';
// // items[1].style.fontWeight='bold';
// items[1].style.color='green';
// items[2].style.backgroundColor='green';

// for(var i=0;i<items.length;i++){
//     items[i].style.fontWeight='bold';
// }

// //Query selector

// var header=document.querySelector('#main-header');
// header.style.borderBottom='solid 4px #ccc';

// var input=document.querySelector('input');
// input.value='hello world';

// var submit=document.querySelector('input[type="submit"]');
// submit.value='SEND';


// var item=document.querySelector('.list-group-item');
// item.style.color='red';

// var lastitem=document.querySelector('.list-group-item:last-child');
// lastitem.style.color='blue';

// var seconditem= document.querySelector('.list-group-item:nth-child(2)');
// seconditem.style.color='coral';

//Query selector all
var title=document.querySelectorAll('.title');
title[0].textContent='hello';

var odd=document.querySelectorAll('li:nth-child(odd)');
var even=document.querySelectorAll('li:nth-child(even)');

for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='red';
    even[i].style.backgroundColor='blue';
}




