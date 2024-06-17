import { SEPOLIA_NETWORK } from '$env/networks.env';
import type { RequiredErc20Token } from '$eth/types/erc20';
import chainlink from '$icp-eth/assets/chainlink.svg';

export const LINK_DECIMALS = 18;

export const SEPOLIA_LINK_SYMBOL = 'SepoliaLINK';

export const SEPOLIA_LINK_TOKEN_ID: unique symbol = Symbol(SEPOLIA_LINK_SYMBOL);

export const SEPOLIA_LINK_TOKEN: RequiredErc20Token = {
	id: SEPOLIA_LINK_TOKEN_ID,
	network: SEPOLIA_NETWORK,
	standard: 'erc20',
	category: 'default',
	name: 'ChainLink Token',
	symbol: 'LINK',
	decimals: LINK_DECIMALS,
	icon: chainlink,
	address: '0x779877A7B0D9E8603169DdbD7836e478b4624789',
	exchange: 'erc20',
	twinTokenSymbol: 'ckSepoliaLINK'
};