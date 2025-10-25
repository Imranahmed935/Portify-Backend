

# 🚀 Portify Website Backend

This is the backend API for the personal portfolio website. It provides secure authentication, blog/project management, and exposes endpoints for the frontend to consume.

---

## 🌐 Live API

> Example: [https://portfolio-backend.onrender.com/api](https://portfolio-backend.onrender.com/api)

---

## 🧠 Project Overview

This backend powers the **private dashboard** for the portfolio owner and handles:

* **Authentication & Authorization** (JWT + bcrypt)
* **Blog Management** (CRUD)
* **Project Management** (CRUD)
* **Secure Owner-Only Access**
* **Database Management** using **Prisma + PostgreSQL** (or MongoDB + Mongoose as an alternative)

---

## 🧰 Tech Stack

| Category       | Technology                                             |
| -------------- | ------------------------------------------------------ |
| Runtime        | Node.js                                                |
| Framework      | Express.js                                             |
| ORM            | Prisma                                                 |
| Database       | PostgreSQL (or MongoDB alternative)                    |
| Authentication | JWT + bcrypt                                           |
| Dev Tools      | Nodemon, dotenv                                        |
| Notifications  | API returns JSON responses for frontend toast messages |

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/portfolio-backend.git
cd portfolio-backend
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Create `.env` File

Create a `.env` file in the root directory:

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE_NAME"
JWT_SECRET="your_jwt_secret_key"
PORT=5000
```

### 4️⃣ Initialize Prisma (PostgreSQL)

```bash
npx prisma generate
npx prisma migrate dev --name init
```

### 5️⃣ Seed Admin User

To create the portfolio owner (admin) account for login, run the seed script:

```bash
npm run seed
```

This will create a default admin user with a hashed password.

---

## 🧩 Available API Routes

### 🔐 Authentication

* `POST /api/auth/login` – Login as admin (returns JWT)
* `POST /api/auth/register` – Register user (optional, use only for admin seeding)

### 📚 Blogs

* `POST /api/blog/create` – Create a blog (Admin only)
* `GET /api/blog` – Get all blogs (Public)
* `GET /api/blog/:id` – Get single blog (Public)
* `PATCH /api/blog/:id` – Update blog (Admin only)
* `DELETE /api/blog/:id` – Delete blog (Admin only)

### 🛠 Projects

* `POST /api/project/create` – Create project (Admin only)
* `GET /api/project` – Get all projects (Public)
* `GET /api/project/:id` – Get single project (Public)
* `PATCH /api/project/:id` – Update project (Admin only)
* `DELETE /api/project/:id` – Delete project (Admin only)

---

## 🧪 Run Development Server

```bash
npm run dev
```

Server will run on `http://localhost:5000` by default.

---

## 🔐 Authentication Notes

* Passwords are hashed using **bcrypt**.
* JWT tokens are returned on successful login.
* All **admin-only routes** require a valid token in the `Authorization` header:

```http
Authorization: Bearer <JWT_TOKEN>
```

---

## 🧑‍💻 Developer

**Name:** [Md imran ahmed]
**Role:** Full Stack Developer
**Portfolio:** [yourwebsite.com]
**GitHub:** [@yourusername](https://github.com/yourusername)




