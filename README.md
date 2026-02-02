🍽️ Restaurant Dashboard (Bistro)

A full-stack Restaurant Management Dashboard built using React, Node.js, Express, MongoDB, deployed with Netlify (Frontend) and Render (Backend).

This dashboard helps manage menu items, orders, and order statuses in real time.

🚀 Live Demo

Frontend (Netlify):
👉 https://restaurantdashboardr.netlify.app

Backend API (Render):
👉 https://restaurant-dashboard-backend-xmy6.onrender.com

🧩 Features
✅ Menu Management

View all menu items

Filter menu by category:

Appetizer

Main Course

Dessert

Beverage

Add new menu items

Delete menu items

✅ Order Management

View all orders

Create sample orders

Update order status (Pending → Delivered)

✅ Dashboard Pages

Overview

Menu

Orders

Analytics (UI ready)

Settings (UI ready)

🛠️ Tech Stack
Frontend

React

JavaScript (ES6)

Tailwind CSS

Fetch API

Backend

Node.js

Express.js

MongoDB Atlas

Mongoose

CORS

Deployment

Frontend: Netlify

Backend: Render

Database: MongoDB Atlas


📁 Project Structure

restaurant-dashboard/
│
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── api.js
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
├── server/                 # Node + Express backend
│   ├── models/
│   ├── routes/
│   ├── db.js
│   └── server.js
│
├── .gitignore
└── README.md


🔌 API Endpoints
            Menu APIs

Method  	Endpoint	    Description
GET	        /api/menu	    Get all menu items
POST	    /api/menu	    Create a menu item
DELETE	    /api/menu/:id	Delete a menu item


Order APIs

Method	    Endpoint	    Description
GET	        /api/orders	    Get all orders
POST	    /api/orders 	Create an order
PUT	    /api/orders/:id	    Update order status

🌍 Environment Variables (Backend)

Create a .env file inside the server folder:

PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string

▶️ Run Locally
1️⃣ Backend
cd server
npm install
npm start

2️⃣ Frontend
cd client
npm install
npm start

⚠️ Notes

Backend uses CORS to allow Netlify frontend access

Free Render instance may take a few seconds to wake up

MongoDB Atlas IP access must be set to 0.0.0.0/0

👩‍💻 Author

Rashmi Patil
GitHub: https://github.com/rashmipatil8849-ctrl

⭐ If you like this project

Give it a ⭐ on GitHub!

