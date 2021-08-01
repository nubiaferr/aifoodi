let preco = 32.60;
let carrinho = 0;

function incrementValue()
{  
    let value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;

    document.getElementById('number').value = value;
}

function decrementValue()
{   let value = parseInt(document.getElementById('number').value, 10);
    if (value > 0){
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById('number').value = value;
    }
}

//carrinho = preco*value;
