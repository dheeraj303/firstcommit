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
// var title=document.querySelectorAll('.title');
// title[0].textContent='hello';

// var odd=document.querySelectorAll('li:nth-child(odd)');
// var even=document.querySelectorAll('li:nth-child(even)');

// for(var i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor='red';
//     even[i].style.backgroundColor='blue';
// }



//Traversing the dom

var itemlist=document.querySelector('#items');

console.log(itemlist.parentNode);
itemlist.parentNode.style.backgroundColor='red';
console.log(itemlist.parentNode.parentNode.parentNode);


console.log(itemlist.parentElement);
itemlist.parentElement.style.backgroundColor='red';
console.log(itemlist.parentElement.parentElement.parentElement);


//Child node

console.log(itemlist.childNodes);

console.log(itemlist.children);;


console.log(itemlist.children[1]);
itemlist.children[1].style.backgroundColor='yellow';

//first child

console.log(itemlist.firstChild);
console.log(itemlist.firstElementChild);
itemlist.firstElementChild.textContent="hello 1";



console.log(itemlist.lastChild);
console.log(itemlist.lastElementChild);
itemlist.lastElementChild.textContent="hello 4";

console.log(itemlist.nextSibling);
console.log(itemlist.nextElementSibling);


console.log(itemlist.previousSibling);
console.log(itemlist.previousElementSibling);

//create element
// create a div 
var newDiv=document.createElement('div');
newDiv.className='Hello';
newDiv.id="Hello1";
newDiv.setAttribute('title','Hello Div');
// create text node 

var newText=document.createTextNode('Hello World');
newDiv.appendChild(newText);
var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');
container.insertBefore(newDiv,h1);
