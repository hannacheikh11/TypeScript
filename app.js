var Electrodomestico = /** @class */ (function () {
    function Electrodomestico(precioBase, peso, color, consumoEnergetio) {
        if (precioBase == undefined) {
            this._precioBase = 100;
        }
        else {
            this._precioBase = precioBase;
        }
        if (peso == undefined) {
            this._peso = 5;
        }
        else {
            this._peso = peso;
        }
        if (color == undefined) {
            this._color = "blanco";
        }
        else {
            this._color = color;
        }
        if (consumoEnergetio == undefined) {
            this._consumoEnergetico = "F";
        }
        else {
            this._consumoEnergetico = consumoEnergetio;
        }
    }
    Object.defineProperty(Electrodomestico.prototype, "precioBase", {
        get: function () {
            if (this._precioBase) {
                return this._precioBase;
            }
            else {
                return 100;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Electrodomestico.prototype, "peso", {
        get: function () {
            if (this._peso) {
                return this._peso;
            }
            else {
                return 5;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Electrodomestico.prototype, "color", {
        get: function () {
            if (this._color) {
                return this._color;
            }
            else {
                return "blanco";
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Electrodomestico.prototype, "consumoEnergetico", {
        get: function () {
            if (this._consumoEnergetico) {
                return this._consumoEnergetico;
            }
            else {
                return "F";
            }
        },
        enumerable: false,
        configurable: true
    });
    Electrodomestico.prototype.comprobarConsumoEnergetico = function (consumoEnergetico) {
        if (consumoEnergetico == 'A' || consumoEnergetico == 'B' || consumoEnergetico == 'C' || consumoEnergetico == 'D' || consumoEnergetico == 'E') {
            return 'Es correcto';
        }
        return 'F';
    };
    Electrodomestico.prototype.comprobarColor = function (color) {
        if (color == 'negro' || color == 'rojo' || color == 'azul' || color == 'gris') {
            return 'Es correcto';
        }
        return 'blanco';
    };
    Electrodomestico.prototype.precioFinal = function () {
    };
    return Electrodomestico;
}());
var electrodomestico = new Electrodomestico(100, 10, 'gris', 'A');
console.log(electrodomestico);
