const product = [
    {id: 1 , code: "CDP1", name: "Collar de plata Jericó", material: "Plata pura", price: 75000 , },
    {id: 2 , code: "CDP2", name: "Collar de plata Lisboa", material: "Plata 925", price: 45000 , },
    {id: 3 , code: "CDP3", name: "Collar de plata Luxor", material: "Plata 950", price: 55000 },
    {id: 4 , code: "DDP", name: "Dije de plata Cairo", material: "Plata pura", price: 60000},
    {id: 5 , code: "DDO", name: "Dije de oro Argos" , material: "Oro 24k", price: 70000},
    {id: 6 , code: "CDO1", name: "Collar de oro Atenas" , material: "Oro 24k", price: 90000 },
    {id: 7 , code: "CDO2", name: "Collar de oro Cartago" , material: "Oro 18k", price: 80000 },
    {id: 8 , code: "CDO3", name: "Collar de oro Tánger" , material: "Oro 14k", price: 70000 },
    {id: 9 , code: "ADP1", name: "Anillo de plata Zanzíbar" , material: "Plata pura", price: 40000 },
    {id: 10 , code: "ADP2", name: "Anillo de plata Bakú" , material: "Plata 925", price: 30000 },
    {id: 11 , code: "ADP3", name: "Anillo de plata Praga" , material: "Plata 950", price: 35000 },
    {id: 12 , code: "ADO1", name: "Anillo de oro Tenochtitlan" , material: "Oro 24k", price: 60000 },
    {id: 13 , code: "ADO2", name: "Anillo de oro Nishapur" , material: "Oro 18k", price: 55000 },
    {id: 14 , code: "ADO3", name: "Anillo de oro Tebas" , material: "Oro 14k", price: 50000 },
];
//Todo el arreglo de objetos product se guarda en el localStorage.
localStorage.setItem("product", JSON.stringify(product))
const products = JSON.parse(localStorage.getItem("product"));

//Las busquedas realizadas en el input son guardadas en el localStorage.
searchName.addEventListener("input", () => {
	const inputValue = searchName.value;
    localStorage.setItem("searchInput", inputValue);
	});


//Esta seccion esta orientada a crear la estructura HTML de cada uno de los elementos presentes en el array de objetos product.
    const container = document.getElementById("container");
    const searchNameInput = document.getElementById("searchName");

    function searchProducts(productsSearched) {
        container.innerHTML = "";
    
        productsSearched.forEach((item) => {
            let div = document.createElement("div");
            div.innerHTML = `
            <h2> ${item.name}</h2>
            <p>Código de compra: ${item.code}</p>
            <p>Material: ${item.material}</p>
            <b>$${item.price}</b>
            <button onclick="addProduct('${item.name}', ${item.price})">Agregar</button>
            `;
            container.append(div);
        });
    }

    //La siguiente seccion tiene por funcion filtrar la oferta segun la busqueda que realice el usuario, en caso de no realizar ninguna busqueda, se muestr ala oferta completa.
    function filterProducts() {
        const searchName = searchNameInput.value.toLowerCase();
        const productsFiltered = product.filter((item) => item.name.toLowerCase().includes(searchName));
        searchProducts(productsFiltered);
    }
    searchProducts(product);

//Esta seccion da funcionalidad al boton "Agregar", al precionarlo se crea una lista con los elementos seleccionados y se brinda el valor momentario de la compra realizada.
const totalAmountElement = document.getElementById("totalAmount");

function addProduct(productName, productPrice) {
    const listItem = document.createElement("li");
    listItem.textContent = productName;
    productList.appendChild(listItem);

    let totalAmount = parseFloat(totalAmountElement.textContent);
    totalAmount += productPrice;

    totalAmountElement.textContent = totalAmount;
    localStorage.setItem("totalAmount", totalAmount);
}

// Esta seccion se encarga de realizar el calculo del precio de cada cuota que el usuario abona por el producto seleccionado.
//Se tomal el valor guardado en el localStorage previamente y se utiliza para realizar el calculo de las cuotas segun el numero de cuotas seleccionado por el usuario.
//Finalmente los datos de la compra gestionada (precio total, numero de cuotas y precio por cuota) se guarda en el localStorage.

function feesCalc() {
    const numberOfFees = parseInt(document.getElementById('numberOfFees').value, 10);
    const totalAmount = parseFloat(localStorage.getItem('totalAmount')) || 0;
    const priceByFee = totalAmount / numberOfFees;
    const finalAmount = priceByFee * numberOfFees;

    document.getElementById('result').innerText = `El precio total de su compra es de: $${finalAmount}.
    El precio por cuota es de: $${priceByFee.toFixed(1)}.`;

    localStorage.setItem('result', JSON.stringify({
        finalAmount: finalAmount,
        numberOfFees: numberOfFees,
        priceByFee: priceByFee,
    }));
}


