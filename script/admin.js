
let admin = []
//object created
function Constructor(name, description, price, url) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.url=url;
}
let item1= new Constructor('DavidOff', 'A box of Special', 592.00,"https://i.postimg.cc/wBhsgtrh/davidoff.jpg")
let item2= new Constructor ('Corona ', ' A box of Romeo y Julieta  ', 189.95, "https://i.postimg.cc/sxth3p34/corona.jpg")
let item3= new Constructor('Cohiba' , ' A box of Siglo I', 560.00, "https://i.postimg.cc/fLP3vxSQ/ciger-c-jpg2.jpg")
let item4= new Constructor ('Maduro', 'A Box of INCH No.64', 523.00, "https://i.postimg.cc/857dDkhD/maduro.jpg")
let item5= new Constructor(' Fuente', 'A box of Chateau', 142, "https://i.postimg.cc/3JXX3cDy/arturo1.png" )
admin.push(item1, item2, item3, item4, item5)
localStorage.setItem('admin' , JSON.stringify(admin))
admin=JSON.parse(localStorage.getItem('admin'))
let table = document.querySelector('table');
function o() {
    let p = admin.map(function (item,index) {
        console.log(item);
        console.log(index);
    return`
    <article>
        <tr>
            <td>${item.name}</td>
            <td>${item.description}</td>
            <td>R ${item.price}</td>
            <td><img src="${item.url}" height="100px" width="100px"></td>
            <td><button class ='change'  data-index="${index}">Edit</button></td>
            <td><button class ='delete' value=${index}>delete</button></td>
        </tr>
    </article>
    `
})
table.innerHTML=p.join('');
}
o()
function Ape(){
    localStorage.setItem('admin', JSON.stringify(admin))
    admin = JSON.parse(localStorage.setItem('admin'))
}
function remove(position){
    admin.splice(position,1)
     Ape()
     o()
    }
table.addEventListener('click', function (event) {
    if (event.target.classList.contains('delete')) {
        remove(event.target.value)
    }
})
let deletebutton = document.querySelector('.delete');
table.addEventListener('click', function (event) {
    if (event.target.classList.contains('delete')) {
        remove(event.target.value);
    } else if (event.target.classList.contains('change')) {
        herModal(admin[event.target.dataset.index]);
    }
});
function herModal(item) {
    let Modals = new Yoni.Modal(document.getElementById('ExModal'));
    document.querySelector('.modal-title').innerText = item.name;
    document.querySelector('.modal-body p').innerText = `Description: ${item.description}\nPrice: R ${item.price}`;
Modals.show();
};
//Function to add a new product
function addProduct() {
  // Get values from input fields
  let pName = document.getElementById('pName').value;
  let Description = document.getElementById('Description').value;
  let ProductImageUrl = document.getElementById('ProductImageUrl').value;
  let ProductPrice = parseFloat(document.getElementById('ProductPrice').value);
  // Create a new product object
  let newItem = new Constructor(pName, Description, ProductPrice, ProductImageUrl);
  // Add the new product to the admin array
  admin.push(newItem);
  // Update the table and local storage
  Ape();
  o();
  // Close the modal
  var myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
  myModal.hide();
}













