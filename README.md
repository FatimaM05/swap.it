# Swap.it

### *Trade, Share, Swap — It’s That Simple*

A **full-stack, community-driven open marketplace platform** for buying, selling, exchanging, and donating second-hand items using **cash, item swaps, or internal credits**.

[![Next.js](https://img.shields.io/badge/Next.js-13.4-blue?logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-blue?logo=react&logoColor=white)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3-blue?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-1.0-00c86f?logo=supabase&logoColor=white)](https://supabase.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-blue?logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Prisma](https://img.shields.io/badge/Prisma-4.15-blue?logo=prisma&logoColor=white)](https://www.prisma.io/)
[![Socket.IO](https://img.shields.io/badge/Socket.IO-4.7-black?logo=socket.io&logoColor=white)](https://socket.io/)
[![WebRTC](https://img.shields.io/badge/WebRTC-1.0-blue?logo=webrtc&logoColor=white)](https://webrtc.org/)
[![License](https://img.shields.io/badge/License-Academic-orange)](#-license)
---
## 📖 Table of Contents

- [Project Overview](#-project-overview)
- [Objectives & Goals](#-objectives--goals)
- [Target Audience](#-target-audience)
- [Features](#-features)
  - [User Authentication & Onboarding](#-user-authentication--onboarding)
  - [Product Listing & Management (CRUD)](#-product-listing--management-crud)
  - [Multi-Modal Transactions](#-multi-modal-transactions)
  - [Donation Framework](#-donation-framework)
  - [Internal Credit Economy](#-internal-credit-economy)
  - [Buyer–Seller Messaging](#-buyer–seller-messaging)
  - [Dynamic Search & Filtering](#-dynamic-search--filtering)
  - [Public Seller Profiles](#-public-seller-profiles)
  - [Product Detail Pages](#-product-detail-pages)
  - [Fully Responsive UI](#-fully-responsive-ui)
- [Tech Stack](#-tech-stack)
  - [Frontend](#frontend)
  - [Backend](#backend)
  - [Database & Storage](#database--storage)
  - [Real-Time Communication](#real-time-communication)
- [System Architecture](#-system-architecture)
- [Core Modules](#-core-modules)
- [Limitations](#-limitations)
- [Future Scope](#-future-scope)
- [Developed By](#-developed-by)
- [License](#-license)
- [Installation & Setup](#-installation--setup)
  - [Prerequisites](#1️⃣-prerequisites)
  - [Clone the Repository](#2️⃣-clone-the-repository)
  - [Install Dependencies](#3️⃣-install-dependencies)
  - [Environment Variables](#4️⃣-environment-variables)
  - [Prisma Setup](#5️⃣-prisma-setup)
  - [Supabase Configuration](#6️⃣-supabase-configuration)
  - [Run the Development Server](#7️⃣-run-the-development-server)
  - [Real-Time Messaging (Sockets)](#8️⃣-real-time-messaging-sockets)


## 📌 Project Overview

**Swap.it** is a modern peer-to-peer marketplace designed to promote **sustainable consumption** and **community-based trading**.
Inspired by platforms like eBay, Swap.it extends traditional buy/sell models by introducing:

* Item exchange (barter system)
* Internal credit economy
* Structured donation framework (free & credit-based)
* Real-time buyer–seller communication

The platform is architected with **scalability, modularity, and user-centric design** at its core.

---

## 🎯 Objectives & Goals

* Build a **secure, scalable, and user-friendly marketplace**
* Support **multi-modal transactions**:

  * Cash
  * Item exchange
  * Internal credits
* Introduce a **dual donation system** (free & credit-based)
* Enable **transparent transaction tracking**
* Provide **robust user management**
* Integrate **real-time messaging**
* Deliver a fully functional **MVP**

---

## 👥 Target Audience

* Users buying or selling second-hand items
* Environmentally conscious consumers
* Students & budget shoppers
* Community members seeking donation opportunities
* Users with limited access to traditional marketplaces
* Socially responsible traders

---

## 🚀 Features

### 🔐 User Authentication & Onboarding

* Email & password login
* Google OAuth (via Supabase)
* Secure session handling
* Normal & Privileged user roles

### 📦 Product Listing & Management (CRUD)

* Create, edit, delete listings
* Support for:

  * Sale
  * Exchange
  * Donation
* Image uploads & categorization
* Dashboard-based management

### 🔁 Multi-Modal Transactions

* Cash purchase
* Item-for-item exchange
* Credit-based acquisition

### 🎁 Donation Framework

* Free donations
* Credit-based donations
* Automatic credit adjustment
* Claim without manual approval
* Donation-only restrictions (no buy/exchange)

### 💳 Internal Credit Economy

* Earn credits by donating items
* Spend credits on listings
* Real-time credit balance updates

### 💬 Buyer–Seller Messaging

* Real-time chat using WebRTC & Socket.IO
* Item-specific conversations
* Secure in-platform communication

### 🔍 Dynamic Search & Filtering

* Category filtering
* Price & credit range filters
* Transaction-type filters
* Debounced search
* Pagination with empty states

### 🧑‍💼 Public Seller Profiles

* Seller listings
* Messaging option
* Filter seller items by type

### 📄 Product Detail Pages

* Image gallery
* Seller info panel
* Wishlist toggle
* Conditional action buttons
* Related items carousel

### 📱 Fully Responsive UI

* Mobile, tablet & desktop optimized
* Tailwind CSS-based responsive layout

---

## 🛠️ Tech Stack

### Frontend

* **Next.js (App Router)**
* **React**
* **Tailwind CSS**
* Axios for API communication

### Backend

* **Next.js API Routes**
* Custom business logic & authentication

### Database & Storage

* **PostgreSQL**
* **Prisma ORM**
* **Supabase**

  * Database hosting
  * Auth (OAuth, password reset)
  * Storage buckets (images)

### Real-Time Communication

* **WebRTC**
* **Socket.IO**

---

## 🧱 System Architecture

* **App Router-based routing**
* Modular frontend components
* API-driven backend
* Prisma-based data modeling
* Real-time socket connections
* Secure session management

---

## 📂 Core Modules

* User Management
* Product & Donation Listings
* Internal Credit System
* Real-Time Messaging
* Notifications
* Wishlist
* Profile Dashboard

---

## ⚠️ Limitations

* No built-in logistics handling
* No automated dispute resolution
* Quality depends on user-provided content
* Requires moderation tools for misuse prevention

---

## 🔮 Future Scope

* User ratings & verified badges
* In-app dispute resolution system
* Location-based item discovery
* AI-driven recommendations
* Credit top-up via payment gateways
* Gamified credit rewards
* Android & iOS mobile apps
* Donation impact analytics dashboard
* Admin moderation panel

---

## **Developed By**

* **Hadeed Tariq** 
* **Fatima Masood** 
---

## 📜 License

This project is developed for **academic purposes**.
All rights reserved by the authors.

##  NEXT STEP: Installation & Setup Guide (Local + Supabase)

## ⚙️ Installation & Setup

### 1️⃣ Prerequisites

Make sure you have the following installed:

* **Node.js** (v18 or later)
* **npm** or **yarn**
* **PostgreSQL** (or Supabase)
* **Git**

---

### 2️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/swap.it.git
cd swap.it
```

---

### 3️⃣ Install Dependencies

```bash
npm install
# or
yarn install
```

---

### 4️⃣ Environment Variables

Create a `.env` file in the root directory:

```env
DATABASE_URL=postgresql://USER:PASSWORD@HOST:PORT/DATABASE
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
JWT_SECRET=your_secret_key
```

📌 **Notes**

* Get Supabase keys from **Supabase Dashboard → Project Settings → API**
* `DATABASE_URL` is provided by Supabase under **Database → Connection string**

---

### 5️⃣ Prisma Setup

Generate Prisma client:

```bash
npx prisma generate
```

Run migrations:

```bash
npx prisma migrate dev
```

(Optional) Open Prisma Studio:

```bash
npx prisma studio
```

---

### 6️⃣ Supabase Configuration

Enable the following in Supabase:

* ✅ **Email Auth**
* ✅ **Google OAuth**
* ✅ **Storage Buckets** (for images)
* ✅ **Row Level Security (RLS)**

Create buckets:

* `product-images`
* `profile-images`

---

### 7️⃣ Run the Development Server

```bash
npm run dev
```

Open in browser:

```
http://localhost:3000
```

---

### 8️⃣ Real-Time Messaging (Sockets)

* Socket.io initializes automatically with the server
* WebRTC enables peer-to-peer chat
* No extra setup required for local testing

---
