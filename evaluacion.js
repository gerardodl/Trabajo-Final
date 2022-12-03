//Utilizamos var para declarar una variable como en este caso lo seria nombre, apellido, edad y peso. 
//En este caso despues de var se encuentra el nombre de un objeto llamado Gerardo el cual guardara todas sus variables.
var Gerardo = {
    nombre: 'Gerardo',
    apellido: "Diaz",
    edad: 17,
    peso: 58.25
}
//Aqui en imprimirReto1 saldran los daros del objeto en console.
function imprimirReto1(persona) {
   //Aqui salgran los datos del objetos junto con su peso al iniciar el año.
console.log(`${persona.nombre} ${persona.apellido} tiene ${persona.edad} años y al iniciar el año pesa ${persona.peso} kg.`);

}
imprimirReto1(Gerardo);
//Aqui en imprimirReto2 volveran a salir los datos del objeto en console junto el peso al final el año.
function imprimirReto2(persona) {
console.log(`${persona.nombre} ${persona.apellido} tiene ${persona.edad} años y al finalizar el año pesa: `);
    
//Utilizamos var para declarar el minimo y maximo de los numero al azar queremos que se generen.
var min = 52.4;
var max = 67.3;
//Estas son las multiplicaciones que hace el codigo para poder crear los numero al azar.
var x = (Math.random()*(max - min)+min).toFixed(2);
console.log(x);

    }
    
imprimirReto2(Gerardo);