
const materialType = document.getElementById("materialType");
materialType.innerHTML = "";
let div = document.createElement("div")
div.innerHTML = `
<h2 class= "materialtitle">ORO</h2>
<h2 class= "materialtitle">PLATA</h2>
`
materialType.appendChild(div);

const titleItems = document.getElementById("titleItems");
const itemsTitle = document.createElement("h3");
itemsTitle.textContent = "TU COMPRA";

titleItems.appendChild(itemsTitle);

const derivation = document.getElementById("derivation");
const buyButton = document.createElement("button");

buyButton.textContent = "COMPRAR";
buyButton.addEventListener("click", function() {
    window.location.href = "./pages/form.html";
});
derivation.appendChild(buyButton);


const emptyCart = document.getElementById("emptyCart");
const clearSession = document.createElement("button");
clearSession.textContent = "Vaciar Carrito";

clearSession.addEventListener("click", function() {
    sessionStorage.clear();
    window.location.reload();
});
emptyCart.appendChild(clearSession);

//Se llama a traves de fetch los datos contenidos en los .json locales (productsGold.json y productsSilver.json).

fetch('./db/productsSilver.json')
.then(response => response.json())
.then(data => {
    productSilver = data;
    filterProducts();
});

fetch('./db/productsGold.json')
.then(response => response.json())
.then(data => {
    productGold = data;
    filterProducts(); 
});

//Se genera la funcion de filtrado de productos y de creacion de tarjetas a traves de DOM.

searchName.addEventListener("input", () => {
	const inputValue = searchName.value;
    localStorage.setItem("searchInput", inputValue);
	});

    const containerGold = document.getElementById("gold");
    const containerSilver = document.getElementById("silver");
    const searchNameInput = document.getElementById("searchName");

    function searchProducts(productsSearched, container) {
        container.innerHTML = "";
    
        productsSearched.forEach((item) => {
            let div = document.createElement("div");
            div.innerHTML = `
            <img class=img src="${item.image}">
            <h3 class= "jewelname"> ${item.name}</h3>
            <p class="cardtext">Material: ${item.material}</p>
            <p class="cardtext">Tipo: ${item.tipo}</p>
            <b class="cardtext">$${item.price}</b>
            <button id=press onclick="addProduct('${item.name}', ${item.price})">Agregar</button>
            `;
            container.append(div);
        });
        
    }

    function filterProducts() {
        const searchName = searchNameInput.value.toLowerCase();
        const productsFilteredSilver = productSilver.filter((item) => item.name.toLowerCase().includes(searchName));
        const productsFilteredGold = productGold.filter((item) => item.name.toLowerCase().includes(searchName));
        searchProducts(productsFilteredSilver, containerSilver);
        searchProducts(productsFilteredGold, containerGold);
    }
    
    filterProducts();

    //Esta funcion esta destinada a mostrar los productos seleccionados con el boton "Agregar".
    //Se presente ademas el monto total de los productos seleccionados.

    function addProduct(productName, productPrice) {
        const itemListing = document.createElement("li");
        itemListing.textContent = productName;
        productList.appendChild(itemListing);

        let savedProducts = JSON.parse(sessionStorage.getItem("savedProducts")) || [];
        savedProducts.push({ name: productName, price: productPrice });
        sessionStorage.setItem("savedProducts", JSON.stringify(savedProducts));

        const totalAmountSection = document.getElementById("totalAmount");
        let totalAmount = parseFloat(totalAmountSection.textContent);
        totalAmount += productPrice;
    
        totalAmountSection.textContent = totalAmount;
        sessionStorage.setItem("totalAmount", totalAmount);
    }

