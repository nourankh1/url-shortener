
# 🔗 Simple URL Shortener — CodeAlpha Backend Internship (Task 1)

A clean and functional URL shortener built using **Node.js**, **Express.js**, **MongoDB**, and **Vanilla JavaScript**. This project was developed as part of the **CodeAlpha Backend Development Internship**.

---

##  Features

- Shorten any valid long URL into a 6-character short code
- Automatically redirect users when they visit the short URL
- Frontend form with instant feedback and copy-to-clipboard support
- URL data stored persistently using MongoDB
- Input validation to avoid errors or duplicate shortening

---

## Tech Stack

Frontend : HTML, CSS, JS
Backend : Node.js, Express 
Database : MongoDB 

---

## Folder Structure
url-shortener/
├── app.js # Express backend logic
├── index.html # Frontend page
├── models/
│ └── Url.js # Mongoose schema
├── package.json # Project metadata
├── package-lock.json # Dependency lock file
├── README.md # Project documentation
└── node_modules/

## How to Run

This is a backend + frontend project using Node.js and MongoDB.  
You can run it locally by starting the server (`app.js`) and opening `index.html` in a browser.

> Make sure MongoDB is running on your machine.

## How It Works

1. User submits a long URL through the form.
2. The backend generates and stores a short code using `nanoid` + MongoDB.
3. Visiting the short link redirects the user to the original URL.

Author
Nouran Khalil – CodeAlpha Backend Intern
GitHub: nourankh1

Status
🟢 Task 1 - Completed Successfully
This project fulfills all requirements of the first backend task in the CodeAlpha internship program.
