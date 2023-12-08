let productsData = [
    {
      'id': 1,
      'name': 'Leather Bag',
      'amount': 1400,
      'image': 'https://i.postimg.cc/PxHrB7Yq/98993524-800-800.png',
      'productType': 'zara'
    },
    {
        'id': 2,
        'name': 'Sling Bag',
        'amount': 800,
        'image': 'https://i.postimg.cc/Nfssz5ST/images-11.jpg',
        'productType': 'zara'
      },
      {
        'id': 3,
        'name': 'Sholder Bag',
        'amount': 1000,
        'image': 'https://mdbootstrap.com/img/new/ecommerce/vertical/075.jpg',
        'productType': 'zara'
      },
      {
        'id': 4,
        'name': 'Cross Body Bag',
        'amount': 1200,
        'image': 'https://i.postimg.cc/qqLmqksh/images-4.jpg',
        'productType': 'zara'
      },
      {
        'id': 5,
        'name': 'Cross-Body Bag-Faded-Tan',
        'amount': 2500,
        'image': 'https://i.postimg.cc/QNTjvkGn/Crossbody-Bags-Faded-Tan.png',
        'productType': 'zara'
      },
      
  ];
  displayProductData()
let products = JSON.parse(localStorage.getItem('products')) || []

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

function addProduct() {
 
  let pName = document.getElementById('pName').value;
  let Description = document.getElementById('Description').value;
  let ProductImageUrl = document.getElementById('ProductImageUrl').value;
  let ProductPrice = parseFloat(document.getElementById('ProductPrice').value);
 
  let newItem = new Constructor(pName, Description, ProductPrice, ProductImageUrl);

  admin.push(newItem);
  Ape();
  o();
  // Close the modal
  var myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
  myModal.hide();
}



//object created
function UpdateProduct(item) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.url=url;
}









