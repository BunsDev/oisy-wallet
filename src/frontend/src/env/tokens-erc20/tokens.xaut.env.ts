import { ETHEREUM_NETWORK } from '$env/networks.env';
import xaut from '$eth/assets/xaut.svg';
import type { RequiredErc20Token } from '$eth/types/erc20';

export const XAUT_DECIMALS = 6;

export const XAUT_SYMBOL = 'XAUt';

export const XAUT_TOKEN_ID: unique symbol = Symbol(XAUT_SYMBOL);

export const XAUT_TOKEN: RequiredErc20Token = {
	id: XAUT_TOKEN_ID,
	network: ETHEREUM_NETWORK,
	standard: 'erc20',
	category: 'default',
	name: 'Tether Gold',
	symbol: 'XAUt',
	decimals: XAUT_DECIMALS,
	icon: xaut,
	address: '0x68749665FF8D2d112Fa859AA293F07A622782F38',
	exchange: 'erc20',
	twinTokenSymbol: 'ckXAUT'
};