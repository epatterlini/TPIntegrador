var valor;
var suma = 0;
let precios = 0;
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
    window.alert(document.cookie);
    document.getElementById("precioTotal").value = "VALOR TOTAL $"+ document.cookie;;
}

function seleccion()
{
    if(suma != 0)
    {
        precios =  suma + parseInt(document.getElementById("precio").innerHTML);
        suma = precios;
        window.alert("El precio es "+precios);
        document.cookie = encodeURIComponent(precios); 
    }else
    {
        precios =  parseInt(document.getElementById("precio").innerHTML);
        suma = precios;
        elPrecio = precios;
        window.alert("El precio es "+precios);
        document.cookie = encodeURIComponent(precios);
    }
}



