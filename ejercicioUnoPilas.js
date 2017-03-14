function Stack() {
var nombres=[];

this.push = function (nombre){
   nombres.push(nombre);

}
this.pop = function (){
 return  nombres.pop();

}
this.print = function (){
  console.log(nombres);
}
}
var nombre = new Stack();

nombre.push("sue");
nombre.push("mimi");
nombre.push("edith");
nombre.push("vale");
nombre.push("pari");

nombre.print();

var apellidos = new Stack();

apellidos.push("martinez");
apellidos.push("herrera");
apellidos.push("de leon ");
apellidos.push("frausto");
apellidos.push("jacobo");

apellidos.print()

var nombresTotales= [];
  for( var i = 0; i < 5; i++){
  nombresTotales.push(nombre.pop() + " "+ apellidos.pop());
  }
 console.log(nombresTotales);
