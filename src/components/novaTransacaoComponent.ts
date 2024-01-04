import { TipoTransacao } from "../types/TipoTransacao.js";
import { Transacao } from "../types/Transacao.js";
import { atualizarSaldo, getSaldo } from "./saldoComponent.js";

const elementoFormulario = document.querySelector(
	".block-nova-transacao form"
) as HTMLFormElement;
elementoFormulario.addEventListener("submit", function (event) {
	event.preventDefault();

	if (!elementoFormulario.checkValidity()) {
		alert("Por favor, preencha todos os campos da transação.");
	}

	const inputTipoTransacao = document.querySelector(
		"#tipoTransacao"
	) as HTMLSelectElement;
	const inputValor = document.querySelector("#valor") as HTMLInputElement;
	const inputData = document.querySelector("#data") as HTMLInputElement;

	let tipoTransacao: string = inputTipoTransacao.value;
	let valor: number = inputValor.valueAsNumber;
	let data: Date = new Date(inputData.value);

	let saldo = getSaldo();

	if (tipoTransacao === TipoTransacao.DEPOSITO) {
		saldo += valor;
	} else if (
		tipoTransacao === TipoTransacao.TRANSFERENCIA ||
		tipoTransacao === TipoTransacao.PAGAMENTO_BOLETO
	) {
		saldo -= valor;
	} else {
		alert("tipo de transação inválido");
		return;
	}

	atualizarSaldo(saldo);

	const novaTransacao: Transacao = {
		tipoTransacao: TipoTransacao.PAGAMENTO_BOLETO,
		valor: valor,
		data: data,
	};

	elementoFormulario.reset();
});
