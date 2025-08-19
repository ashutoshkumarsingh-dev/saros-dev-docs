# Tutorial: Swap with @saros-finance/sdk

This tutorial performs a token swap on devnet.

## Steps
1. Install dependencies:
```bash
npm i @saros-finance/sdk @solana/web3.js bn.js
```
2. Prepare config: RPC, owner public key, pool address, ATAs.
3. Estimate with `getSwapAmountSaros`.
4. Execute `swapSaros` with min-out from estimate.
5. Confirm and print signature.

## Example Script
See `examples/ts-node/src/swap-saros.ts`.
