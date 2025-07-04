# sorunbaz-platform


# 🧠 SorunBaz - Ask, Learn, Share

**SorunBaz** is a full-stack web application that allows users to register, create posts, comment, rate content, and manage their profile.  
The platform is designed for discussion, knowledge sharing, and learning through community feedback.

> ⚠️ This project was built entirely by [Erda Deniz Alp](https://github.com/DenizzALP) for learning purposes.  
> If you plan to use or share this project, please give proper credit.
> ✨ UI fully designed and styled by the developer (no UI libraries used).
 
---

## 🔍 Features

- 📝 Create, edit, and delete posts
- 💬 Comment system (available to logged-in users)
- 🧑‍🎓 User authentication (Register, Login, Logout)
- 🔐 Session-based authorization with middleware
- 🧾 User profile with personal post management
- ⭐ Tag support for posts and searchable content
- 🔍 Dynamic search bar (title & content filter)
- 📱 Fully responsive layout (mobile, tablet, desktop)
- 🌙 Dark / ☀️ Light mode toggle
- ✅ Client-side form validation (Register/Login)
- 🧠 Clean and minimalist UI built from scratch
- 🧭 Navigation bar updates based on user session
- 🗃 MongoDB-based schema design (Users, Posts, Comments, Ratings, etc.)
- 🎯 Smooth UX with helpful alerts and layout transitions

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

### 🔹 Mobile Screenshots


Responsive design in action:
![mobil anasyfa2](https://github.com/user-attachments/assets/c0d2be74-1355-4825-8fe6-ad129827155a)
![Uploading mobil login dark.PNG…]()
![molbil register](https://github.com/user-attachments/assets/7b6e0ce9-f156-46d3-9567-ccda4d4c19d3)



---

## ⚙️ Tech Stack

- **Frontend:** HTML, CSS, EJS, JavaScript (Vanilla)
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

##.env file structure:
PORT=5000
MONGO_URI=your_mongodb_connection_string
SESSION_SECRET=your_secret

# 4. Run the project
npm start
```

---

##🧪 Usage

- Visit http://localhost:5000

- Register or login

- Start creating posts, leaving comments, and exploring other users' content

- Edit or delete your own posts via the profile page

## 📁 Project Structure


```bash
sorunbaz-platform/
│
├── public/               # Static assets (CSS, images)
├── server/
│   ├── config/           # MongoDB connection
│   ├── middleware/       # Auth middleware
│   ├── models/           # Mongoose models (Post, User, Comment, etc.)
│   ├── routes/           # All route files (main, auth, comment, profile, etc.)
│   └── views/            # EJS templates
├── .env                  # Environment variables
├── package.json
└── app.js                # Entry point

```

---

## 🤝 Contributing
Pull requests and feedback are welcome.
For any bug reports or feature requests, please open an issue.

---

## 📄 License
This project is licensed for educational and personal use only.
If you intend to use it publicly, you must credit the author:

> Developed by Erda Deniz Alp
> GitHub: @DenizzALP












