// ! POP-UP

const popUp = document.querySelector(".functionAbre");
popUp.addEventListener("click", myFunction);

const popUpClose = document.querySelector(".closePopUp");
popUpClose.addEventListener("click", myFunction);

function myFunction() {
  var x = document.getElementById("myLinks");

  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function addItem(input) {
  if (input.value >= 1) {
    input.classList.add("add");
  } else if (this.value <= 0) {
    input.classList.remove("add");
  }
}

let cartItem = [];
let cartQuant = [];
let cartPrice = [];
let cartSubTotal = [];
let total = 0;
let textArea = document.getElementById('textArea');

function resetCart() {
  cartItem.length = 0;
  cartQuant.length = 0;
  cartPrice.length = 0;
}

function printTotal(){
  let fixedPrice = total.toFixed(2);
  document.getElementById('fullPrice').innerHTML = fixedPrice.replace('.', ',');

  textArea.appendChild(
    document.createTextNode(`Total: R$${fixedPrice} %0D`)
  )
}


function resetPrintCart (){
  let itemId = document.getElementById('itemList');
  let itemChild = itemId.querySelectorAll('p');

  let quantId = document.getElementById('quantList');
  let quantChild = quantId.querySelectorAll('p');

  let subTotalId = document.getElementById('subTotalList');
  let subTotalChild = subTotalId.querySelectorAll('p');
  for(let i = 0; i < itemChild.length; i++){
    itemChild[i].remove();
    quantChild[i].remove();
    subTotalChild[i].remove();
  }
  console.log('teste')
}

let changeDelivery = document.getElementById('changeDelivery');
let closeDelivery = document.getElementById('closeDelivery');

changeDelivery.addEventListener('click', () =>{
  resetPrintCart ()
})

closeDelivery.addEventListener('click', () =>{
  resetPrintCart ()
})


function printCart(){
  
  for(let i = 0; i < cartItem.length; i++){
    // * Itens List
    let tagElement = document.createElement('p');
    let textContent = document.createTextNode(`${cartItem[i]}`)
    tagElement.appendChild(textContent);
    document.getElementById('itemList').appendChild(tagElement);

    // * Quant List
    tagElement = document.createElement('p');
    textContent = document.createTextNode(`${cartQuant[i]}`)
    tagElement.appendChild(textContent);
    document.getElementById('quantList').appendChild(tagElement);

    // * subTotal List
    tagElement = document.createElement('p');
    textContent = document.createTextNode(`R$${cartSubTotal[i]}`)
    tagElement.appendChild(textContent);
    document.getElementById('subTotalList').appendChild(tagElement);

    textArea.appendChild(
      document.createTextNode(`${cartItem[i]} ${cartQuant[i]} R$${cartSubTotal[i]} %0D`)
    )
  }
}

function printAdress(){
  let printClientName = document.getElementById('nome').value;
  let printClientTable = document.getElementById('mesa').value;
  let printPayment = document.getElementById('formaDePagamento').value;
  let printChange = document.getElementById('troco').value;

  document.getElementById('nomeCliente').innerHTML = printClientName;
  document.getElementById('mesaCliente').innerHTML = printClientTable;
  document.getElementById('formaPagamento').innerHTML = printPayment;
  document.getElementById('trocoPagamento').innerHTML = printChange;

  textArea.appendChild(
    document.createTextNode(`Nome: ${printClientName} %0D`)
  )

  textArea.appendChild(
    document.createTextNode(`Mesa: ${printClientTable} %0D`)
  )

  textArea.appendChild(
    document.createTextNode(`Forma de pagamento: ${printPayment} %0D`)
  )

  textArea.appendChild(
    document.createTextNode(`Troco para: ${printChange} %0D`)
  )
}

function calcTotal() {
    // * reset total
    total = 0;
    // * calc total and create cartSubTotal
    for(let i = 0; i < cartItem.length; i++){
        console.log('teste')
        let subTotal = cartQuant[i] * cartPrice[i];
        let fixSubtotal = subTotal.toFixed(2);
        let subTotalFixed = fixSubtotal.replace('.', ',')

        cartSubTotal.push(subTotalFixed);
        total = subTotal + total;
    }
    // * print total on modal
    printTotal()
    printCart()
    printAdress()
      return total
}

const products = document.querySelector(".checarPedido");
products.addEventListener("click", () => {
  const selectProducts = document.querySelectorAll(".add");

  resetCart();

  selectProducts.forEach(($el) => {
    let nameItem = $el.name;
    let quantItem = $el.value;
    let priceItem = $el.getAttribute("preco");

    cartItem.push(nameItem);
    cartQuant.push(quantItem);
    cartPrice.push(priceItem);
  });
  calcTotal();
});