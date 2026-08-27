let productsContainer =
    document.querySelector("#productsContainer");

let categoryButtons =
    document.querySelector("#categoryButtons");

let searchInput =
    document.querySelector("#searchInput");

let searchBtn =
    document.querySelector("#searchBtn");

let lowHigh =
    document.querySelector("#lowHigh");

let highLow =
    document.querySelector("#highLow");

let totalProducts =
    document.querySelector("#totalProducts");


let items = [];


// FETCH API

let apidata="https://fakestoreapi.com/products"

    
fetch(apidata).then((data)=>{
   // console.log(data);

     return data.json()
    
})
    
    .then((jsdata) => {

        items = jsdata;

        // Display only first 20 products
        let first20Products = items.slice(0, 20);

        displayProducts(first20Products);

        createCategoryButtons(first20Products);
    });



// DISPLAY PRODUCTS


function displayProducts(productList) {

    productsContainer.innerHTML = "";

    totalProducts.textContent =
        `Total Products: ${productList.length}`;

    productList.forEach((c,i,t) => {

        let api = document.createElement("div");

        api.className = "product-card";

        api.innerHTML = `
            <img src="${c.image}" width="150">

            <h3>${c.title}</h3>

            <p>
                <strong>Category:</strong>
                ${c.category}
            </p>

            <p>
                ${c.description}
            </p>

            <p>
                <strong>$${c.price}</strong>
            </p>

            <button>Add to Cart</button>
        `;

        productsContainer.append(api);
    });
}



// CATEGORY BUTTONS


function createCategoryButtons(productList) {

    let categories = [
        "All",
        "men's clothing",
        "women's clothing",
        "jewelery",
        "electronics"
    ];

    categories.forEach((category) => {

        let button = document.createElement("button");

        if (category === "All") {
            button.textContent = "All";
        }
        else if (category === "men's clothing") {
            button.textContent = "Men";
        }
        else if (category === "women's clothing") {
            button.textContent = "Women";
        }
        else if (category === "jewelery") {
            button.textContent = "Jewellery";
        }
        else {
            button.textContent = "Electronics";
        }

        categoryButtons.append(button);


        // Category click
        button.addEventListener("click", () => {

            if (category === "All") {

                displayProducts(productList);

            } else {

                let filteredProducts =
                    productList.filter((product) =>
                        product.category === category
                    );

                displayProducts(filteredProducts);
            }
        });
    });
}



// SEARCH PRODUCT


searchBtn.addEventListener("click", () => {

    let searchValue =
        searchInput.value.toLowerCase();

    let searchedProducts =
        products
            .slice(0, 20)
            .filter((product) =>
                product.title
                    .toLowerCase()
                    .includes(searchValue)
            );

    displayProducts(searchedProducts);
});



// LOW → HIGH


lowHigh.addEventListener("click", () => {

    let sortedProducts =
        [...products]
            .slice(0, 20)
            .sort((a, b) =>
                a.price - b.price
            );

    displayProducts(sortedProducts);
});



// HIGH → LOW


highLow.addEventListener("click", () => {

    let sortedProducts =
        [...products]
            .slice(0, 20)
            .sort((a, b) =>
                b.price - a.price
            );

    displayProducts(sortedProducts);
});
   