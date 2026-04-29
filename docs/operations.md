# Operations

These notes capture the practical work needed to run, maintain, or modernize the repository from its current state.

## Local Operation

- Install Node.js and npm
- Run npm install at the repository root
- Install client dependencies under Client if needed
- Configure local database and IPFS values with safe placeholders
- Run npm run server, npm run client, or npm start depending on the workflow being tested

## Validation

- Run npm test if implemented
- Smoke-test server and client separately
- Test contract behavior on a local chain only

## Maintenance Notes

- Review IPFS and Solidity dependencies
- Document local setup and example flows
- Avoid committing generated client builds

## Operational Risks

- Contract and IPFS paths need dedicated tests before production use
- Marketplace dispute handling is a product and governance problem, not only a code problem
- The existing prototype should be modernized before any live funds or sensitive data are involved


