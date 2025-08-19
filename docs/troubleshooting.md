# Troubleshooting & FAQ

## Common
- Ensure RPC is reachable; retry with another provider.
- Token decimals must match actual mints; wrong decimals lead to bad amounts.
- Always create ATAs before transfers.

## Swaps
- Division-by-zero or NaN outputs: check pool liquidity and trade fee fields.
- Min-out too high: increase slippage or reduce input.

## DLMM
- Quote returns error: pool not initialized or bin arrays missing.

## Rust
- Update to latest stable toolchain; run `cargo test`.
