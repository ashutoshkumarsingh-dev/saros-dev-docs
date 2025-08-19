import sarosSdk, { getSwapAmountSaros, swapSaros, genConnectionSolana } from '@saros-finance/sdk';
import { PublicKey } from '@solana/web3.js';

const RPC = process.env.RPC_URL || 'https://api.devnet.solana.com';
const OWNER = process.env.OWNER || 'PUT_OWNER_PUBKEY';
const FROM_MINT = process.env.FROM_MINT || 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v'; // USDC
const TO_MINT = process.env.TO_MINT || 'Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB'; // USDT
const AMOUNT = Number(process.env.AMOUNT || '1');
const SLIPPAGE = Number(process.env.SLIPPAGE || '0.5');
const POOL = process.env.POOL || 'PUT_POOL_ADDRESS';
const SRC_ATA = process.env.SRC_ATA || 'PUT_SOURCE_ATA';
const DST_ATA = process.env.DST_ATA || 'PUT_DEST_ATA';

async function main() {
  const connection = genConnectionSolana(RPC);
  const poolParams = { address: POOL, tokens: {} };
  const est = await getSwapAmountSaros(connection, FROM_MINT, TO_MINT, AMOUNT, SLIPPAGE, poolParams);
  const res = await swapSaros(
    connection,
    SRC_ATA,
    DST_ATA,
    AMOUNT,
    est.amountOutWithSlippage,
    null,
    new PublicKey(poolParams.address),
    OWNER,
    FROM_MINT,
    TO_MINT
  );
  console.log(res);
}

main().catch((e) => { console.error(e); process.exit(1); });
