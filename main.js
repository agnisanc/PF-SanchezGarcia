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

localStorage.setItem("product", JSON.stringify(product))

const products = localStorage.getItem("product");
console.log(JSON.parse(products));

search.addEventListener("input", () => {
	console.log(search.value)
	});

product.forEach((item) => {
    let div = document.createElement("div");
    div.innerHTML = `
    <h2> ${item.name}</h2>
    <p>Codigo de compra: ${item.code}</p>
    <p>Material: ${item.material}</p>
    <b>$${item.price}</b>
    <button>Agregar</button>
    `
    container.append(div);
});

// Esta seccion se encarga de realizar el calculo del precio de cada cuota que el usuario abona por el producto seleccionado.
//Se ha optimizado la seleccion de cuotas a traves de un select para definir las cuotas disponibles, librando al usuario de tener que ingresar el numero cuotas a traves de un input.

function feesCalc() {
    const codeOfProduct = document.getElementById('productCode').value;
    const numberFees = document.getElementById('numberOfFees').value;
    const dateEn = Date();
    const products = product.find(item => item.code === codeOfProduct); 

    if (products) {
        const priceByFee = (products.price / numberFees);
        document.getElementById('resultado').innerText = `El precio por cuota de "${products.name}" es de $${priceByFee}.
        Fecha de compra: ${dateEn}
        Muchas gracias por tu compra!`;
        localStorage.setItem('resultado')
    } else {
        document.getElementById('resultado').innerText = 'Este producto no esta disponible en nuestro catalogo. Por favor, ingresa un codigo valido.';
    }
}


