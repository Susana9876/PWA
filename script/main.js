if('serviceWorker' in navigator){
    console.log('Puede usar los SW en su navegador');
    navigator.serviceWorker.register('./sw.js')
    .then(res => console.log('SW CARGADO CORRECTAMENTE', res))
    .catch(err => console.log('NO SE PUDO REGISTRAR', err));
}else{
    console.log('No puede usar el SW en su navegador');
}

//Configurar SW
// let swLocation = "sw.js";
// // "/beerjs/sw.js";

// if (navigator.serviceWorker) {
//   if (window.location.href.includes("localhost")) swLocation = "/sw.js"; //Varia según el host
//   navigator.serviceWorker.register(swLocation);
// }

// //Logic of web app
// console.log("Hello world!!");