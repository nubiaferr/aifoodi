let preco = 32.60;

//Botões de incremento
function incrementValue()
{   
    let value = document.getElementById('number').value;
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}

function decrementValue()
{   
    let value = document.getElementById('number').value;
    if (value > 0){
    value = isNaN(value) ? 0 : value;
    value--;
    
    document.getElementById('number').value = value;
    }
}

/*
Testes de query selector

let box = document.querySelector('#box-3');
box.
console.log(box);

let total = window.document.getElementsByClassName('total'); //pega
value = 3;
total.innerHTML = `Total: R$ ${Number(preco*value).toFixed(2)}`; //altera mas nao aplica
console.log(total);
*/

/* Lógica de fluxo 

function showProduct(n = 1){
    let box = document.querySelector('.box-3');
    box.style.display = 'block';
    return (box*n);
}


function carrinho(){
    if (value > 0){
        value = isNaN(value) ? 0 : value;
        screen3 = document.querySelector('#screen-3');
        screen3.appendChild(showProduct(1));

        let total = window.document.getElementsByClassName('total');
        console.log(total + "teste");
        total.innerText = `Total: R$ ${Number(preco*value).toFixed(2)}`;
    }
}


let total = window.document.getElementsByClassName('total');
console.log(this.total + "teste");

carrinho();

function carrinhoRoute(){
    rota = document.querySelector('.link-carrinho');

    if (value > 0){
        rota.setAttribute("href", "page3.html");
        carrinho();
    } else {
        rota.setAttribute("href", "page4.html");
    }
}

*/

