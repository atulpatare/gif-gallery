const anchor = require('@project-serum/anchor');

const  { SystemProgram } = anchor.web3;

const main = async () => {
  console.log('Starting tests ...');

  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);
  
  const program = anchor.workspace.Solanarust;
  const tx = await program.rpc.startStuffOff();

  console.log('Transaction signature ', tx);
}

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  }catch (err) {
    console.log(err);
    process.exit(1);
  }
}

runMain();

