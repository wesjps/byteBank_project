let saldo = 3800;

type Transacao = {
	tipoTransacao: TipoTransacao;
	valor: number;
	data: Date;
};

enum TipoTransacao {
	DEPOSITO = "Depósito",
	TRANSFERENCIA = "Transferência",
	PAGAMENTO_BOLETO = "Pagamento de Boleto",
}

const elementoSaldo = document.querySelector(
	".saldo-valor .valor"
) as HTMLElement;

if (elementoSaldo != null) {
	elementoSaldo.textContent = saldo.toString();
}

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

	if (tipoTransacao === "Depósito") {
		saldo += valor;
	} else if (
		tipoTransacao === "Transferência" ||
		tipoTransacao === "Pagamento de Boleto"
	) {
		saldo -= valor;
	} else {
		alert("tipo de transação inválido");
		return;
	}

	elementoSaldo.textContent = saldo.toString();

	const novaTransacao: Transacao = {
		tipoTransacao: TipoTransacao.PAGAMENTO_BOLETO,
		valor: valor,
		data: data,
	};

	console.log(novaTransacao);
	elementoFormulario.reset();
});
