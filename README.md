## Solana - Rust
Building a simple Dapp on Solana with Rust

### Commands
Running tests
```
anchor test
```

Building 
```
anchor build
```

### Deploy 
```
solana config set --url devnet

// Make sure you're on devnet.
solana config get

anchor build

// Get the new program id.
solana address -k target/deploy/myepicproject-keypair.json

// Update Anchor.toml and lib.rs w/ new program id.
// Make sure Anchor.toml is on devnet.

// Build again.
anchor build

// Upload IDL file to solana
anchor idl 
```

### Deploy
```
Solana Devnet: yZnJDyXuzzVgmApz7aknGAhVFzPXrhNDwtodezFygJo
```