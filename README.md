# Hadimkoy Su HyperLedger

Prototype Hyperledger Fabric client for tracking juice products through a
factory supply chain in Hadimkoy, Istanbul.

## What It Does

- Creates juice product records.
- Updates product locations.
- Keeps a simple event trail.
- Queries juices by flavor.
- Runs locally as a dependency-free Node.js demo.

## Main File

`hadimkoysu-fabric.js` contains a runnable JavaScript demo that mirrors the
intended Fabric product tracking flow.

## Run Locally

```bash
npm start
```

## Example Flow

1. Create apple and orange juice product records.
2. Move products through receiving, processing, filling, and storage.
3. Query products by flavor.
4. Print the current supply-chain table.

## Notes

This is a local runnable prototype. A production Hyperledger Fabric integration
should replace the in-memory store with a real Fabric gateway, connection
profile, wallet identity, channel, and chaincode calls.
