# Quickstart: @saros-finance/sdk (AMM, Stake, Farm)

This guide gets you from zero to a working swap on devnet using the TypeScript SDK.

## Prerequisites
- Node.js 18/20/22
- A Solana keypair with airdropped SOL on devnet
- RPC endpoint (e.g., https://api.devnet.solana.com)

## Install
```bash
npm init -y
npm install @saros-finance/sdk @solana/web3.js bn.js graphql-request
```

## Minimal Swap (devnet)
```ts
// swap.ts
import sarosSdk, { getSwapAmountSaros, swapSaros, genConnectionSolana } from '@saros-finance/sdk';
import { PublicKey } from '@solana/web3.js';

const connection = genConnectionSolana('https://api.devnet.solana.com');

async function main() {
  const owner = 'PUT_YOUR_PUBLIC_KEY';
  const USDC = 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v';
  const USDT = 'Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB';

  // poolParams should be queried from Saros APIs or known pool list
  const poolParams = { address: 'PUT_POOL_ADDRESS', tokens: {} } as any;

  const est = await getSwapAmountSaros(connection, USDC, USDT, 1, 0.5, poolParams);
  const res = await swapSaros(
    connection,
    'PUT_SOURCE_ATA',
    'PUT_DEST_ATA',
    1,
    est.amountOutWithSlippage,
    null,
    new PublicKey(poolParams.address),
    owner,
    USDC,
    USDT,
  );
  console.log(res);
}

main().catch(console.error);
```

## Notes
- Ensure ATAs exist for source/destination.
- Slippage is percent (e.g., 0.5 = 0.5%).
- For mainnet, switch RPC and real pool address.
