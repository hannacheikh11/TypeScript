class Serie{
    private _titulo:string;
    private _numeroTemporadas:number;
    private entregado:boolean;
    private _genero:string;
    private _creador:string;

    constructor(titulo:string, creador:string,  numeroTemporadas?:number, entregado?:boolean, genero?:string){
        
        if(titulo == undefined){
            this._titulo = "";
        }else{
            this._titulo = titulo;
        }
       
        if(creador == undefined){
            this._creador = "";
        }else{
            this._creador = creador;
        }
       
        if(numeroTemporadas == undefined){
            this._numeroTemporadas = 3;
        }else{
            this._numeroTemporadas = numeroTemporadas;
        }

        if(entregado == undefined){
            this.entregado = false;
        }else{
            this.entregado = entregado;
        }

        if(genero == undefined){
            this._genero = "";
        }else{
            this._genero = genero;
        }
   
    }
    
    public get titulo():string{
        if(this._titulo){
            return this._titulo;
        }else{
            return "";
        }
    }

    public set titulo(t: string){
        this._titulo = t;
    }

    public get creador():string{
        if(this._creador){
            return this._creador;
        }else{
            return "";
        }
    }

    public set creador(c: string){
        this._creador = c;
    }

    public get numeroTemporadas():number{
        if(this._numeroTemporadas){
            return this._numeroTemporadas;
        }else{
            return 3;
        }
    }

    public set numeroTemporadas(nt: number){
        this._numeroTemporadas = nt;
    }

    public get genero():string{
        if(this._genero){
            return this._genero;
        }else{
            return "";
        }
    }

    public set genero(g:string){
        this._genero = g;
    }

    toString(){
        console.log("titulo: " + this._titulo + " creador: "+ this._creador+ " número de temporadas: " + this._numeroTemporadas + " género: " + this._genero);
    }

}

let serie = new Serie("Jupiter's Legacy", "juan", 2, true, "cómic");
console.log(serie);
