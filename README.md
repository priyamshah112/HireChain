# HireChain

HireChain is a marketplace prototype for hiring and project delivery. It combines an Express and MongoDB backend, an IPFS integration path, a Solidity contract, and a React client.

## Repository Status

- Current role: Decentralized work marketplace prototype connecting project work, delivery evidence, and blockchain settlement concepts
- Documentation status: refreshed for public review
- Primary audience: engineers, product reviewers, and collaborators evaluating the project context

## What This Project Does

- Express backend for marketplace workflows
- MongoDB-backed application state
- IPFS integration path for delivery artifacts
- Solidity contract for marketplace settlement concepts
- React client under the Client directory

## Technology Stack

- Node.js, Express, and MongoDB
- React frontend client
- IPFS HTTP client
- Solidity smart contract
- concurrently and nodemon for development scripts

## Repository Map

- app.js is the backend entry point
- models.js contains data model definitions
- HireChain.sol captures the contract concept
- Client/ contains the frontend application

## Getting Started

- Install Node.js and npm
- Run npm install at the repository root
- Install client dependencies under Client if needed
- Configure local database and IPFS values with safe placeholders
- Run npm run server, npm run client, or npm start depending on the workflow being tested

## Documentation

- docs/overview.md - product context, users, scope, and outcomes
- docs/architecture.md - components, data flow, and sequence diagrams
- docs/product.md - user journeys, requirements, constraints, and roadmap ideas
- docs/operations.md - setup, validation, maintenance, and known risks

## Known Limitations

- Contract and IPFS paths need dedicated tests before production use
- Marketplace dispute handling is a product and governance problem, not only a code problem
- The existing prototype should be modernized before any live funds or sensitive data are involved

## Notes For Future Maintainers

This repository documents the original project intent and the implementation shape visible in the codebase. Before production use, review dependencies, environment configuration, data handling, and deployment assumptions against current standards.


