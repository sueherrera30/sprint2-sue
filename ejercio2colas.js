function Queue() {
    var nombres = [];

    this.add = add;
    this.remove = remove;
    this.print = print;

    function add(nombre) {
       nombres.push(nombre);
   }

   function remove() {
       return nombres.shift();
   }
  function print(){
    console.log(nombres);
  }
}
var nombre = new Queue();
nombre.add("sue");
nombre.add("lucero ");
nombre.add("jaime ");
nombre.add("mario ");
nombre.add("emmanuel ");

nombre.print();

var apellido = new Queue();
apellido.add("Martinez");
apellido.add("Herrera");
apellido.add("Jacobo");
apellido.add("Frausto");
apellido.add("Navarro");

apellido.print();

var completo= [];
var i = 0;
while(i < 5){
  completo.push(nombre.remove() + " " + apellido.remove());
  i++;
}
 console.log(completo);
