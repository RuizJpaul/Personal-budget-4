function Movimiento(nombre, tipo, monto, descripcion){
        this.nombre = nombre;
        this.tipo = tipo;
        this.monto = monto;
        this.descripcion = descripcion;
}

Movimiento.prototype.desplegarInfo = function(){
    console.log(`Nombre: ${this.nombre}\tTipo: ${this.tipo}\tMonto: ${this.monto}`);
}

import { verificarNumero } from "./funciones.js";
import { verificarTexto } from "./funciones.js";
import { verificarTipo } from "./funciones.js";
import { modificar } from "./funciones.js";
import { eliminar } from "./funciones.js";

registrar();
elegirProceso();

function registrar(){
    let ans = "si";
    while(ans == "si"){
        nombreMov = prompt("Nombre del movimiento");
        tipo = prompt("Tipo");
        monto = prompt("Monto");
        descripcion = prompt("Descripción");
        if(verificarTexto(nombreMov) && verificarTipo(tipo.toLowerCase()) && verificarNumero(monto) && verificarTexto(descripcion)){
            const movimiento = new Movimiento(nombreMov,tipo.toLowerCase(),monto,descripcion); 
            movimientos.push(movimiento);
        }
        else{
            alert("Ingrese datos correctos");
            continue
        }
        ans= prompt("¿Desea agregar otro movimiento?").toLowerCase();
    }
}


function elegirProceso(){
    let ans = "Si"
    while(ans.toLowerCase()=="si"){
        let opcion = prompt("0 --> Movimientos registrados\n1 --> Egresos mayores a $100\n2 --> Promedio ingresos\n3 --> Promedio egresos\n4 --> Buscar movimientos\n5 --> Modificar movimiento\n6 --> Eliminar movimiento\n7 --> Salir");
        if(verificarNumero(opcion) && opcion>=0 && opcion<=7){
            if(opcion==0){
                for(let i=0; i<movimientos.length; i++){
                    // console.log(`Movimiento ${i+1}: ${movimientos[i].nombre}`);
                    movimientos[i].desplegarInfo();
                }
            }
            else if(opcion==1){
                console.log("Egresos mayores a $100");
                let listaEgresos = movimientos.filter((item) => item.monto>=100 && item.tipo=="egreso");
                for(let i=0; i<listaEgresos.length; i++){
                    let m = listaEgresos[i];
                    console.log(`Movimiento${i+1}: Nombre:${m.nombre}\tTipo:${m.tipo}\tMonto:${m.monto}`);
                }
            }
            else if(opcion==2){
                let listaIngresosMonto = movimientos.filter((item) => item.tipo=="ingreso");
                let resultado = listaIngresosMonto.reduce((acc, element) => {
                    return acc + Number(element.monto);
                }, 0);
                console.log(`Promedio ingresos --> ${resultado/listaIngresosMonto.length}`);
            }
            else if(opcion==3){
                let listaEgresosMonto = movimientos.filter((item) => item.tipo=="egreso");
                let resultado = listaEgresosMonto.reduce((acc, element) => {
                    return acc + Number(element.monto);
                }, 0);
                console.log(`Promedio ingresos --> ${resultado/listaEgresosMonto.length}`);
            }
            else if(opcion==4){
                let nombres = movimientos.map((item) => {
                    return item.nombre;
                });
                let nombreBuscar = prompt(`Ingrese el nombre a buscar\nOpciones:\n${nombres}`); 
                let respuesta;
                if(verificarTexto(nombreBuscar)){
                    respuesta = movimientos.find((item) => item.nombre.toLowerCase()==nombreBuscar.toLowerCase());
                }
                console.log(respuesta);
            }
            else if(opcion==5){
                let nombres = movimientos.map((item) => {
                    return item.nombre;
                });
                let respuesta = prompt(`Ingrese el nombre del movimiento a modificar\nOpciones:\n${nombres}`); 
                modificar(respuesta, movimientos)
            }
            else if(opcion==6){
                let nombres = movimientos.map((item) => {
                    return item.nombre;
                });
                let nombreEliminar= prompt(`Ingrese el nombre del movimiento a eliminar\nOpciones:\n${nombres}`);
                eliminar(nombreEliminar, movimientos);
            }
            else if(opcion==7){
                ans="No"
            }
        }
        else{
            alert("Ingreses una opcion correcta");
            continue;
        }
    }
}
