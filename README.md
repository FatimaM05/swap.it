# Swap.it

### *Trade, Share, Swap — It’s That Simple*

A **full-stack, community-driven open marketplace platform** for buying, selling, exchanging, and donating second-hand items using **cash, item swaps, or internal credits**.

---

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

Co-authored-by:  <hadeedtariq50@gmail.com>

## --------------------GET STARTED-------------------------

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

## ✅ Project is Ready 🎉

You can now:

* Register users
* Create product/donation listings
* Test credit transactions
* Chat in real-time
* Manage dashboard & profiles

---
