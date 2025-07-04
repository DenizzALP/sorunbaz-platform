# sorunbaz-platform


# 🧠 SorunBaz - Ask, Learn, Share

**SorunBaz** is a full-stack web application that allows users to register, create posts, comment, rate content, and manage their profile.  
The platform is designed for discussion, knowledge sharing, and learning through community feedback.

> ⚠️ This project was built entirely by [Erda Deniz Alp](https://github.com/DenizzALP) for learning purposes.  
> If you plan to use or share this project, please give proper credit.

---

## 🔍 Features

- 📝 Create, edit, and delete posts
- 💬 Comment on posts (only for logged-in users)
- 🧑‍🎓 User authentication (register/login/logout)
- ⭐ Add tags to posts and filter via search
- 🧾 User profile page with post management
- 🔐 Session-based authorization with middleware
- 🗃 MongoDB-based data modeling (Posts, Users, Comments, etc.)

---

## 🖼 Screenshots

### 🔹 Homepage (Post Listing)
![Homepage Screenshot]
[anasayfyaDark](https://github.com/user-attachments/assets/b6f2be83-761f-4578-abb8-acc86b35cdb5)
![anasayfyaLight](https://github.com/user-attachments/assets/ccf10f0e-60bf-4c28-9f51-cd1f64cdaff1)


### 🔹 Post Detail + Comments
![Post Detail Screenshot]
![post detail dark](https://github.com/user-attachments/assets/3b3443b2-2020-4875-a2ad-d54868d4e211)
![post detail light](https://github.com/user-attachments/assets/3caf3a72-730d-4c7f-beb9-fc3b62d85d83)


### 🔹 Register / Login
![Auth Screenshot]
![register](https://github.com/user-attachments/assets/1146cad5-bf4b-4b97-b108-ae2cd1a1c42e)
![login](https://github.com/user-attachments/assets/850ec74b-5e99-4abd-b95d-38671c4d9b04)

### 🔹 Create Post
![Create Post Screenshot]
![add post](https://github.com/user-attachments/assets/37c571f9-a49a-4ae7-a054-849b1109031e)

### 🔹 Create Post
![Edit Post Screenshot]
![edit post](https://github.com/user-attachments/assets/c920c15e-eb9f-471c-90bb-a1d4032702e7)

### 🔹 User Profile (Edit & Delete Posts)
![Profile Screenshot]
![profile dark](https://github.com/user-attachments/assets/ba243ff8-42e1-4964-a817-aa1e019e3038)

---

## ⚙️ Tech Stack

- **Frontend:** HTML, CSS, EJS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB + Mongoose
- **Session Handling:** express-session
- **Templating:** EJS with express-ejs-layouts
- **Form Validation:** Vanilla JS (client-side)
- **Version Control:** Git & GitHub

---


## 🚀 Installation

```bash
# 1. Clone the repository
git clone https://github.com/DenizzALP/sorunbaz-platform.git
cd sorunbaz-platform

# 2. Install dependencies
npm install

# 3. Create .env file
touch .env
```
##.env file structure:
PORT=5000
MONGO_URI=your_mongodb_connection_string
SESSION_SECRET=your_secret
