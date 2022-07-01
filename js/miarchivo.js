class Proteccion {
    constructor (nombre, precio, stock){
        this.nombre= nombre;
        this.precio= parseInt(precio);
        this.stock= stock;
    }

    sinIva(){
        this.precio = this.precio - this.precio*0.21;
    }

    actualizandoStock(x){
        this.stock= this.stock - x;
    }
}

const arrayProtecciones = [];
arrayProtecciones.push(new Proteccion ("coderas", 5000, 20));
arrayProtecciones.push(new Proteccion ("canilleras", 3000, 15));
arrayProtecciones.push(new Proteccion ("rodilleras", 7000, 10)); 

console.log(arrayProtecciones);

function listaMenorMayor(){
    arrayProtecciones.sort((a,b)=> a.precio - b.precio);
    console.log(arrayProtecciones);
    listaOrdenada();
}

function listaMayorMenor(){
    arrayProtecciones.sort((a,b)=> b.precio - a.precio);
    console.log(arrayProtecciones);
    listaOrdenada();
}

function listaOrdenada(){
    let array = [];
    for (i=0; i<arrayProtecciones.length; i++){
        array.push(arrayProtecciones[i].nombre+" $"+arrayProtecciones[i].precio);
    }
    alert("Lista de precios:"+"\n"+array.join("\n"))
}

let total = 0;

function añadirAlCarrito() {
    let añadirProducto; 
    
    do {
        let producto = prompt ("¿Querés aprovechar nuestras ofertas en canilleras, coderas o rodilleras? Escribe tu producto seleccionado.")
        let cantidad = parseInt(prompt ("Elegí la cantidad que vas a comprar. Recordá que los productos vienen por par."));    
        let precio;

            switch (producto) {
                case arrayProtecciones[0].nombre:
                    arrayProtecciones[0].actualizandoStock(cantidad);
                    if (arrayProtecciones[0].stock <0 || isNaN(cantidad)){
                        alert("Nos quedamos sin stock. Pronto volveremos a tener este producto disponible")
                        arrayProtecciones[0].stock=arrayProtecciones[0].stock+cantidad;
                        precio = 0;
                        cantidad = 0;
                    }else{
                        precio= arrayProtecciones[0].precio;
                    }
                    break;
                case arrayProtecciones[1].nombre:
                    arrayProtecciones[1].actualizandoStock(cantidad);
                    if (arrayProtecciones[1].stock<0 || isNaN(cantidad)){
                        alert("Nos quedamos sin stock. Pronto volveremos a tener este producto disponible")
                        arrayProtecciones[1].stock=arrayProtecciones[1].stock+cantidad;
                        precio = 0;
                        cantidad = 0;
                    }else{
                        precio= arrayProtecciones[1].precio;
                    }
                    break;
                case arrayProtecciones[2].nombre:
                    arrayProtecciones[2].actualizandoStock(cantidad);
                    if (arrayProtecciones[2].stock<0 || isNaN(cantidad)){
                        alert("Nos quedamos sin stock. Pronto volveremos a tener este producto disponible")
                        arrayProtecciones[2].stock=arrayProtecciones[2].stock+cantidad;
                        precio = 0;
                        cantidad = 0;
                    }else{
                        precio= arrayProtecciones[2].precio;
                    }
                    break;
                default:
                    alert("Alguno de los datos ingresados es incorrecto");
                    precio= 0;
                    cantidad= 0;
            }
        total= total + precio*cantidad;
        añadirProducto = confirm("¿Querés agregar otro producto?");
    }while (añadirProducto);
}

function descuento (total) {
    if (total>=5000){
        total = total*0.70;
        alert("Tenés 30% de descuento")
    }
    return total;
}

function envioDomicilio (total) {
    let confirmacion = confirm("¿Querés envio a domicilio?");
    if (confirmacion && total>=5000){
        alert("Excelente!! Tenés envío gratis. El total de tu compra es $"+total);
    }else if (confirmacion && total<5000 && total!=0){
        total=total+900;
        alert("El envío cuesta $900. El total de tu compra es de $"+total);
    }else{
        alert("El total de tu compra es $"+total);
    }
    return total;
}

let cuotas;
function compraEnCuotas(){
    let confirmacion = confirm("¿Querés hacer tu compra en cuotas?");
    if(confirmacion) {
        cuotas=  parseInt(prompt("¿Elegí la cantidad de cuotas en las que vas a realizar tu compra"));
        if (cuotas==0){
            cuotas=1;
        }else if (isNaN(cuotas)){
            compraEnCuotas();
        }
    }else {
        cuotas= 1;
    }
    return cuotas;
}

function interesesCuotas (cuotas) {
    if (cuotas==1){
        return 0;
    }else{
        let tasa = 20.5+ cuotas*0.2;
        return tasa*cuotas;
    }
}

function montoTotal (total, cuotas, intereses) {
    total = (total+intereses)
    let valorCuota= total/cuotas;
    alert ("El total a pagar es $"+total+" en "+cuotas+" cuotas de $"+valorCuota);
}




function comprar () {
    if (confirm(" Te damos la bienvenida a Porteros Futsal. ¿Querés ver nuestra lista de protecciones desde las más baratas a las más caras?")){
        listaMenorMayor();
    }else{
        listaMayorMenor();
    }
    añadirAlCarrito();
    montoTotal (envioDomicilio(descuento(total)), compraEnCuotas(), interesesCuotas(cuotas));
    alert ("Gracias por visitar nuestra página. Volvé cuando quieras!!");
}

comprar();
