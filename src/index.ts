// try-catch
/*
    try {
        Código que puede fallar
    } catch(error){
        Qué hacer cuando ese código fallé
    } finally  {
        Código que se ejecuta siempre
    }
*/
function dividirNumeros(a: number, b: number) {
    try {
        if (b === 0) {
            throw new Error('No es posible dividir por 0')
        }
        return a / b
    } catch (error) {
        if (error instanceof Error) console.log('Error: ', error.message)
        return -1
    }
}
// console.log('Resultado de dividir números', dividirNumeros(6, 5))
// console.log('Resultado de dividir números', dividirNumeros(6, 0))

function obterValorPropiedad(objeto: any, propiedad: string) {
    if (!objeto.hasOwnProperty(propiedad)) {
        throw new Error(`La propiedad '${propiedad}' no existe en el objeto`)
    }
    return objeto[propiedad]
}
// Finally
try {
    const persona = { nombre: 'Pedro', edad: 30, colorCabello: 'Negro' }
    // console.log(obterValorPropiedad(persona, 'nombre'))
    // console.log(obterValorPropiedad(persona, 'edad'))
    // console.log(obterValorPropiedad(persona, 'colorCabello'))
} catch (error) {
    if (error instanceof Error) console.log('Error: ', error.message)
} finally {
    console.log('Se intentó acceder a todas las propiedades del objeto persona')
}

// Propagación de errores
function sumar(numeroUno: number, numeroDos: number) {
    return numeroUno + numeroDos
}

function restar(numeroUno: number, numeroDos: number) {
    return numeroUno - numeroDos
}

function dividir(numeroUno: number, numeroDos: number) {
    if (numeroDos === 0) throw new Error('No es posible dividir por 0')
    return numeroUno / numeroDos
}

function multiplicar(numeroUno: number, numeroDos: number) {
    if (numeroUno === 0 || numeroDos === 0) throw new Error('No es posible multiplicar por 0')
    return numeroUno * numeroDos
}

function calculadora(parametroUno: number, parametroDos: number, operacion: '+' | '-' | '/' | '*') {
    try {
        let resultado = 0
        switch (operacion) {
            case '+':
                resultado = sumar(parametroUno, parametroDos)
                break
            case '-':
                resultado = restar(parametroUno, parametroDos)
                break
            case '/':
                resultado = dividir(parametroUno, parametroDos)
                break
            case '*':
                resultado = multiplicar(parametroUno, parametroDos)
                break
            default:
                throw new Error('La operación que desea realizar no existe')
        }
        return resultado
    } catch (error) {
        if (error instanceof Error) console.log('Error: ', error.message)
    }
}

console.log(calculadora(5, 2, '+'))
console.log(calculadora(5, 2, '-'))
console.log(calculadora(5, 2, '*'))
console.log(calculadora(5, 2, '/'))
console.log(calculadora(0, 2, '*'))
console.log(calculadora(5, 0, '/'))