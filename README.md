# Sebez Market

A modern peer-to-peer e-commerce and circular barter platform with hyperlocal pooled delivery logistics designed for Ethiopian urban centers.

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)](https://www.prisma.io/)

---

## Project Overview

**Sebez Market** is an intelligent classifieds and circular trade platform built to overcome liquidity constraints and high transportation costs in urban markets (such as Adama, Hawassa, and Addis Ababa). 

In traditional marketplaces (like Jiji or Facebook Marketplace), a user wanting to upgrade an item must go through a slow, two-step process: wait weeks to sell their existing item for cash at a discount, then search again to purchase their target item. Meanwhile, residents in peripheral neighborhoods spend significant time and money on individual Bajaj rides to fetch products from central markets.

**Sebez Market solves this through two integrated innovations:**

1. **Smart Barter and Circular Exchange Engine:** 
   Allows users to directly swap items with automated cash top-up calculations (e.g., iPhone 13 Pro for Samsung S21 + cash difference) and uses a **graph cycle-detection algorithm** to uncover closed 3-way circular loops (A -> B -> C -> A), satisfying three traders simultaneously without requiring full cash liquidity.

2. **Hyperlocal Pooled Bajaj Logistics:**
   Clusters delivery orders bound for the same residential kebele (e.g., from Arada Market to Bole Kebele). A registered Bajaj or taxi driver picks up multiple bundled orders and delivers them in an optimized route, saving customers up to 70% in transportation costs while providing drivers with predictable, high-yield delivery runs.

---

## Key Features

* **Bilateral Barter with Cash Top-Up:** Swap devices directly with real-time fair market value difference balancing.
* **3-Way Circular Trade Matching:** Graph cycle algorithm that detects multi-party exchange loops automatically.
* **Hyperlocal Pooled Bajaj Dispatch:** Grouped delivery windows from central markets to residential kebeles with proportional fare splitting.
* **Telebirr and CBE Birr Mobile Escrow:** Safe digital escrow with dual-OTP protection (Merchant Release OTP and Customer Delivery OTP).
* **Driver Onboarding and KYC:** Self-registration for Bajaj and taxi drivers with national ID and driver's license verification.
* **Telegram Bot and Low-Data Alerts:** Real-time push notifications for trade match proposals and dispatch alerts over low-bandwidth mobile connections.
* **Multi-Language Support:** Fully localized for **English**, **Amharic (አማርኛ)**, and **Afaan Oromoo**.

---

## System Architecture

```
+-------------------------------------------------------------+
|                       SEBEZ MARKET UI                        |
|       (Next.js App Router, Tailwind CSS, next-intl)         |
+-------------------------------------------------------------+
                              │
            ┌─────────────────┴─────────────────┐
            ▼                                   ▼
+-----------------------+           +-----------------------+
|  CIRCULAR BARTER HUB  |           |  POOLED BAJAJ ENGINE  |
| - Bilateral Swaps     |           | - Kebele Clustering   |
| - 3-Way Graph Cycles  |           | - Scheduled Runs      |
| - Cash Top-Up Escrow  |           | - Nearest-Neighbor    |
+-----------------------+           +-----------------------+
            │                                   │
            └─────────────────┬─────────────────┘
                              ▼
+-------------------------------------------------------------+
|                     CORE SERVICES & DATA                    |
|       PostgreSQL (Prisma) | Telebirr Escrow | Telegram Bot  |
+-------------------------------------------------------------+
```

---

## 10-Day Development Sprint Roadmap

- [x] **Day 0:** Project charter, system architecture, and core specifications.
- [ ] **Day 1:** Core Next.js scaffolding, Tailwind theme, and Prisma schema.
- [ ] **Day 2:** Role-based authentication & Driver KYC onboarding.
- [ ] **Day 3:** Marketplace classifieds & barter catalog with kebele tagging.
- [ ] **Day 4:** Bilateral (2-way) swap negotiation room & dynamic top-up calculator.
- [ ] **Day 5:** 3-Way circular trade loop graph matching engine.
- [ ] **Day 6:** Hyperlocal pooled Bajaj dispatch & driver routing dashboard.
- [ ] **Day 7:** Telebirr / CBE Birr escrow checkout & dual-OTP handoff verification.
- [ ] **Day 8:** Telegram bot dispatch integration & SMS notifications.
- [ ] **Day 9:** Amharic and Afaan Oromoo localization & mobile responsiveness.
- [ ] **Day 10:** Demo seed data for Adama, documentation, and deployment setup.

For detailed functional specifications, view the [Full Project Proposal](docs/PROJECT_PROPOSAL.md).

---

## Local Development Setup

```bash
# Clone the repository
git clone https://github.com/KidusT19/sebez-market.git
cd sebez-market

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env

# Run database migrations
npx prisma migrate dev

# Start development server
npm run dev
```

---

## License
This project is licensed under the MIT License.
