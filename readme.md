# 📝 Build a Random Quote Generator with JavaScript – Project Walkthrough

## 🚀 Project Overview

This project is a **Random Quote Generator** built using HTML, CSS, and JavaScript. It fetches quotes from an API and displays them to users. You can click the **"New Quote"** button to see a different quote each time.

It’s a great project for beginners to learn how to **fetch data from an API**, **manipulate the DOM**, and **work with event listeners**. In this walkthrough, we’ll break down the code, explain each section, and suggest possible enhancements.

---
### 🔗 GitHub Source Code: [Random Quote Generator GitHub Repository](https://github.com/PoonamChauhan229/Random-Quote-Generator-Js-Projects)
### 🌐 Live Demo: [Random Quote Generator Live Demo](https://poonamchauhan229.github.io/Random-Quote-Generator-Js-Projects/)


## 📁 Project Structure

```
To-Do-List-Js-Projects/
├── index.html       → Contains the structure and layout of the app.
├── style.css        → Provides styling for the to-do list.
└── script.js        → Contains JavaScript logic to handle tasks.
```

---

## 🔧 `index.html` – Layout and Structure

---

### `<body>` and `.wrapper` Wrapper

```html
<body>
  <div class="wrapper">
```
- The <body> tag contains all the visible content of the webpage.
- The .wrapper class serves as the main container for all components, ensuring a styled and centered layout.

---

### `.heading` – App Title

```
    <div class="heading">QuoteNest</div>
```
- Displays the main title of the app.
- Helps brand the application as a source of motivational quotes.

---

### `.quote` – Quote Display Area
```
    <div class="quote" id="quote">Fetching inspiration...</div>
```
- Area dedicated to displaying a random quote.
- Initially shows a loading message that is replaced dynamically using JavaScript.

---

### `.author` – Author Name

```
    <div class="author" id="author">—</div>
```
- Displays the author of the quote.
- Starts as a placeholder and updates when a quote is fetched.

---

### `#new-quote` – Generate Quote Button

```
<button class="btn" id="new-quote">New Quote</button>
```
- A button that allows users to fetch a new random quote.
- Connected to a JavaScript function in script.js.

---

### `External Resources`
```
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600&display=swap" rel="stylesheet">
```
- Google Fonts: Loads the Outfit font for custom styling.

---

## 🎨 `style.css` – Styling the Application

---

### 🌐 Global Reset and Box Model

- Removes default browser spacing.
- Sets consistent box sizing across elements.

```
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```
### `🧱 Body Styling`
- Sets a dark background for a modern look.
- Centers content using Flexbox.
- Applies the Outfit font for clean typography.
- Adds padding for mobile spacing support.

```
body {
  background-color: #0f0f0f;
  color: #e4e4e4;
  font-family: 'Outfit', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
}
```
---

###`📦 .wrapper – Main Container`
- Core layout container for the quote app.
- Styled with a dark card appearance and rounded corners.
- Includes padding, max width, and shadow for depth.

```
.wrapper {
  background: #181818;
  border: 1px solid #2a2a2a;
  padding: 40px 30px;
  border-radius: 20px;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
  text-align: center;
}
```
---

### 🏷️ .heading – App Title`
- Displays the title “QuoteNest”.
- Uses a bold, bright style with margin spacing.

```
.heading {
  font-size: 1.8rem;
  margin-bottom: 30px;
  color: #ffffff;
  font-weight: 600;
}

```
---

### `📝 .quote – Quote Text Display`
- Main area for inspirational quotes.
- Styled with a light color and comfortable line height.

```
.quote {
  font-size: 1.4rem;
  margin-bottom: 20px;
  color: #f1f1f1;
  line-height: 1.5;
}
```
---

### `✍️ .author – Author Name Display`
- Smaller font for quote attribution.
- Light gray color for subtle emphasis.

```
.author {
  font-size: 1rem;
  color: #a0a0a0;
  margin-bottom: 30px;
}
```
---

