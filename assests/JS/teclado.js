window.onload = function(){
    document.onkeydown = calcular;
}







function calcular(e){
    let tecla = e.which;
    let resultado = document.getElementById("resultado");

    
    function borrarContenido(){
    operando1 = 0;
    operando2 = 0;
    operacion = "";
    resultado.textContent = "";
    }

  function limpiar(){
        resultado.textContent = " ";
    } 

    if (tecla == 48 )
    {
        resultado.textContent += "0";
    }

    
    if (tecla == 49 )
    {
        resultado.textContent += "1"; 
    }

    
    if (tecla == 50 )
    {
        resultado.textContent += "2";
    }

    
    if (tecla == 51 )
    {
        resultado.textContent += "3";
    }

    
    if (tecla == 52 )
    {
        resultado.textContent += "4";
    }

    
    if (tecla == 53 )
    {
        resultado.textContent += "5";
    }

    
    if (tecla == 54 )
    {
        resultado.textContent += "6";
    }

    
    if (tecla == 55 )
    {
        resultado.textContent += "7";
    }

    
    if (tecla == 56 )
    {
        resultado.textContent += "8";
    }

    
    if (tecla == 57 )
    {
        resultado.textContent += "9";
    }

    
    if (tecla == 106 )
    {
        resultado.textContent += "x";
        operando1 = resultado.textContent;
        operacion = "x";
        limpiar();
    }


    
    if (tecla == 107 )
    {
        resultado.textContent += "+";
        operando1 = resultado.textContent;
        operacion = "+";
        limpiar();
    }


    
    if (tecla == 109 )
    {
        resultado.textContent += "-";
        operando1 = resultado.textContent;
        operacion = "-";
        limpiar();
    }

    
    if (tecla == 111 )
    {
        resultado.textContent += "/";
        operando1 = resultado.textContent;
        operacion = "/";
        limpiar();
    }

    
    if (tecla == 81 )
    {
        resultado.textContent += "*2";
        operando1 = resultado.textContent;
        operacion = "*2";
        limpiar();
    }

    if (tecla == 87 )
    {
        resultado.textContent += "√";
        operando1 = resultado.textContent;
        operacion = "√";
        limpiar();
    }


    
    if (tecla == 13 )
    {
        operando2 = resultado.textContent;
        result();
    }

        
    if (tecla == 8 )
    {
        borrarContenido();
    }
    
  
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
}
