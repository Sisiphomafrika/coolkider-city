let productsData = [
    {
      'id': 1,
      'name': 'Leather Bag',
      'amount': 1400,
      'image': 'https://i.postimg.cc/PxHrB7Yq/98993524-800-800.png',
      'productType': 'zara'
    },
    {
        'id': 1,
        'name': 'Sling Bag',
        'amount': 800,
        'image': 'https://i.postimg.cc/Nfssz5ST/images-11.jpg',
        'productType': 'zara'
      },
      {
        'id': 1,
        'name': 'Sholder Bag',
        'amount': 1000,
        'image': 'https://i.postimg.cc/R0057Dsn/images-5.jpg',
        'productType': 'zara'
      },
      {
        'id': 1,
        'name': 'Cross Body Bag',
        'amount': 1200,
        'image': 'https://i.postimg.cc/qqLmqksh/images-4.jpg',
        'productType': 'zara'
      },
      {
        'id': 1,
        'name': 'Cross-Body Bag-Faded-Tan',
        'amount': 2500,
        'image': 'https://i.postimg.cc/QNTjvkGn/Crossbody-Bags-Faded-Tan.png',
        'productType': 'zara'
      },
      
  ];
  
  
  let products = JSON.parse(localStorage.getItem('products')) || productsData;
  localStorage.setItem('products', JSON.stringify(products));
  
  let productsWrapper = document.querySelector('[data-products]');
  let searchInput = document.querySelector('[data-search-product]');
  let sortSelect = document.querySelector('[data-products-sort]');
  
  function displayProduct(productsToDisplay) {
    productsWrapper.innerHTML = '';
    productsToDisplay.forEach((product) => {
      productsWrapper.innerHTML += `
        <div class="card mt-5">
          <img src="${product.image}" class="card-img-top" alt="${product.name}">
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">Amount: $${product.amount}</p>
            <a href="#" class="btn btn-primary">Add to Cart</a>
          </div>
        </div>
      `;
    });
  }
  displayProduct(products)
  
  
  function searchProducts() {
    let searchTerm = searchInput.value.toLowerCase();
    let filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm) || product.productType.toLowerCase().includes(searchTerm)
    );
    displayProduct(filteredProducts);
  }
  
  function sortProducts() {
    let sortBy = sortSelect.value;
    let sortedProducts = [...products];
    if (sortBy === 'name') {
      sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'amount') {
      sortedProducts.sort((a, b) => a.amount - b.amount);
    }
    displayProduct(sortedProducts);
  }
  
  // Event listeners
  searchInput.addEventListener('input', searchProducts);
  sortSelect.addEventListener('change', sortProducts);
  
  //this will display the  Initial of the product
  displayProduct(products);
  