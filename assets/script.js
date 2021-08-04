let preco = 32.60;
let value = parseInt(document.getElementById('number').value, 10);

function incrementValue()
{   
    let value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}

function decrementValue()
{   
    let value = parseInt(document.getElementById('number').value, 10);
    if (value > 0){
    value = isNaN(value) ? 0 : value;
    value--;
    
    document.getElementById('number').value = value;
    }
}

function showProduct(n = 1){
    let box = document.querySelector('.box-3');
    box.style.display = 'block';
    return (box*n);
}

function carrinho(){
    if (value > 0){
        screen3 = document.querySelector('#screen-3');
        screen3.appendChild(showProduct(value));

        total = document.querySelector('.total');
        total.innerText = `R$ ${Number(preco*value).toFixed(2)}`;
    }
}

function carrinhoRoute(){
    rota = document.querySelector('.link-carrinho');

    if (value > 0){
        rota.setAttribute("href", "page3.html");
        carrinho();
    } else {
        rota.setAttribute("href", "page4.html");
    }
}



/*
pagina 1 - clica e vai pra page 2
page 2 - o numero do value é o numero de boxes que aparecem na pagina 3
se o numero é > 0, vai pra pagina 3, senao, vai pra pagina 4
pagina 3 - numero de boxes = numero do value
valor final = value*preco
*/