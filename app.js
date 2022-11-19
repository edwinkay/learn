const sumar1 = document.getElementById('suma1')
const sumar2 = document.getElementById('suma2')
const button = document.getElementById('boton')
const resultado = document.getElementById('res')

button.addEventListener('click', sumar)

function sumar(){
    // console.log(parseInt(sumar1.value) + parseInt(sumar2.value))

    sum1 = sumar1.value
    sum2 = sumar2.value

    // variable nueva llamada total
    let total
    total = parseInt(sum1) + parseInt(sum2)

    resultado.innerHTML = total
    
}


