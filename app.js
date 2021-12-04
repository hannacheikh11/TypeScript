class Serie {
    constructor(titulo, creador, numeroTemporadas, entregado, genero) {
        if (titulo == undefined) {
            this._titulo = "";
        }
        else {
            this._titulo = titulo;
        }
        if (creador == undefined) {
            this._creador = "";
        }
        else {
            this._creador = creador;
        }
        if (numeroTemporadas == undefined) {
            this._numeroTemporadas = 3;
        }
        else {
            this._numeroTemporadas = numeroTemporadas;
        }
        if (entregado == undefined) {
            this.entregado = false;
        }
        else {
            this.entregado = entregado;
        }
        if (genero == undefined) {
            this._genero = "";
        }
        else {
            this._genero = genero;
        }
    }
    get titulo() {
        if (this._titulo) {
            return this._titulo;
        }
        else {
            return "";
        }
    }
    set titulo(t) {
        this._titulo = t;
    }
    get creador() {
        if (this._creador) {
            return this._creador;
        }
        else {
            return "";
        }
    }
    set creador(c) {
        this._creador = c;
    }
    get numeroTemporadas() {
        if (this._numeroTemporadas) {
            return this._numeroTemporadas;
        }
        else {
            return 3;
        }
    }
    set numeroTemporadas(nt) {
        this._numeroTemporadas = nt;
    }
    get genero() {
        if (this._genero) {
            return this._genero;
        }
        else {
            return "";
        }
    }
    set genero(g) {
        this._genero = g;
    }
    toString() {
        console.log("titulo: " + this._titulo + " creador: " + this._creador + " número de temporadas: " + this._numeroTemporadas + " género: " + this._genero);
    }
}
let serie = new Serie("Jupiter's Legacy", "juan", 2, true, "cómic");
console.log(serie);
