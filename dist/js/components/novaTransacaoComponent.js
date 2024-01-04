import { TipoTransacao } from "../types/TipoTransacao.js";
import { atualizarSaldo, getSaldo } from "./saldoComponent.js";
const elementoFormulario = document.querySelector(".block-nova-transacao form");
elementoFormulario.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!elementoFormulario.checkValidity()) {
        alert("Por favor, preencha todos os campos da transação.");
    }
    const inputTipoTransacao = document.querySelector("#tipoTransacao");
    const inputValor = document.querySelector("#valor");
    const inputData = document.querySelector("#data");
    let tipoTransacao = inputTipoTransacao.value;
    let valor = inputValor.valueAsNumber;
    let data = new Date(inputData.value);
    let saldo = getSaldo();
    if (tipoTransacao === TipoTransacao.DEPOSITO) {
        saldo += valor;
    }
    else if (tipoTransacao === TipoTransacao.TRANSFERENCIA ||
        tipoTransacao === TipoTransacao.PAGAMENTO_BOLETO) {
        saldo -= valor;
    }
    else {
        alert("tipo de transação inválido");
        return;
    }
    atualizarSaldo(saldo);
    const novaTransacao = {
        tipoTransacao: TipoTransacao.PAGAMENTO_BOLETO,
        valor: valor,
        data: data,
    };
    elementoFormulario.reset();
});
