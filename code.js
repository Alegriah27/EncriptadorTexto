/*
    `La letra "e" es convertida para "enter"`
    `La letra "i" es convertida para "imes"`
    `La letra "a" es convertida para "ai"`
    `La letra "o" es convertida para "ober"`
    `La letra "u" es convertida para "ufat"`
*/

var encriptarBTN = document.querySelector('#encriptarBTN');
var descodificarBTN = document.querySelector('#descodificarBTN');





/*================================
    ENCRIPTAR TEXTO
=================================*/

function encriptarTEXTO()
{
    var textArea = document.getElementById('textArea').value;
    var textoEncriptado = "";

    for(var i = 0; i < textArea.length; i++)
    {
        if(textArea[i] == "a")
        {
            textoEncriptado = textoEncriptado + "ai"
        }
        else if(textArea[i] == "e")
        {
            textoEncriptado = textoEncriptado + "enter"
        }
        else if(textArea[i] == "i")
        {
            textoEncriptado = textoEncriptado + "imes"
        }
        else if(textArea[i] == "o")
        {
            textoEncriptado = textoEncriptado + "ober"
        }
        else if(textArea[i] == "u")
        {
            textoEncriptado = textoEncriptado + "ufat"
        }
        else
        {
            textoEncriptado = textoEncriptado + textArea[i]
        }
        
    }
    document.getElementById('resultado').innerHTML = "<h2 style=\"color:#e00\">"+ textoEncriptado +"</h2><button id=\"copyBTN\">Copiar texto</button>";
    
    var copyBTN = document.querySelector('#copyBTN');

        copyBTN.addEventListener('click',
        function clipboard()
        {
            textoEncriptado.setSelectionRange(0, 99999);
            navigator.clipboard.writeText(textoEncriptado);
            alert("Su texto " + textoEncriptado +" ha sido copiado: ");
        }
    
    );
}


/*================================
    DESENCRIPTAR TEXTO
=================================*/
function desencriptarTEXTO()
{
    var textArea = document.getElementById('textArea').value;
    var textoEncriptado = "";

    for(var i = 0; i < textArea.length; i++)
    {
        if(textArea[i] == "a")
        {
            textoEncriptado = textoEncriptado + "a"
            i = i+1;
        }
        else if(textArea[i] == "e")
        {
            textoEncriptado = textoEncriptado + "e"
            i = i+4;
        }
        else if(textArea[i] == "i")
        {
            textoEncriptado = textoEncriptado + "i"
            i = i+3;
        }
        else if(textArea[i] == "o")
        {
            textoEncriptado = textoEncriptado + "o"
            i = i+3;
        }
        else if(textArea[i] == "u")
        {
            textoEncriptado = textoEncriptado + "u"
            i = i+3;
        }
        else
        {
            textoEncriptado = textoEncriptado + textArea[i]
        }
        
    }
    document.getElementById('resultado').innerHTML = "<h2>"+ textoEncriptado +"</h2>" ;
    
}




/*================================
    activadores de funciones
=================================*/
encriptarBTN.onclick = encriptarTEXTO;
descodificarBTN.onclick = desencriptarTEXTO;



