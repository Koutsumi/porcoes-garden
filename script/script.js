var pedidoItem = ["Pedido"];
var prices = [];
var pedidoQuantida = [];

var valor = document.querySelector(".quantidade");

const valorTotalPagar = [];
const meusItens = [];
const meusPrices = [];
const meusQuant = [];

function addQuantidade(input) {
  if (input.value > 0) {
    input.classList.add("add");
  } else if (input.value == 0) {
    input.classList.remove("add");
  }

  // * Para caso o pedido seja refeito a array não guarde info anteriores
  valorTotalPagar.length = 0;
  meusItens.length = 0;
  meusPrices.length = 0;
  meusQuant.length = 0;

  for (let i = 0; i < 10; i++) {
    if ($(".quantidade").is(".add")) {
      var ItensAdd = document.getElementsByTagName("input")[i];
      var nomeItem = ItensAdd.name;
      var quantItem = ItensAdd.value;

      var priceAdd = ItensAdd.getAttribute("preco");

      if (quantItem > 0) {
        meusItens.push(nomeItem);
        meusQuant.push(quantItem);
        meusPrices.push(priceAdd);
        valorTotalPagar.push(quantItem * priceAdd);
      }
    }
  }
}

function calcSoma(valorTotalPagar) {
  pagaTotal = 0;
  for (let z = 0; z < valorTotalPagar.length; z++) {
    pagaTotal += valorTotalPagar[z];
  }

  return pagaTotal.toFixed(2);
}

let item;
let itens;
let quantidade;
let valorItem;

const cidadeEntrega = document.getElementById("cidade");
const bairroEntrega = document.getElementById("bairro");
const enderecoEntrega = document.querySelector(".adress #rua");
const numeroEntrega = document.querySelector(".adress #num");
const complementoEntrega = document.getElementById("complemento");
const observacaoEntrega = document.getElementById("obvervacao");
const pagamentoEntrega = document.getElementById("formaDePagamento");
const trocoEntrega = document.getElementById("troco");

$(".checarPedido").click(function () {
  let imprimirTotal = document.getElementById("valorPagar");
  imprimirTotal.innerHTML = `<h2> SUBTOTAL R$${calcSoma(valorTotalPagar)}</h2>`;
  let imprimirEndereco = document.getElementById("localEntrega");
  imprimirEndereco.innerHTML = `<p>Local de entrega: ${enderecoEntrega.value}, ${numeroEntrega.value}  - ${complementoEntrega.value} -  ${bairroEntrega.value}/${cidadeEntrega.value}</p>`;
  let imprimirObservacao = document.getElementById("observacaoPedido");
  imprimirObservacao.innerHTML = `Observações: ${observacaoEntrega.value}`;
  let imprimirFormaDePagamento = document.querySelector("#formaPagamento");
  imprimirFormaDePagamento.innerHTML = `Forma de Pagamento: ${formaDePagamento.value}`;
  let imprimirTroco = document.querySelector("#trocoPagamento");
  imprimirTroco.innerHTML = `Troco para: R$${troco.value}`;
  let tabelaTextArea = document.querySelector("#itensSelecionados");
  tabelaTextArea.innerHTML = `<table>  <tr>
    <th>Produto</th>
    <th>Quantidade</th>
    <th>Valor</th>
    </tr> </table> <textArea></textArea>`;

  let tabelaId = document.querySelector("table");
  let textAreaId = document.querySelector("textarea");
  textAreaId.id = "pedidolista";
  tabelaId.id = "lista";
  for (let b = 0; b < meusItens.length; b++) {
    item = document.createElement("tr");
    item.classList.add("remover");
    itens = document.createElement("td");
    itens.classList.add("remover");
    quantidade = document.createElement("td");
    quantidade.classList.add("remover");
    valorItem = document.createElement("td");
    valorItem.classList.add("remover");
    itens.appendChild(document.createTextNode(meusItens[b]));
    quantidade.appendChild(document.createTextNode(meusQuant[b]));
    valorItem.appendChild(
      document.createTextNode(`R$${valorTotalPagar[b].toFixed(2)}`)
    );
    textAreaId.appendChild(
      document.createTextNode(
        `${meusItens[b]} ${meusQuant[b]} R$${valorTotalPagar[b]} %0D `
      )
    );
    tabelaId.appendChild(item);
    tabelaId.appendChild(itens);
    tabelaId.appendChild(quantidade);
    tabelaId.appendChild(valorItem);
  }
  textAreaId.appendChild(
    document.createTextNode(
      `Local de entrega: ${enderecoEntrega.value}, ${numeroEntrega.value}  - ${complementoEntrega.value} -  ${bairroEntrega.value}/${cidadeEntrega.value} %0D`
    )
  );

  textAreaId.appendChild(
    document.createTextNode(`Observações: ${observacaoEntrega.value} %0D`)
  );

  textAreaId.appendChild(
    document.createTextNode(`Forma de Pagamento: ${formaDePagamento.value} %0D`)
  );

  textAreaId.appendChild(
    document.createTextNode(`Troco para: R$${troco.value} %0D`)
  );

  textAreaId.appendChild(
    document.createTextNode(`SUBTOTAL R$${calcSoma(valorTotalPagar)} %0D`)
  );
});

function zerar() {
  let removerTextArea = document.querySelector("#pedidolista");
  let remover = document.querySelector("#lista");
  removerTextArea.remove();
  remover.remove();
}

// ! POP UP

const popUp = document.querySelector('.functionAbre')
    popUp.addEventListener('click', myFunction)

    const popUpClose = document.querySelector('.closePopUp')
    popUpClose.addEventListener('click', myFunction)

    function myFunction() {
      console.log('teste')
        var x = document.getElementById("myLinks");
        
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }

    }