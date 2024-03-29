const HOMBRE = 'H';
const MUJER = 'M';
class Persona {
    constructor(nombre, edad, sexo, dni, peso, altura) {
        this._nombre = nombre;
        this._edad = edad;
        this._sexo = sexo;
        this.dni = dni;
        if (peso == undefined) {
            this._peso = 0;
        }
        else {
            this._peso = peso;
        }
        if (altura == undefined) {
            this._altura = 0;
        }
        else {
            this._altura = altura;
        }
    }
    set nombre(n) {
        this._nombre = n;
    }
    set edad(e) {
        this._edad = e;
    }
    set peso(p) {
        this._peso = p;
    }
    set altura(a) {
        this._altura = a;
    }
    set sexo(s) {
        this._sexo = s;
    }
    calcularIMC(altura, peso) {
        let pesoIdeal = (peso / (altura * altura));
        const peso_bajo = 0;
        const peso_normal = -1;
        const sobrepeso = 1;
        let resultado = '';
        if (pesoIdeal < 20) {
            //return peso_normal;
            resultado = 'Peso normal: ' + peso_normal;
        }
        else if (pesoIdeal >= 20 && pesoIdeal <= 25) {
            // return peso_bajo;
            resultado = 'Peso bajo: ' + peso_bajo;
        }
        else if (pesoIdeal > 25) {
            //return sobrepeso;
            resultado = 'Sobrepeso: ' + sobrepeso;
        }
        return resultado;
    }
    esMayorDeEdad(edad) {
        if (edad >= 18) {
            return true;
        }
        return false;
    }
    comprobarSexo(sexo) {
        if (sexo == HOMBRE || sexo == MUJER) {
            return 'sexo válido';
        }
        else {
            return HOMBRE;
        }
    }
    generaDNI(dni) {
        var numero, letetra, letra;
        var expresion_regular_dni = /^[XYZ]?\d{5,8}[A-Z]$/;
        dni = dni.toUpperCase();
        if (expresion_regular_dni.test(dni) === true) {
            numero = dni.substr(0, dni.length - 1);
            numero = numero.replace('X', 0);
            numero = numero.replace('Y', 1);
            numero = numero.replace('Z', 2);
            letetra = dni.substr(dni.length - 1, 1);
            numero = numero % 23;
            letra = 'TRWAGMYFPDXBNJZSQVHLCKET';
            letra = letra.substring(numero, numero + 1);
            if (letra != letetra) {
                //alert('Dni erroneo, la letra del NIF no se corresponde');
                return false;
            }
            else {
                //alert('Dni correcto');
                return true;
            }
        }
        else {
            //alert('Dni erroneo, formato no válido');
            return false;
        }
    }
    toString() {
        console.log("nombre: " + this._nombre + " edad: " + this._edad + " sexo: " + this._sexo + " dni: " + this.dni + " peso: " + this._peso + " altura: " + this._altura);
    }
}
let nombre = prompt('Introduce tu nombre');
let edad = prompt('Introduce tu edad');
let sexo = prompt('Introduce tu sexo');
let peso = prompt('Introduce tu peso');
let altura = prompt('Introduce tu altura');
let dni = prompt('Introduce tu dni');
let persona = new Persona(nombre, parseInt(edad), sexo, dni, parseInt(peso), parseFloat(altura));
console.log(persona);
console.log("IMC: " + persona.calcularIMC(parseFloat(altura), parseInt(peso)));
console.log("Edad: " + persona.esMayorDeEdad(parseInt(edad)));
console.log("Sexo: " + persona.comprobarSexo(sexo));
console.log("Sexo: " + persona.generaDNI(dni));
persona.toString();
//55409140R
let persona2 = new Persona(nombre, parseInt(edad), sexo, "777777e");
console.log("IMC persona2: " + persona2.calcularIMC(persona2.altura, persona2.peso));
let persona3 = new Persona(nombre, parseInt(edad), sexo);
persona3.peso = 45;
persona3.altura = 1.65;
console.log("IMC persona3: " + persona3.calcularIMC(persona3.altura, persona3.peso));
