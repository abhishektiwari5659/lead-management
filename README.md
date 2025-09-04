# Lead Management System

![React](https://img.shields.io/badge/Frontend-React-blue?logo=react)
![TailwindCSS](https://img.shields.io/badge/Styling-TailwindCSS-38B2AC?logo=tailwind-css)
![Node.js](https://img.shields.io/badge/Backend-Node.js-green?logo=node.js)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-4EA94B?logo=mongodb)

A Full-Stack Lead Management Module (React + Tailwind + Express + MongoDB) with CRUD operations, validation, and a polished UI. 🚀  
This project was built as an **internship task** and functions as a **mini CRM for managing leads**.

---

## 📌 Features

- ✨ **Add Leads** — Capture leads with name, email, phone, status, and notes.  
- 📋 **View Leads** — Display leads in a clean, responsive UI with filters & search.  
- 📝 **Edit & Update** — Modify lead details using a sleek modal form.  
- ❌ **Delete Leads** — Remove leads with a confirmation dialog.  
- 🔎 **Search & Filter** — Find leads quickly by name/email/phone or filter by status.  
- 🎨 **Modern UI** — Responsive design built with **Tailwind CSS**.  
- 🔗 **API Integration** — Full CRUD with Express & MongoDB.  

---

## 🛠️ Tech Stack

**Frontend:**
- React (Vite)
- Tailwind CSS
- Fetch API (for backend calls)

**Backend:**
- Node.js + Express
- MongoDB + Mongoose
- Express Validator (form validation)

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/abhishektiwai5659/lead-management.git
cd lead-management
```

### 2️⃣ Setup Backend
```bash
cd server
cp .env.example .env   # add your MongoDB URI in MONGO_URI
npm install
npm run dev
```
Backend runs at **http://localhost:5000**

### 3️⃣ Setup Frontend
```bash
cd ../client
npm install
npm run dev
```
Frontend runs at **http://localhost:5173** (or as shown in terminal)

---

## 📡 API Endpoints

| Method | Endpoint         | Description             |
|--------|------------------|-------------------------|
| GET    | `/api/leads`     | Get all leads           |
| POST   | `/api/leads`     | Create a new lead       |
| PATCH  | `/api/leads/:id` | Update an existing lead |
| DELETE | `/api/leads/:id` | Delete a lead           |

---

- **Dashboard View**
- **Lead Form**
- **Edit Modal**
- **Delete Confirmation**
- 
---

## 👨‍💻 Author

Built by abhishek tiwari as part of an **internship selection task** ✨
