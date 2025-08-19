# Quickstart: saros-dlmm-sdk-rs (Rust)

## Prerequisites
- Rust toolchain (stable)
- Solana accounts (read-only for quotes)

## Add Dependency
In your Cargo.toml:
```toml
[dependencies]
saros-dlmm = { git = "https://github.com/saros-xyz/saros-dlmm-sdk-rs", package = "saros-dlmm" }
anyhow = "1"
```

## Quote Skeleton
```rust
use anyhow::Result;
use saros_dlmm::SarosDlmm; // crate module path may vary

fn main() -> Result<()> {
    // Fetch accounts and build SarosDlmm via jupiter_amm_interface
    // let amm = SarosDlmm::from_keyed_account(...)?;
    // let quote = amm.quote(&quote_params)?;
    // println!("{:?}", quote);
    Ok(())
}
```

> Note: The repo currently has unimplemented swap meta assembly; focus on quote paths for now.
