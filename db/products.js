
export const productSilver = [
    {id: 1 , name: "Collar de plata Jericó", material: "Plata", tipo: "Pura", price: 75000, image: "../images/jerico.jpg"},
    {id: 2 , name: "Collar de plata Lisboa", material: "Plata", tipo: "925", price: 45000, image: "../images/lisboa.jpg"},
    {id: 3 , name: "Collar de plata Luxor", material: "Plata", tipo: "950" , price: 55000, image: "../images/luxor.jpg"},
    {id: 4 , name: "Anillo de plata Zanzíbar" , material: "Plata", tipo: "Pura", price: 40000, image: "../images/zanzibar.jpg"},
    {id: 5 , name: "Anillo de plata Praga" ,  material: "Plata", tipo: "950" , price: 35000, image: "../images/praga.jpg"},
];

export const productGold = [
    {id: 1 , name: "Collar de oro Atenas" , material: "Oro", tipo: "24K", price: 90000, image: "../images/atenas.jpg"},
    {id: 2 , name: "Collar de oro Cartago" , material: "Oro", tipo: "18K", price: 80000, image: "../images/cartago.jpg"},
    {id: 3 , name: "Collar de oro Tánger" , material: "Oro", tipo: "14K", price: 70000, image: "../images/tanger.jpg"},
    {id: 4 , name: "Anillo de oro Tenochtitlan" , material: "Oro", tipo: "24K", price: 60000, image: "../images/tenochtitlan.jpg"},
    {id: 5 , name: "Anillo de oro Tebas" , material: "Oro", tipo: "18K", price: 50000, image: "../images/tebas.jpg"},
];

JSON.parse(localStorage.getItem("productsSilver")) || localStorage.setItem("productsSilver", JSON.stringify(productSilver))
JSON.parse(localStorage.getItem("productsGold")) || localStorage.setItem("productsGold", JSON.stringify(productGold))

/*export const product = [
    {id: 1 , name: "Collar de oro Atenas" , material: "Oro", tipo: "24K", price: 90000, image: "../images/atenas.jpg"},
    {id: 2 , name: "Collar de oro Cartago" , material: "Oro", tipo: "18K", price: 80000, image: "../images/cartago.jpg"},
    {id: 3 , name: "Collar de oro Tánger" , material: "Oro", tipo: "14K", price: 70000, image: "../images/tanger.jpg"},
    {id: 4 , name: "Anillo de oro Tenochtitlan" , material: "Oro", tipo: "24K", price: 60000, image: "../images/tenochtitlan.jpg"},
    {id: 5 , name: "Anillo de oro Tebas" , material: "Oro", tipo: "18K", price: 50000, image: "../images/tebas.jpg"},
];

JSON.parse(localStorage.getItem("products")) || localStorage.setItem("products", JSON.stringify(product))*/