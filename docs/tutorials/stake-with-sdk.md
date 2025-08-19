# Tutorial: Stake LP with @saros-finance/sdk

## Steps
1. Fetch farm list via `SarosFarmService.getListPool`.
2. Pick a pool and obtain `poolAddress`, `lpAddress`, `rewards`.
3. Stake with `SarosFarmService.stakePool` (amount in BN).
4. Unstake with `unStakePool` and claim with `claimReward`.

See `examples/ts-node/src/stake.ts` for a runnable script.
