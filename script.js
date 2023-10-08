var valor;

function eje1()
{
    valor = document.getElementsByName("nombre")[0].value;
    window.alert("Gracias por tu comentario "+valor+", lo valoramos mucho!.");
    window.location.reload();

}

