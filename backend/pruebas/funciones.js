function saludar(nombre){
    console.log("Hola "+nombre);
    
}
//saludar();
var saludar=nombre=>{
console.log("Hola "+nombre);

}
saludar("Pancho");

var saludo2=(nombre1,nombre2)=>{
    console.log("Hola " + nombre1 +" y "+nombre2);
}
saludo2("Pancho","Paco");

var saludo3=(nombre1, nombre2)=>{
    var s="Hola " +nombre1+ " y "+nombre2;
    return s;
}
console.log(saludo3("Hugo","Luis"));

var saludo4=(nombre1)=>"Hola "+nombre1;
console.log(saludo4("Bethoveen"));

var saludo5=function(){
    console.log("Hola con funcion anonima");
}
saludo5();

var saludo6=()=>{
    console.log("Estas en saludo 6");
}

var saludo7=(nombre="anonimo",s)=>{
    console.log("Hola "+nombre);
    s();
}
saludo7("Vivaldi",saludo6);


