
const productSilver = [
    {id: 1 , name: "Collar de plata Jericó", material: "Plata", tipo: "Pura", price: 75000, image: "../images/jerico.jpg"},
    {id: 2 , name: "Collar de plata Lisboa", material: "Plata", tipo: "925", price: 45000, image: "../images/lisboa.jpg"},
    {id: 3 , name: "Collar de plata Luxor", material: "Plata", tipo: "950" , price: 55000, image: "../images/luxor.jpg"},
    {id: 4 , name: "Anillo de plata Zanzíbar" , material: "Plata", tipo: "Pura", price: 40000, image: "../images/zanzibar.jpg"},
    {id: 5 , name: "Anillo de plata Praga" ,  material: "Plata", tipo: "950" , price: 35000, image: "../images/praga.jpg"},
];

const productGold = [
    {id: 1 , name: "Collar de oro Atenas" , material: "Oro", tipo: "24K", price: 90000, image: "../images/atenas.jpg"},
    {id: 2 , name: "Collar de oro Cartago" , material: "Oro", tipo: "18K", price: 80000, image: "../images/cartago.jpg"},
    {id: 3 , name: "Collar de oro Tánger" , material: "Oro", tipo: "14K", price: 70000, image: "../images/tanger.jpg"},
    {id: 4 , name: "Anillo de oro Tenochtitlan" , material: "Oro", tipo: "24K", price: 60000, image: "../images/tenochtitlan.jpg"},
    {id: 5 , name: "Anillo de oro Tebas" , material: "Oro", tipo: "18K", price: 50000, image: "../images/tebas.jpg"},
];

let productsGold = JSON.parse(localStorage.getItem("productGold"))
let productsSilver = JSON.parse(localStorage.getItem("productSilver"))

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

//Las busquedas realizadas en el input son guardadas en el localStorage.

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

    const totalAmountSection = document.getElementById("totalAmount");

    function addProduct(productName, productPrice) {
        const itemListing = document.createElement("li");
        itemListing.textContent = productName;
        productList.appendChild(itemListing);

        let savedProducts = JSON.parse(sessionStorage.getItem("savedProducts")) || [];
        savedProducts.push({ name: productName, price: productPrice });
        sessionStorage.setItem("savedProducts", JSON.stringify(savedProducts));

        let totalAmount = parseFloat(totalAmountSection.textContent);
        totalAmount += productPrice;
    
        totalAmountSection.textContent = totalAmount;
        sessionStorage.setItem("totalAmount", totalAmount);
    }

