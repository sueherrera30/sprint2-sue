var nombres=[];

function Stack() {
  var almacen = [];

this.push = function (element){
   almacen.push(element);

}
this.pop = function (){
 return  almacen.pop();

}
this.print = function (){
  console.log(almacen.toString());
}
 this.size = function () {
   return almacen.length;
 }
}

var nombre = new Stack();

nombre.push("sue ");
nombre.push("mimi ");
nombre.push("edith ");
nombre.push("vale ");
nombre.push("pari ");

nombre.print();

var apellidos = new Stack();

apellidos.push("martinez");
apellidos.push("herrera");
apellidos.push("de leon ");
apellidos.push("frausto");
apellidos.push("jacobo");

apellidos.print()


var tamano = nombre.size();
  for( var i = 0; i < tamano; i++){
  nombres.push(nombre.pop() + " "+ apellidos.pop());
  }
 document.write(nombres);
