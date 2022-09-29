
function inserir(valor){
    let aux;
    aux = document.getElementById('saldo').value;
    document.getElementById('saldo').value = aux + valor;
}


function corrige() {
    document.getElementById("saldo").value = "";  
}


function selecionarMaisUmProduto(){
    if (document.getElementById("qualProduto").value == ""){
        document.getElementById("qualProduto").value = 1;
    }else if (document.getElementById("qualProduto").value == "5"){
        alert("Não existem Produtos acima");
    } 
    else {
        document.getElementById("qualProduto").value = parseInt(document.getElementById("qualProduto").value) + 1;
    }
}


function selecionarMenosUmProduto(){
    if (document.getElementById("qualProduto").value == "1"){
        alert("Não existem Produtos abaixo");
    }else{
        document.getElementById("qualProduto").value = parseInt(document.getElementById("qualProduto").value) - 1;
    }
}


function adicionarDinheiro(){
    if(document.getElementById("saldoPessoa").innerHTML == ""){
        document.getElementById("saldoPessoa").innerHTML = document.getElementById("saldo").value;
    } else {
        let novoSaldo = parseInt(document.getElementById("saldoPessoa").innerHTML) +  parseInt(document.getElementById("saldo").value);
        document.getElementById("saldoPessoa").innerHTML = novoSaldo;
    } 
    document.getElementById("saldo").value = "";
    alert("Dinheiro adicionado com sucesso.");
   
}

function retirarDinheiro(){
    document.getElementById("saldoPessoa").innerHTML = "";
    alert("Dinheiro retirado com sucesso.");
}


function comprar(){

    switch (document.getElementById("qualProduto").value){
        case '1':
            document.getElementById("produtoQuant1").innerHTML = parseInt(document.getElementById("produtoQuant1").innerHTML) - 1;
            document.getElementById("saldoPessoa").innerHTML = parseInt(document.getElementById("saldoPessoa").innerHTML) - 6;
            alert("Compra Realizada.")
            if (parseInt(document.getElementById("produtoQuant1").innerHTML) == 0){
                alert("Produto Indisponivel");
            }
        break;
        case '2':
            document.getElementById("produtoQuant2").innerHTML = parseInt(document.getElementById("produtoQuant2").innerHTML) - 1;
            document.getElementById("saldoPessoa").innerHTML = parseInt(document.getElementById("saldoPessoa").innerHTML) - 5;
            alert("Compra Realizada.")
            if (parseInt(document.getElementById("produtoQuant1").innerHTML) == 0){
                alert("Produto Indisponivel");
            }
        break;
        case '3':
            document.getElementById("produtoQuant3").innerHTML = parseInt(document.getElementById("produtoQuant3").innerHTML) - 1;
            document.getElementById("saldoPessoa").innerHTML = parseInt(document.getElementById("saldoPessoa").innerHTML) - 4;
            alert("Compra Realizada.")
            if (parseInt(document.getElementById("produtoQuant1").innerHTML) == 0){
                alert("Produto Indisponivel");
            }
        break;
        case '4':
            document.getElementById("produtoQuant4").innerHTML = parseInt(document.getElementById("produtoQuant4").innerHTML) - 1;
            document.getElementById("saldoPessoa").innerHTML = parseInt(document.getElementById("saldoPessoa").innerHTML) - 3;
            alert("Compra Realizada.")
            if (parseInt(document.getElementById("produtoQuant1").innerHTML) == 0){
                alert("Produto Indisponivel");
            }
        break;
        case '5':
            document.getElementById("produtoQuant5").innerHTML = parseInt(document.getElementById("produtoQuant5").innerHTML) - 1;
            document.getElementById("saldoPessoa").innerHTML = parseInt(document.getElementById("saldoPessoa").innerHTML) - 8;
            alert("Compra Realizada.")
            if (parseInt(document.getElementById("produtoQuant1").innerHTML) == 0){
                alert("Produto Indisponivel");
            }
        break;
    }
}