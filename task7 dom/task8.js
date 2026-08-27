//task 8--dynamic category buttons

let categoryButtons = document.getElementById("categoryButtons");
let productsContainer = document.getElementById("productsContainer");

let products = [];

let categories = [
    "All",
    "men's clothing",
    "women's clothing",
    "jewelery",
    "electronics"
];

let apicard="https://fakestoreapi.com/products"
fetch(apicard)
    .then(data => 
       data.json())
    .then(jsdata => {

        products = jsdata;

        displayProducts(products);

        // Create buttons
        categories.forEach(category => {

            let button = document.createElement("button");

            button.textContent = category;

            categoryButtons.appendChild(button);

            button.addEventListener("click", () => {

                if (category === "All") {
                    displayProducts(products);
                } else {

                    let filteredProducts = products.filter(product =>
                        product.category === category
                    );

                    displayProducts(filteredProducts);
                }
            });
        });
    });


function displayProducts(productList) {

    productsContainer.innerHTML = "";

    productList.forEach(product => {

        let api = document.createElement("div");

        api.innerHTML = ` <img src="${product.image}" width="150">
                       <h3>${product.title}</h3>
                       <p>${product.category}</p>
                       <p>$${product.price}</p>`;

        productsContainer.appendChild(api);
    });
}

    
