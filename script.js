    const quoteText = document.getElementById("quote");
    const authorText = document.getElementById("author");
    const btn = document.getElementById("new-quote");

    let quotes = [];

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

    function showQuote() {
      const random = quotes[Math.floor(Math.random() * quotes.length)];
      quoteText.textContent = `"${random.quote}"`;
      authorText.textContent = `— ${random.author}`;
    }

    btn.addEventListener("click", showQuote);
    fetchQuotes();