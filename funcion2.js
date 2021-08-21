
function obtenerombre (codigoNave){
    let cajones = codigoNave.split(":");

    return cajones[1];
}

console.log(obtenerombre("QSSRR:JUAN"))

