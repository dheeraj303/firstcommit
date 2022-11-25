var form=document.getElementById('addForm');
var itemlist= document.getElementById('items');

form.addEventListener('submit',addItem);

function addItem(e){
    e.preventDefault();

    var newitem=document.getElementById('item').value;
    var desc=document.getElementById('description').value;
    var li=document.createElement('li');
    li.className='list-group-item';
    li.appendChild(document.createTextNode(newitem));
    li.appendChild(document.createTextNode(" "+ desc));
    var deletebtn=document.createElement('button');
    deletebtn.className='btn btn-danger btn-sm float-right delete';
    deletebtn.appendChild(document.createTextNode('x'));
    li.appendChild(deletebtn);
    itemlist.appendChild(li);

}

itemlist.addEventListener('click',removeitem);

function removeitem(e){
    // e.preventDefault();
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure ?')){
            var li=e.target.parentElement;
            itemlist.removeChild(li);
        }
    }
}

var filter=document.getElementById('filter');

filter.addEventListener('keyup',filteritems);

function filteritems(e){
    var text=e.target.value.toLowerCase();

var items =itemlist.getElementsByTagName('li');
Array.from(items).forEach(function(item){
  console.log(item.childNodes[1]);
    var itemName=item.firstChild.textContent;
// console.log(item.childNodes);
    var item2=item.childNodes[1].textContent;
    console.log(itemName);
  if(itemName.toLowerCase().indexOf(text)!=-1 || item2.toLowerCase().indexOf(text)!=-1){
    item.style.display='block';
  }else{
    item.style.display='none';
  }
})
}
