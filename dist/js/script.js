var saldo = 3800;
var elementoSaldo = document.querySelector(".saldo-valor .valor");
if (elementoSaldo != null) {
    elementoSaldo.textContent = saldo.toString();
}
var elementoFormulario = document.querySelector(".block-nova-transacao form");
elementoFormulario.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!elementoFormulario.checkValidity()) {
        alert("Por favor, preencha todos os campos da transação.");
    }
    var inputTipoTransacao = document.querySelector("#tipoTransacao");
    var inputValor = document.querySelector("#valor");
    var inputData = document.querySelector("#data");
    var tipoTransacao = inputTipoTransacao.value;
    var valor = inputValor.valueAsNumber;
    var data = new Date(inputData.value);
    if (tipoTransacao === "Depósito") {
        saldo += valor;
    }
    else if (tipoTransacao === "Transferência" ||
        tipoTransacao === "Pagamento de Boleto") {
        saldo -= valor;
    }
    else {
        alert("tipo de transação inválido");
        return;
    }
    elementoSaldo.textContent = saldo.toString();
    var novaTransacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data,
    };
    console.log(novaTransacao);
    elementoFormulario.reset();
});
