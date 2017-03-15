var cantidad = parseInt(prompt("¿cuántos usuarios son?"));
var nombreCompleto =[];

for(var i= 0;i < cantidad;i++){
var nombre = prompt("Ingresa el nombre");
var apellido = prompt("Ingresa el apellido");
// var persona = {
//     nombre: nombre,
//     apellido: apellido
// };
nombreCompleto.push(nombre + " " + apellido);
}
// console.log(nombreCompleto);


function Cola (){
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.empty = empty;
  this.print = print;
}

function enqueue(element){
  this.dataStore.push(element);
}
function dequeue(){
  return this.dataStore.shift();
}
// function empty(){
//   return this.dataStore.length == 0;
// }
function print(){
    console.log(nombres);
  }
this.size = function () {
   return almacen.length;
 }


var cola = new Cola();
cola.push(nombreCompleto)
  cola.print();

var tamano = nombre.size();
  for( var i = 0; i < tamano; i++){
  nombreCompleto.push(cola.shift());
  }
 document.write(nombresCompleto);
