class Persona1{
    private nombre:String="";
    private edad:number=0;
    private  DNI:String;
    private peso:number=0;
    private altura:number=0;
    
    
    //const Hombre = "H";
    //const Mujer = "M";
    private sexo:string="";
    constructor(nombre?:string, edad?:number,peso?:number,altura?:number,DNI?:string,sexo?:string){
       this.nombre=nombre;
       this.edad=edad;
       this.peso=peso;
       this.altura=altura;
       this.DNI=DNI;
       this.sexo=sexo;

    }
}