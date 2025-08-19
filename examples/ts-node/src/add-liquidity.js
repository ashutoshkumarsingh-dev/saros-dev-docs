import sarosSdk, { getPoolInfo, depositAllTokenTypes, genConnectionSolana } from '@saros-finance/sdk';
import { PublicKey } from '@solana/web3.js';

const RPC = process.env.RPC_URL || 'https://api.devnet.solana.com';
const OWNER = process.env.OWNER || 'PUT_OWNER_PUBKEY';
const POOL = process.env.POOL || 'PUT_POOL_ADDRESS';
const TOKEN0_ATA = process.env.TOKEN0_ATA || 'PUT_TOKEN0_ATA';
const TOKEN1_ATA = process.env.TOKEN1_ATA || 'PUT_TOKEN1_ATA';
const TOKEN0_MINT = process.env.TOKEN0_MINT || 'EPjF...';
const TOKEN1_MINT = process.env.TOKEN1_MINT || 'Es9v...';
const LP_AMOUNT = Number(process.env.LP_AMOUNT || '1');
const SLIPPAGE = Number(process.env.SLIPPAGE || '0.5');

async function main() {
  const connection = genConnectionSolana(RPC);
  const poolInfo = await getPoolInfo(connection, new PublicKey(POOL));
  const res = await depositAllTokenTypes(
    connection,
    OWNER,
    new PublicKey(OWNER),
    new PublicKey(TOKEN0_ATA),
    new PublicKey(TOKEN1_ATA),
    LP_AMOUNT,
    new PublicKey(POOL),
    poolInfo.programId || new PublicKey('SSwapUtytfBdBn1b9NUGG6foMVPtcWgpRU32HToDUZr'),
    TOKEN0_MINT,
    TOKEN1_MINT,
    SLIPPAGE
  );
  console.log(res);
}

main().catch((e) => { console.error(e); process.exit(1); });
