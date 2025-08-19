# Tutorial: Add Liquidity with @saros-finance/sdk

## Steps
1. Resolve pool with `getPoolInfo`.
2. Compute amounts with token decimals.
3. Ensure ATAs exist for provider and pool authority.
4. Call `depositAllTokenTypes` with slippage.
5. Verify LP token balance.

See `examples/ts-node/src/add-liquidity.ts` for a runnable script.