### `🔘 .btn – New Quote Button`
- Button with dark theme and hover effect.
- Includes smooth transitions and padding.

```
.btn {
  background: #232323;
  border: 1px solid #3a3a3a;
  color: #ffffff;
  padding: 12px 28px;
  border-radius: 12px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn:hover {
  background-color: #323232;
  transform: translateY(-1px);
}
```
---

### `📱 Responsive Design (Mobile Optimization)`
- Adjusts padding and font sizes for smaller screens.
- Ensures readability on devices under 500px width.

```
@media (max-width: 500px) {
  .wrapper {
    padding: 30px 20px;
  }

  .quote {
    font-size: 1.2rem;
  }

  .heading {
    font-size: 1.5rem;
  }
}

```
---

### `🧠 script.js – JavaScript Functionality`

### `const quoteText = document.getElementById("quote");`
- Selects the HTML element where the quote text will be displayed.

### `const authorText = document.getElementById("author");`
- Selects the HTML element where the author's name will appear.

### `const btn = document.getElementById("new-quote");`
- Targets the button that fetches a new quote when clicked.

```
    const quoteText = document.getElementById("quote");
    const authorText = document.getElementById("author");
    const btn = document.getElementById("new-quote");
```
---

### `let quotes = [];`
- Declares an empty array to store fetched quotes from the API.

```
    let quotes = [];
```
---

### `async function fetchQuotes()`
- Purpose: Fetches quotes from an external API (https://dummyjson.com/quotes).
- Uses async/await for asynchronous data fetching.
- On success, it saves quotes to the quotes array and shows one randomly.
- On error, shows an error message on the page.

```
    async function fetchQuotes() {
      try {
        const res = await fetch("https://dummyjson.com/quotes");
        const data = await res.json();
        quotes = data.quotes;
        showQuote();
      } catch (err) {
        quoteText.textContent = "Unable to load quote.";
        authorText.textContent = "";
      }
    }
```
---

### `function showQuote()`
- Purpose: Picks a random quote from the quotes array.
-Updates the quote and author elements on the page.

```
    function showQuote() {
      const random = quotes[Math.floor(Math.random() * quotes.length)];
      quoteText.textContent = `"${random.quote}"`;
      authorText.textContent = `— ${random.author}`;
    }
```
---

### `btn.addEventListener("click", showQuote);`
- Purpose: Adds a click event listener to the button.
- On click, it shows a new random quote.

```
    btn.addEventListener("click", showQuote);
```
---

### `fetchQuotes();`
Purpose: Immediately fetches quotes when the script loads.

```
    fetchQuotes();
```
---
## ✅ Summary of Functions:
1. `fetchQuotes()` – Fetch quotes from the API and populate the quotes array.
2. `showQuote()` – Display a random quote and author.
3. `btn.addEventListener("click", showQuote)` – Refresh the displayed quote when the "New Quote" button is clicked.

---

## ✨ Features

| Feature            | Description                                       |
|--------------------|---------------------------------------------------|
| Random Quote       | Displays a random quote and its author each time  |
| Fetch API Data     | Retrieves quotes from an external API             |
| New Quote Button   | Clicking the button loads a new random quote      |
| Error Handling     | Displays an error message if the API fails to load |

---

## 💾 Data Persistence

- In this version, quotes are fetched dynamically from the `https://dummyjson.com/quotes` API and are not stored persistently. The quotes refresh every time the button is clicked or the page is loaded.

---

## 🏁 Conclusion

This Random Quote Generator project is a great introduction to **fetching data from an API**, handling **events** with JavaScript, and **manipulating the DOM** dynamically. It provides a fun and interactive way to learn how to interact with external data.

Enhancements like storing quotes locally, adding categories, or even implementing a share feature could further improve the app.

> 💻 [Check out the full project on GitHub](https://poonamchauhan229.github.io/Random-Quote-Generator-Js-Projects/)









