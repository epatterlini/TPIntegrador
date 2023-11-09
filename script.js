var valor;
var suma = 0;
var precios = 0;
const valorCliente = 0.30;

function eje1()
{
    valor = document.getElementsByName("nombre")[0].value;
    window.alert("Gracias por tu comentario "+valor+", lo valoramos mucho!.");
    window.location.reload();
}

function Pedido()
{
    window.open("Pedido.html");
}

function load()
{
    let elPrecio = precios;
    document.getElementById("precioTotal").textContent = "VALOR TOTAL $"+ elPrecio;
}

function seleccion()
{
    if(suma != 0)
    {
        precios =  suma + parseInt(document.getElementById("precio").innerHTML);
        suma = precios;
        window.alert("El precio es "+precios);
    }else
    {
        precios =  parseInt(document.getElementById("precio").innerHTML);
        suma = precios;
        elPrecio = precios;
        window.alert("El precio es "+precios);
    }
}



