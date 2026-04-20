fetch('Database/Tablets_Smartphones.json')
    .then(response => response.json())
    .then(data => {
        let result = document.getElementById("prodGrid");
        let card = "";

        let products = data.products;

        for (let i = 0; i < products.length; i++) {
            let product = products[i];

            let originalPrice  = product.price;
            let discountPrice  = (originalPrice * 0.85).toFixed(2);
            let discountPercent = 15;

            card += `
            <div class="product-card mt-5">
        <div class="card-top">
          <span class="badge-new">NEW</span>
          <button class="wishlist-btn"><i class="fa-regular fa-heart"></i></button>
          <div class="product-preview">
            <img src="${product.product_page.images[0]}" alt="">
          </div>
        </div>

        <div class="card-body">
          <p class="brand-name">${products[i].brand}</p>
          <h3 class="product-title">${products[i].name}</h3>

          <div class="rating">
            <span class="stars">★★★★★</span>
            <span class="review-count">(212)</span>
          </div>

          <div class="price-section">
            <span class="current-price">$${discountPrice}</span>
            <span class="old-price">$${originalPrice}.00</span>
            <span class="discount">-${discountPercent}%</span>
          </div>

          <button class="add-to-cart">
            <i class="fas fa-shopping-bag"></i> Add to Cart
          </button>
        </div>
      </div>
            `
        }

        result.innerHTML = card;
    });


    fetch('Database/Computer_laptop.json')
    .then(response => response.json())
    .then(data => {
        let result = document.getElementById("prodGrid1");
        let card = "";

        let products = data.products;

        for (let i = 0; i < products.length; i++) {
            let product = products[i];

            let originalPrice  = product.price;
            let discountPrice  = (originalPrice * 0.85).toFixed(2);
            let discountPercent = 15;

            card += `
            <div class="product-card mt-5">
        <div class="card-top">
          <span class="badge-new">NEW</span>
          <button class="wishlist-btn"><i class="fa-regular fa-heart"></i></button>
          <div class="product-preview">
            <img src="${product.product_page.images[0]}" alt="">
          </div>
        </div>

        <div class="card-body">
          <p class="brand-name">${products[i].brand}</p>
          <h3 class="product-title">${products[i].name}</h3>

          <div class="rating">
            <span class="stars">★★★★★</span>
            <span class="review-count">(212)</span>
          </div>

          <div class="price-section">
            <span class="current-price">$${discountPrice}</span>
            <span class="old-price">$${originalPrice}.00</span>
            <span class="discount">-${discountPercent}%</span>
          </div>

          <button class="add-to-cart">
            <i class="fas fa-shopping-bag"></i> Add to Cart
          </button>
        </div>
      </div>
            `
        }

        result.innerHTML = card;
    });

    fetch('Database/Audio.json')
    .then(response => response.json())
    .then(data => {
        let result = document.getElementById("prodGrid2");
        let card = "";

        let products = data.products;

        for (let i = 0; i < products.length; i++) {
            let product = products[i];

            let originalPrice  = product.price;
            let discountPrice  = (originalPrice * 0.85).toFixed(2);
            let discountPercent = 15;

            card += `
            <div class="product-card mt-5">
        <div class="card-top">
          <span class="badge-new">NEW</span>
          <button class="wishlist-btn"><i class="fa-regular fa-heart"></i></button>
          <div class="product-preview">
            <img src="${product.product_page.images[0]}" alt="">
          </div>
        </div>

        <div class="card-body">
          <p class="brand-name">${products[i].brand}</p>
          <h3 class="product-title">${products[i].name}</h3>

          <div class="rating">
            <span class="stars">★★★★★</span>
            <span class="review-count">(212)</span>
          </div>

          <div class="price-section">
            <span class="current-price">$${discountPrice}</span>
            <span class="old-price">$${originalPrice}.00</span>
            <span class="discount">-${discountPercent}%</span>
          </div>

          <button class="add-to-cart">
            <i class="fas fa-shopping-bag"></i> Add to Cart
          </button>
        </div>
      </div>
            `
        }

        result.innerHTML = card;
    });

    fetch('Database/Accessories.json')
    .then(response => response.json())
    .then(data => {
        let result = document.getElementById("prodGrid3");
        let card = "";

        let products = data.products;

        for (let i = 0; i < products.length; i++) {
            let product = products[i];

            let originalPrice  = product.price;
            let discountPrice  = (originalPrice * 0.85).toFixed(2);
            let discountPercent = 15;

            card += `
            <div class="product-card mt-5">
        <div class="card-top">
          <span class="badge-new">NEW</span>
          <button class="wishlist-btn"><i class="fa-regular fa-heart"></i></button>
          <div class="product-preview">
            <img src="${product.product_page.images[0]}" alt="">
          </div>
        </div>

        <div class="card-body">
          <p class="brand-name">${products[i].brand}</p>
          <h3 class="product-title">${products[i].name}</h3>

          <div class="rating">
            <span class="stars">★★★★★</span>
            <span class="review-count">(212)</span>
          </div>

          <div class="price-section">
            <span class="current-price">$${discountPrice}</span>
            <span class="old-price">$${originalPrice}.00</span>
            <span class="discount">-${discountPercent}%</span>
          </div>

          <button class="add-to-cart">
            <i class="fas fa-shopping-bag"></i> Add to Cart
          </button>
        </div>
      </div>
            `
        }

        result.innerHTML = card;
    })