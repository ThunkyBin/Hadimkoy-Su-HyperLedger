# Hadimkoy Su HyperLedger

Prototype Hyperledger Fabric client for tracking juice products through a
factory supply chain in Hadimkoy, Istanbul.

## What It Does

- Connects to a Fabric channel.
- Enrolls an admin wallet through a Fabric CA client.
- Listens for `Juice` chaincode events.
- Submits juice creation transactions.
- Updates product location on the ledger.
- Queries juices by flavor.

## Main File

`hadimkoysu-fabric.js` contains the client workflow. The file currently uses
Python-style Fabric SDK calls even though the extension is `.js`, so treat it as
a prototype integration script.

## Example Flow

1. Start the Fabric network and chaincode.
2. Configure the CA URL, channel, and gateway values in the script.
3. Run the tracker to listen for new juice events.
4. Submit create and location update transactions.

## Notes

Do not use placeholder CA credentials in production. A real deployment should
load connection profiles, identities, and channel names from environment
configuration.
