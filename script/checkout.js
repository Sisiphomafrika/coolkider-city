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
  let checkout = JSON.parse(localStorage.getItem('cart')) || [];
  

  let displayTableData = document.querySelector('[data-checkout]')
  
  function displayCheckout() {
    displayTableData.innerHTML = "";
      let items = groupBy(checkout, item => item.id);
    console.log(items);
      for (const key in items) {
          if (Object.hasOwnProperty.call(items, key)) {
              const itemGroup = items[key];
              const itemName = itemGroup[0].name;
              const itemCount = itemGroup.length;
              const itemAmount = itemGroup[0].amount;
              const totalAmount = itemCount * itemAmount;
  
              displayTableData.innerHTML += `
                  <tr>
                      <td>${itemName}</td>
                      <td>${itemCount}</td>
                      <td>R${itemAmount}</td>
                      <td>R${totalAmount}</td>
                  </tr>
              `;
          }
      }
  }
  
  // Grouping function 
  function groupBy(array, getKey) {
      return array.reduce((result, item) => {
          const key = getKey(item);
          (result[key] || (result[key] = [])).push(item);
          return result;
      }, {});
  }
  
  // Call function to display checkout
  displayCheckout();