
export function verificarNumero(numero){
    if(!isNaN(numero) && numero!==null && numero!==""){
        return true;
    }
    else{
        return false;
    }
}

export function verificarTexto(texto){
    if(texto!==null && isNaN(texto) && texto!==""){
        return true;
    }
    else{
        return false;
    }    
}

export function verificarTipo(texto){
    if(texto!==null && texto!==""){
        if(texto=="ingreso" || texto=="egreso"){
            return true;
        }
        else{
            return false;
        }
    }
    else{
        return false;
    }
}

export function modificar(texto, movimientos){
    let dato = prompt("Ingrese el dato que desea modificar [Nombre/Tipo/Monto/Descripcion]");
    for(let i=0; i<movimientos.length; i++){
        if(movimientos[i].nombre==texto){
            let nuevoDato = prompt("Ingrese el nuevo dato");
            if(dato.toLowerCase()=="nombre" && verificarTexto(nuevoDato)){
                movimientos[i].nombre = nuevoDato;
            }
            else if(dato.toLowerCase()=="tipo" && verificarTipo(nuevoDato)){
                movimientos[i].tipo = nuevoDato;
            }
            else if(dato.toLowerCase()=="monto" && verificarNumero(nuevoDato)){
                movimientos[i].monto = nuevoDato;
            }
            else if(dato.toLowerCase()=="descripcion" && verificarTexto(nuevoDato)){
                movimientos[i].descripcion = nuevoDato;
            }
            alert("Dato modificado");
            break;
        }
    }
}

export function eliminar(texto, movimientos){
    for(let i=0; i<movimientos.length; i++){
        if(movimientos[i].nombre==texto){
            movimientos.splice(i,1);
            break;
        }
    }
    alert("Movimiento eliminado");
}
