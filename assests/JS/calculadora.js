

let operando1;
let operando2;
let operacion;



function calculo(){
    
    let resultado = document.getElementById("resultado");
    let reset = document.getElementById("reset");
    let suma = document.getElementById("suma");
    let resta = document.getElementById("resta");
    let elevado = document.getElementById("elevado");
    let raiz = document.getElementById("raiz");
    let multiplicacion = document.getElementById("multiplicacion");
    let division = document.getElementById("division");
    let igual = document.getElementById("igual");
    let uno = document.getElementById("uno");
    let dos = document.getElementById("dos");
    let tres = document.getElementById("tres");
    let cuatro = document.getElementById("cuatro");
    let cinco = document.getElementById("cinco");
    let seis = document.getElementById("seis");
    let siete = document.getElementById("siete");
    let ocho = document.getElementById("ocho");
    let nueve = document.getElementById("nueve");
    let cero = document.getElementById("cero");

    punto.addEventListener("mousedown", function(){
        resultado.textContent += ".";
    });

    uno.addEventListener("mousedown", function(){
        resultado.textContent += "1";
    });

    dos.addEventListener("mousedown", function(){
        resultado.textContent += "2";
    });


    tres.addEventListener("mousedown", function(){
        resultado.textContent += "3";
    });


    cuatro.addEventListener("mousedown", function(){
        resultado.textContent += "4";
    });


    cinco.addEventListener("mousedown", function(){
        resultado.textContent += "5";
    });


    seis.addEventListener("mousedown", function(){
        resultado.textContent += "6";
    });

    siete.addEventListener("mousedown", function(){
        resultado.textContent += "7";
    });


    ocho.addEventListener("mousedown", function(){
        resultado.textContent += "8";
    });


    nueve.addEventListener("mousedown", function(){
        resultado.textContent += "9";
    });


    cero.addEventListener("mousedown", function(){
        resultado.textContent += "0";
    });



    function limpiar(){
        resultado.textContent = "";
    }

  

   

    raiz.addEventListener("mousedown", function(){
        operando1 = resultado.textContent;
        operacion = "√"; 
        resultado.textContent = "√"; 
    });
    
    
    elevado.addEventListener("mousedown", function(){
        operando1 = resultado.textContent;
        operacion = "*2";  
        limpiar();
    });


    suma.addEventListener("mousedown", function(){
        operando1 = resultado.textContent;
        operacion = "+";
        limpiar();
    });
    
    resta.addEventListener("mousedown", function(){
        operando1 = resultado.textContent;
        operacion = "-";
        limpiar();
    });

    multiplicacion.addEventListener("mousedown", function(){
        operando1 = resultado.textContent;
        operacion = "x";
        limpiar();
    });

    division.addEventListener("mousedown", function(){
        operando1 = resultado.textContent;
        operacion = "/";
        limpiar();
    });
    



function result(){
    let contenido = 0;

    if (operacion == "/")
    {
        contenido = parseFloat(operando1) / parseFloat(operando2);
    }

    if (operacion == "*2")
    {
        contenido = parseFloat(operando1) * parseFloat(operando1);
    }

    if (operacion == "√")
    {
        contenido = Math.sqrt(parseFloat(operando1));
    }

    if (operacion == "+")
    {
        contenido = parseFloat(operando1) + parseFloat(operando2);
    }

    if (operacion == "-")
    {
        contenido = parseFloat(operando1) - parseFloat(operando2);
    }

    if (operacion == "x")
    {
        contenido = parseFloat(operando1) * parseFloat(operando2);
    }

    
    borrarContenido();
    resultado.textContent = contenido;
}

    igual.addEventListener("mousedown", function(){
    operando2 = resultado.textContent;
    result();
    });





    function borrarContenido(){
    operando1 = 0;
    operando2 = 0;
    operacion = "";
    resultado.textContent = "";
    }

    reset.addEventListener("mousedown", function(){
        borrarContenido();
    });

}
calculo();