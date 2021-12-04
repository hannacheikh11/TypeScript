class Electrodomestico{
    private _precioBase:number;
    private _color:string;
    private _consumoEnergetico:string;
    private _peso:number;

    constructor(precioBase:number, peso:number, color?:string, consumoEnergetio?:string){
        
        if(precioBase == undefined){
            this._precioBase = 100;
        }else{
            this._precioBase = precioBase;
        }

        if(peso == undefined){
            this._peso = 5;
        }else{
            this._peso = peso;
        }

        if(color == undefined){
            this._color = "blanco";
        }else{
            this._color = color;
        }

        if(consumoEnergetio == undefined){
            this._consumoEnergetico = "F";
        }else{
            this._consumoEnergetico = consumoEnergetio;
        }

    }

    public get precioBase():number{
        if(this._precioBase){
            return this._precioBase;
        }else{
            return 100;
        }
    }

    public get peso():number{
        if(this._peso){
            return this._peso;
        }else{
            return 5;
        }
    }

    public get color():string{
        if(this._color){
            return this._color;
        }else{
            return "blanco";
        }
    }

    public get consumoEnergetico():string{
        if(this._consumoEnergetico){
            return this._consumoEnergetico;
        }else{
            return "F";
        }
    }

    comprobarConsumoEnergetico(consumoEnergetico:string):string{
        if(consumoEnergetico == 'A' || consumoEnergetico == 'B' || consumoEnergetico == 'C' || consumoEnergetico == 'D' || consumoEnergetico == 'E'){
            return 'Es correcto';
        }
        return 'F';
    }

    comprobarColor(color:string):string{
        if(color == 'negro' || color== 'rojo' || color== 'azul' || color== 'gris'){
            return 'Es correcto';
        }
        return 'blanco';
    }

    precioFinal(){

    }

}

let electrodomestico = new Electrodomestico(100, 10, 'gris', 'A');
console.log(electrodomestico);
