# 🌍 Currency Tracker

Currency Tracker is a simple and responsive web application that allows users to convert between 70+ global currencies in real-time. Built with HTML, CSS, and JavaScript, and powered by the [Fixer API](https://apilayer.com/marketplace/fixer-api), this app delivers fast and reliable currency exchange information through a clean and mobile-friendly UI.

---

## ✨ Features

* ✅ Convert between **70+ global currencies**
* 🔁 Instantly **swap currencies** with one click
* 📈 View real-time exchange rates for each conversion
* 🔎 Responsive, mobile-friendly, and accessible UI
* ✨ Sleek and simple design using **Font Awesome** icons
* ⚡ Built using pure JavaScript + Fixer API for live data

---

## ⚖️ Architecture

* **Frontend**: HTML5, CSS3, JavaScript (Vanilla JS)
* **API**: Fixer.io REST API for fetching latest exchange rates
* **Hosting**: Works locally or can be deployed to GitHub Pages / Netlify / AWS S3

### Data Flow

1. User inputs amount and selects currencies
2. App fetches real-time rates using Fixer API
3. Conversion calculated based on rates
4. Swapping currencies recalculates result immediately
5. Errors are handled gracefully and shown on screen

---

## 🌐 Technologies Used

* HTML5
* CSS3
* JavaScript (ES6+)
* [Fixer.io API](https://apilayer.com/marketplace/fixer-api)
* [Font Awesome](https://fontawesome.com/) for icons

---

## 📁 Project Structure

```
currency-tracker/
├── index.html         # Main webpage
├── style.css          # Styling and layout
├── script.js          # JavaScript logic and API handling
└── README.md          # Project documentation
```

---

## 🏛️ How It Works

* Populate dropdowns with a list of 70+ currencies
* Perform conversion based on Fixer API rates
* Swap currency logic implemented for user convenience
* Conversion result + rate info is shown below the form

---

## 📷 Screenshots



---

## 🧠 Future Enhancements

* 📉 Add historical exchange rate charts (line graph)
* 🌚 Dark mode / Light mode toggle
* 📦 Package as a PWA for offline usage
* 🏠 Deploy on GitHub Pages / Netlify

---

## 🙏 Acknowledgements

* [Fixer.io](https://apilayer.com/marketplace/fixer-api) – for providing free exchange rate API
* [Font Awesome](https://fontawesome.com/) – for icon support
* Inspiration from various open-source currency converters on GitHub

---

## ✉️ License

This project is open-source and free to use for educational and personal purposes. Commercial use is allowed with proper attribution.
