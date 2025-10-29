# 📚 Book Finder

A beautiful and responsive **React + Tailwind CSS** web application that allows users to search for books and fetch data from the **Open Library API**.  
This app helps users discover books by title, author, or subject, displaying essential book details in a clean, card-based UI.

---

## 🚀 Features

- 🔍 **Search Books** – Find books by title, author, or keyword using the Open Library API.  
- 📖 **Book Details** – Displays book title, author name, and published year.  
- 🎨 **Beautiful UI** – Styled using Tailwind CSS for a clean and modern look.  
- ⚡ **Instant Fetching** – Fetches data dynamically using Fetch API and updates results in real-time.  
- 🧩 **Component-based Structure** – Built entirely with reusable React components.  
- 📱 **Fully Responsive** – Works smoothly on mobile, tablet, and desktop.

---

## 🧠 Tech Stack

| Technology | Description |
|-------------|-------------|
| **React** | Frontend JavaScript library for building UI |
| **Tailwind CSS** | Utility-first CSS framework for styling |
| **Open Library API** | Public API to fetch book data |
| **Create React App** | Development environment and build tool |
| **Fetch API** | Used for making API requests |

---

## 📦 Installation and Setup

Follow these steps to set up and run the project locally 👇

### 1️⃣ Clone the repository
```bash
git clone https://github.com/<your-username>/book-finder.git
````

### 2️⃣ Navigate to the project directory

```bash
cd book-finder
```

### 3️⃣ Install dependencies

```bash
npm install
```

### 4️⃣ Set up Tailwind CSS

Make sure Tailwind is installed and configured properly.

If not, run:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Then, replace the content of your **`tailwind.config.js`** with:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Add the following lines to your **`src/index.css`**:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 5️⃣ Run the app

```bash
npm start
```

Your app will start on:

```
http://localhost:3000
```

---

## 📚 Example API Response

Example fetched data from **Open Library API**:

```json
{
  "numFound": 3,
  "docs": [
    {
      "title": "Hilarious book-titles & authors",
      "author_name": ["Peter Steele"],
      "first_publish_year": 1992
    },
    {
      "title": "A gossip on book-titles",
      "author_name": ["G. Douglas"],
      "first_publish_year": 1922
    },
    {
      "title": "Pali book-titles and their brief designations",
      "author_name": ["Charles Rockwell Lanman"],
      "first_publish_year": 1909
    }
  ]
}
```

---

## 🧩 Folder Structure

```
book-finder/
│
├── public/
│   ├── index.html
│
├── src/
│   ├── components/
│   │   └── BookCard.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── index.js
│
├── package.json
├── tailwind.config.js
└── README.md
```

---

## 💻 Screenshots

### 🔍 Search Page

<img width="1813" height="1013" alt="image" src="https://github.com/user-attachments/assets/ae49ab36-3ecb-4cb6-882d-0bef7b6967e6" />

---

## 🧑‍💻 Author

**Saran Velmurugan**
📧 [Connect on LinkedIn](https://www.linkedin.com/in/saran-velmurugan-357499238)

---

## 🪪 License

This project is licensed under the **MIT License** – free to use and modify for personal or commercial projects.

---

## 🌟 Contributing

Contributions are always welcome!
If you'd like to contribute:

1. Fork the repo
2. Create your feature branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m 'Added new feature'`)
4. Push to your branch (`git push origin feature-name`)
5. Submit a pull request 🚀

---

## 🖤 Acknowledgments

* [Open Library API](https://openlibrary.org/dev/docs/api/search)
* [Tailwind CSS Documentation](https://tailwindcss.com/docs/installation)
* [React Docs](https://react.dev/)

---

## 🏁 Project Status

✅ **Status:** Completed
🚀 **Version:** 1.0.0
📅 **Last Updated:** October 2025
