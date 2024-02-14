
const buyTitle = document.getElementById("buyTitle");
const titleBuy = document.createElement("h2");
titleBuy.textContent = "TU COMPRA";
buyTitle.appendChild(titleBuy);


function showSavedProducts() {
    const savedProductsSession = sessionStorage.getItem("savedProducts");

    if (savedProductsSession) {
        const savedProducts = JSON.parse(savedProductsSession);
        const productsSelected = document.getElementById("productsSelected");
        const productList = document.createElement("ul");

        savedProducts.forEach(product => {
            const listItem = document.createElement("li");
            listItem.textContent = `${product.name} - $${product.price}`;
            productList.appendChild(listItem);
        });

        productsSelected.appendChild(productList);
    } else {
        const productsSelectedDiv = document.getElementById("productsSelected");
        productsSelectedDiv.textContent = "No has seleccionado ningun producto.";
    }
}
showSavedProducts();


const totalAmount = parseFloat(sessionStorage.getItem("totalAmount")) || 0;
const formTotalAmount = document.getElementById("formTotalAmount");
const totalAmountElement = document.createElement("div");
totalAmountElement.textContent = `Monto total: $${totalAmount}`;
formTotalAmount.appendChild(totalAmountElement);

//Se crea formulario donde se cargan los datos de la compra

const formInfo = document.getElementById("formInfo");
const formElement = document.createElement("form");

const fieldTitles = [
    "Nombre", "Apellido", "Número de telefono", "Número de DNI", "Número de Tarjeta de Crédito", "CCV",
    "Dirección en Ciudad de Cordoba", "Altura", "Codigo Postal", "Indicaciones"
];

fieldTitles.forEach(title => {
    const titleLabel = document.createElement("h3");
    titleLabel.textContent = title;

    const inputField = document.createElement("input");
    inputField.setAttribute("type", "text");
    inputField.setAttribute("name", title.toLowerCase().replace(/\s+/g, '_'));

    formElement.appendChild(titleLabel);
    formElement.appendChild(inputField);
});

const feesTitle = document.createElement("h3");
feesTitle.textContent = "Cuotas";

const feesSelect = document.createElement("select");
feesSelect.setAttribute("name", "fees");

const feesOptions = ["-","1", "3", "6", "12", "18"];
feesOptions.forEach(option => {
    const feeOption = document.createElement("option");
    feeOption.textContent = option;
    feeOption.setAttribute("value", option);
    feesSelect.appendChild(feeOption);
});

formInfo.appendChild(formElement);
formElement.appendChild(feesTitle);
formElement.appendChild(feesSelect);

/*Se crean condiciones que deben cumplirse en el formulario en los campos de:
-Numero de telefono
-Tarjeta de Credito
-CCV
-Codigo Postal
*/

const submitButton = document.getElementById("submitButton");
const sendData = document.getElementById("sendData");

submitButton.addEventListener("click", function(e) {
    e.preventDefault();

    const phone = formElement.elements["número_de_telefono"].value
    const card = formElement.elements["número_de_tarjeta_de_crédito"].value;
    const ccv = formElement.elements["ccv"].value;
    const postalCode = formElement.elements["codigo_postal"].value;

    sendData.innerHTML = "";

    if (phone.length !== 10 || isNaN(phone)) {
        const errorMessage = document.createElement("h3");
        errorMessage.textContent = "El número de telefono debe tener exactamente 10 digitos.";
        sendData.appendChild(errorMessage);

    }

    if (card.length !== 16 || isNaN(card)) {
        const errorMessage = document.createElement("h3");
        errorMessage.textContent = "El número de tarjeta de crédito debe tener exactamente 16 dígitos.";
        sendData.appendChild(errorMessage);

    }

    if (ccv.length !== 3 || isNaN(ccv)) {
        const errorMessage = document.createElement("h3");
        errorMessage.textContent = "El CCV debe tener exactamente 3 dígitos.";
        sendData.appendChild(errorMessage);

    }

    if (postalCode.length !== 4 || isNaN(postalCode)) {
        const errorMessage = document.createElement("h3");
        errorMessage.textContent = "El código postal debe tener exactamente 4 dígitos.";
        sendData.appendChild(errorMessage);
        return;
    }

    const successMessage = document.createElement("h3");
    successMessage.textContent = "Los datos fueron validados correctamente. Clickea en 'Finalizar Compra!' para que podamos concretar tu transaccion!";
    sendData.appendChild(successMessage);
});

// Se guardan datos del formulario en el localStorage

const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    input.addEventListener('change', function() {
        const name = input.getAttribute('name');
        const value = input.value;
        localStorage.setItem(name, value);
    });
});

feesSelect.addEventListener("change", function() {
    const selectedFees = feesSelect.value;
    localStorage.setItem("selectedFees", selectedFees);
});

const endBuyButton = document.getElementById("endBuy");
endBuyButton.addEventListener("click", function() {
    window.location.href = "./buyinfo.html";
});

const returnButton = document.getElementById("return");
returnButton.addEventListener("click", function() {
    sessionStorage.clear();
    window.location.href = "../index.html";
})
