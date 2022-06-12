function whatsapp(){
    var pedido = document.getElementById("textArea").value;
    //var valor = document.getElementById("valorPagar").innerText;
    var a = document.getElementById("a");
    a.setAttribute("href", "https://api.whatsapp.com/send?phone=5511982608171&text=" + pedido +"%0D"+"%0D");
  
    console.log('teste')
  }
  
  const enviarPedido = document.querySelector('.enviarPedido')
  
  // enviarPedido.addEventListener('click', whatsapp)