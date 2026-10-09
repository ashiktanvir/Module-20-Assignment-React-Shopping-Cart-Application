# React Shopping Cart Application

A modern, responsive, and interactive e-commerce shopping cart web application built with **React** and the **Context API**. Developed as part of Module 20: React Project Assignment[cite: 1].

---

## 🚀 Live Demo & Reference
- **Reference Application:** [Live Demo](https://startling-beijinho-72802b.netlify.app/)[cite: 1]
- **Repository:** Public GitHub Repository[cite: 1]

---

## ✨ Features

- **Product Catalog Grid:** Clean, responsive card grid showing product image, title, category pill badge, and formatted pricing[cite: 1].
- **Real-Time Live Search:** Instant filtering across the product catalog by title and category.
- **Global Cart State Management:** Centralized cart state powered by React's Context API (`CartContext`)[cite: 1].
- **Interactive Cart Drawer / Modal:**
  - One-click "Add to Cart"[cite: 1].
  - Increment (`+`) and decrement (`-`) item quantities dynamically[cite: 1].
  - Automatic item removal when decrementing below 1 or clicking the delete icon[cite: 1].
  - Live summary updating total items badge and total calculated price[cite: 1].
- **Amazon-Inspired UI Design:** Dark top navigation bar with dynamic orange counter badge, structured layout, and a pinned multi-column corporate footer[cite: 5, 7, 8].
- **Fully Responsive:** Mobile-first layout optimized across mobile phones, tablets, and desktop displays[cite: 1].

---

## 🛠️ Tech Stack & Architecture

- **Frontend Library:** React (Vite)[cite: 1]
- **State Management:** React Context API & React Hooks (`useState`, `useContext`)[cite: 1]
- **Styling:** Custom Vanilla CSS (Flexbox & CSS Grid)[cite: 1]
- **Icons:** Inline SVG Icons

---

## 📁 Project Structure

```text
src/
├── components/
│   ├── CartModal.jsx      # Slide-out cart drawer with item controls & totals
│   ├── Footer.jsx         # Dark multi-column corporate footer
│   ├── Navbar.jsx         # Top navigation with live search & cart badge
│   ├── ProductCard.jsx    # Individual product display card
│   └── ProductGrid.jsx    # Responsive grid container for product cards
├── context/
│   └── CartContext.jsx    # Global cart state, actions, and total calculations
├── data/
│   └── products.js        # Mock product catalog dataset
├── App.jsx                # Root application component
├── main.jsx               # React entry point
└── index.css              # Global styles & responsive rules

⚙️ Getting Started
Prerequisites
Node.js (v16+ recommended)

npm or yarn

Installation & Local Setup

1. Clone the repository:

git clone <YOUR_GITHUB_REPO_URL>
cd <repository-folder>

2. Install dependencies:

npm install

3. Start the local development server:

npm run dev

4. Open in browser:

Navigate to http://localhost:5173 (or the port specified in your terminal).


📦 Build for Production

npm run build

Generates production-ready static assets in the dist/ directory.



