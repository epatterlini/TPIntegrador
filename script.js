var valor;
var suma = 0;
let precios = 0;
let descuento;
var esCliente;
var selected;
const valorCliente = 0.30;

function eje1()
{
    valor = document.getElementsByName("nombre")[0].value;
    window.alert("Gracias por tu comentario "+ valor +", lo valoramos mucho!.");
    window.location.reload();
}

function Pedido()
{
    window.open("Pedido.html");
    setInterval("location.reload()",2000);
}

function load()
{
    document.getElementById("precioTotal").innerHTML = "VALOR TOTAL $"+ document.cookie;
    descuento = document.cookie - document.cookie * valorCliente;
    document.getElementById("valorDescuento").innerHTML = "TOTAL A PAGAR SIENDO CLIENTE: $"+ descuento;
}

function onClose()
{
    precios = 0;
    suma = 0;
    document.cookie = encodeURIComponent(precios);
    window.close();
}

function seleccion(precios)
{
    if(suma != 0)
    {
        precios =  suma + precios
        suma = precios;
        window.alert("El precio es $"+ precios);
        document.cookie = encodeURIComponent(precios);
    }else
    {
        suma = precios;
        window.alert("El precio es $"+ precios);
        document.cookie = encodeURIComponent(precios);
    }
}

function cliente()
{
    esCliente = document.getElementById("esCliente");
    selected = esCliente.options[esCliente.selectedIndex].text;
}

function compra()
{
    let nombreComprador = document.getElementsByName("nombre")[0].value;
    let apellidoComprador = document.getElementsByName("apellido")[0].value;
    let domicilio = document.getElementsByName("domicilio")[0].value;
    if(nombreComprador != "" && apellidoComprador != "" && domicilio != "")
    {
        if(selected == "Si")
        {
            window.alert("Gracias "+ nombreComprador + " " + apellidoComprador + " por su compra!\nEl pedido costará $" +
        descuento + " por ser nuestro cliente!.\nSe enviará a " + domicilio);
        }
        else
        {
            window.alert("Gracias "+ nombreComprador + " " + apellidoComprador + " por su compra!\nEl pedido costará $" +
            document.cookie + "\nSe enviará a " + domicilio);
        }
    }
    else
    {
        window.alert("Debe llenar los campos de Nombre, Apellido y Domicilio.");
    }
    
}



