// 1. DECLARAÇÃO DE VARIAVEIS 



//2. ATRIBUIÇÃO DE VALORES (ENTRADA)
function contraValores () {
    const valores  = [];
    let valor
    
    do{
    valor = prompt("Informe o valor");
valores.push(valor);
}
while(valor !=0);

return valores;
}


//3. CALCULOS E VALIDAÇÕES (PROCESSAMENTO)

alert(` Os valores são ${contraValores()}`);
