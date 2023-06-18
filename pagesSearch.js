let inputValue = document.querySelector('.form-control');//Seleccionamos el elemento de Entrada de texto.
let btn_search =  document.querySelector('.btn');//Seleccionamos el botón "Buscar" para darle acción luego.


btn_search.addEventListener("click", function(){
    let textValue = inputValue.value.toLowerCase();
    let arrayText = textValue.split(' ');

   if(textValue === ''){
    alert('No ingresó nada para buscar. Por favor ingrese el tema a buscar');
   } else if(arrayText.includes('scout') === true){
    window.open('scout.html');
   } else if(arrayText.includes('manada') === true){
    window.open('manada.html');
   } else if(arrayText.includes('caminante') === true){
    window.open('caminante.html');
   } else if(arrayText.includes('rover') === true){
    window.open('rover.html');
   } else if(arrayText.includes('galería') === true || arrayText.includes('fotos') === true || arrayText.includes('imágenes') === true){
    window.open('gallery.html');
   } else if(arrayText.includes('adultos') === true){
    window.open('adults.html');
   } else if(arrayText.includes('sobre') === true && arrayText.includes('nosotros') || arrayText.includes('contacto')){
    window.open('index.html');
   } else {
    alert('Lo sentimos. No existe aún esta sección a la que se refiere.');
   }
})