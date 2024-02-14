
const finalTitle = document.getElementById("finalInfoTitle");
let titleEnd = document.createElement("div");
titleEnd.innerHTML = `
<h2>Gracias por tu compra!</h2>
<h3>Te dejamos esta información sobre tu transacción:</h3>
`;
finalTitle.appendChild(titleEnd);

//Se retoman los datos del formulario para brindar mensaje final

const nameBuyer = localStorage.getItem("nombre");
const surname = localStorage.getItem("apellido");
const adress = localStorage.getItem("dirección_en_ciudad_de_cordoba");
const adressNumber = localStorage.getItem("altura");
const postalCode = localStorage.getItem("codigo_postal");
const phone = localStorage.getItem("número_de_telefono")

const finalAmount = sessionStorage.getItem("totalAmount")
const finalFees = localStorage.getItem("selectedFees")
const finalPrice = finalAmount / finalFees

//Se aplica libreria Luxon para generar fechas en el mensaje final.

const DateTime = luxon.DateTime;
const now = DateTime.now()
const nowDate = now.toLocaleString(DateTime);
const plusSeven = now.plus({ days: 7 });

const deliverDate = plusSeven.toLocaleString(DateTime);

const finalInfo = document.getElementById("finalInfo");
finalInfo.innerHTML = `
    <p>Titular de compra: ${nameBuyer} ${surname}</p>
    <p>Direccion de envio: ${adress} ${adressNumber} CP: ${postalCode}</p>
    <p>Monto de la compra: ${finalAmount}</p>
    <p>Número de cuotas: ${finalFees}</p>
    <p>Precio por cuota: ${finalPrice.toFixed(2)}</p>
    <p>Fecha de transaccion: ${nowDate}</p>
    <p>Fecha de limite de entrega: ${deliverDate}</p>
`;

const finalMessage = document.getElementById("finalMessage")
finalMessage.innerHTML = `
<p>Nos estaremos comunicando a tu numero de telefono (${phone}) para informarte cuando nos estaremos dirigiendo a tu domicilio a realizarse la entrega!</p>
`

//Se genera boton para voler a index.html. Se borra localStorage para poder generar otra compra nueva sin retomar datos de compras anteriores.

const returnButton = document.getElementById("return");
returnButton.addEventListener("click", function() {
    sessionStorage.clear()
    localStorage.clear();
    window.location.href = "../index.html";
})