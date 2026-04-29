# Architecture

HireChain combines a conventional marketplace app with decentralized trust primitives. The web application handles workflow, MongoDB tracks application state, IPFS can hold delivery evidence, and a Solidity contract represents settlement logic.

## Component View

```mermaid
flowchart LR
  Actor["Client or freelancer"] --> Entry["React client and Express API"]
  Entry --> Service["Marketplace workflow service"]
  Service --> Data["MongoDB and IPFS references"]
  Service --> External["Solidity contract and IPFS node"]
```

## Key Components

- Express API and route handlers
- MongoDB model layer
- React client application
- IPFS integration path
- HireChain Solidity contract

## Main Workflow

```mermaid
sequenceDiagram
  participant User
  participant Client
  participant App
  participant Store
  User->>Client: Posts work or submits delivery evidence
  Client->>App: Sends marketplace action to API
  App->>Store: Validate and persist state
  Store-->>App: Work state and evidence reference saved
  App-->>Client: Returns updated marketplace status
  Client-->>User: Present updated result
```

## Design Considerations

- Keep delivery evidence distinct from marketplace status
- Avoid making blockchain interactions invisible to users
- Design dispute and review flows before adding settlement automation


