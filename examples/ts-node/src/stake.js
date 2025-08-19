import sarosSdk from '@saros-finance/sdk';
import BN from 'bn.js';

const { SarosFarmService } = sarosSdk;

const RPC = process.env.RPC_URL || 'https://api.devnet.solana.com';
const OWNER = process.env.OWNER || 'PUT_OWNER_PUBKEY';
const POOL_ADDRESS = process.env.FARM_POOL || 'PUT_FARM_POOL';
const LP_ADDRESS = process.env.LP_MINT || 'PUT_LP_MINT';
const AMOUNT = Number(process.env.AMOUNT || '1');

async function main() {
  const conn = sarosSdk.genConnectionSolana(RPC);
  const payer = { publicKey: new (await import('@solana/web3.js')).PublicKey(OWNER) };
  const hash = await SarosFarmService.stakePool(
    conn,
    payer,
    new (await import('@solana/web3.js')).PublicKey(POOL_ADDRESS),
    new BN(AMOUNT),
    new (await import('@solana/web3.js')).PublicKey('SFarmWM5wLFNEw1q5ofqL7CrwBMwdcqQgK6oQuoBGZJ'),
    [],
    new (await import('@solana/web3.js')).PublicKey(LP_ADDRESS),
  );
  console.log({ tx: hash });
}

main().catch((e) => { console.error(e); process.exit(1); });
