import { formatarMoeda, formatarData } from "../utils/formatadores.js";
import { FormatoData } from "../types/FormatoData.js";

export let saldo: number = 3000;

export const elementoSaldo = document.querySelector(
	".saldo-valor .valor"
) as HTMLElement;
export const elementoDataAcesso = document.querySelector(
	".block-saldo time"
) as HTMLElement;

if (elementoDataAcesso != null) {
	const dataAcesso: Date = new Date();
	elementoDataAcesso.textContent = formatarData(
		dataAcesso,
		FormatoData.DIA_SEMANA_DIA_MES_ANO
	);
}

export function getSaldo(): number {
	return saldo;
}

atualizarSaldo(saldo);
export function atualizarSaldo(novoSaldo: number): void {
	saldo = novoSaldo;
	if (elementoSaldo != null) {
		elementoSaldo.textContent = formatarMoeda(saldo);
	}
}
