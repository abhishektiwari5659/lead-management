
# Lead Management Module (MERN + Tailwind)

A production-ready mini Lead CRM with **Create, Read, Update, Delete**, search, filter by status, and a polished Tailwind UI.

## ✨ Features
- React + Tailwind beautiful UI
- Create, list, edit, delete leads
- Search by name/email/phone
- Filter by status (New, Contacted, Qualified, Lost)
- Notes & Source fields
- Client-side validation & helpful toasts
- REST API with Express + MongoDB
- Clean controller/route/model structure
- CORS and environment-based API URL

---

## 🛠️ Setup

### 1) Backend
```bash
cd server
cp .env.example .env
# Edit .env and put your MongoDB connection string in MONGO_URI
npm install
npm run dev   # starts on http://localhost:5000
```

### 2) Frontend
```bash
cd ../client
npm install
npm run dev   # Vite dev server; open the printed URL
```
> The frontend uses `VITE_API_URL`. If not set, it defaults to `http://localhost:5000`.

---

## 🔗 ENV
**server/.env**
```
MONGO_URI=mongodb://127.0.0.1:27017/lead_mgmt
PORT=5000
```
**client/.env**
```
VITE_API_URL=http://localhost:5000
```

---

## 📁 Structure
```
lead-management/
├─ client/ (React + Tailwind + Vite)
│  └─ src/
│     ├─ components/
│     ├─ pages/
│     ├─ App.jsx
│     └─ main.jsx
└─ server/ (Express + MongoDB)
   ├─ controllers/
   ├─ models/
   ├─ routes/
   └─ server.js
```

Good luck with your internship selection! 🚀
