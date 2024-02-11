

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
const formTotalAmountDiv = document.getElementById("formTotalAmount");
const totalAmountElement = document.createElement("div");
totalAmountElement.textContent = `Monto total: $${totalAmount}`;
formTotalAmountDiv.appendChild(totalAmountElement);

const formElement = document.createElement("form");

const fieldTitles = [
    "Nombre", "Apellido", "Número de DNI", "Número de Tarjeta de Crédito", "CCV",
    "Provincia", "Localidad", "Dirección", "Altura", "Codigo Postal", "Indicaciones"
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
feesSelect.setAttribute("name", "cuotas");

const feesOptions = ["1", "3", "6", "12", "18"];
feesOptions.forEach(option => {
    const feeOption = document.createElement("option");
    feeOption.textContent = option;
    feeOption.setAttribute("value", option);
    feesSelect.appendChild(feeOption);
});

formElement.appendChild(feesTitle);
formElement.appendChild(feesSelect);


const submitButton = document.getElementById("submitButton");


submitButton.addEventListener("click", function() {
    const sendData = document.getElementById("sendData");
    sendData.innerHTML = "";

    const creditCardInput = document.querySelector('input[name="número_de_tarjeta_de_crédito"]');
    if (creditCardInput.value.length !== 16) {
        const message = document.createElement("div");
        message.textContent = "El número de tarjeta de crédito debe tener exactamente 16 dígitos.";
        message.classList.add("validation-message");
        sendData.appendChild(message);
    }

    const ccvInput = document.querySelector('input[name="ccv"]');
    if (ccvInput.value.length !== 3) {
        const message = document.createElement("div");
        message.textContent = "El CCV debe tener exactamente 3 dígitos.";
        message.classList.add("validation-message"); 
        sendData.appendChild(message);
    }

    if (sendData.children.length > 0) {
        return;
    }

    formElement.submit();
});

const formInfo = document.getElementById("formInfo");
formInfo.appendChild(formElement);


const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    input.addEventListener('change', function() {
        const name = input.getAttribute('name');
        const value = input.value;

        localStorage.setItem(name, value);
    });
});

feesSelect.addEventListener("change", function() {
    const selectedFees = cuotasSelect.value;
    localStorage.setItem("selectedFees", selectedFees);
});

const endBuyButton = document.getElementById("endBuy");
endBuyButton.addEventListener("click", function() {
    window.location.href = "./buyinfo.html";
});

