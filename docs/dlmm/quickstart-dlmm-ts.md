# Quickstart: @saros-finance/dlmm-sdk (TypeScript)

## Install
```bash
npm init -y
npm install @saros-finance/dlmm-sdk @solana/web3.js
```

## Quote Example
```ts
import { DLMM } from '@saros-finance/dlmm-sdk';

async function main() {
  const conn = new (await import('@solana/web3.js')).Connection('https://api.devnet.solana.com');
  const sdk = new DLMM({ connection: conn });
  const pool = 'PUT_DLMM_POOL_PUBKEY';
  const out = await sdk.quoteSwap({ pool, inAmount: 1n /* base units */ });
  console.log(out);
}

main().catch(console.error);
```

## Tips
- Use BigInt for amounts.
- Ensure you use correct pool and mints.
