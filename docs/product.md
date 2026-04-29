# Product Notes

The product idea is a trust-centered work marketplace: clients need confidence in delivery, freelancers need fair settlement, and both sides need clear state.

## User Journeys

- Client posts a work request and reviews submissions
- Freelancer accepts work and attaches delivery evidence
- Marketplace logic records progress toward settlement

## Functional Requirements

- Track work, participants, and delivery state
- Attach evidence references without overloading the database
- Represent settlement state transparently

## Constraints

- Blockchain transactions introduce latency and cost
- IPFS evidence needs availability planning
- Disputes require human and policy design

## Roadmap Ideas

- Add contract and API tests
- Separate marketplace domain logic from Express handlers
- Document dispute, escrow, and evidence policies


