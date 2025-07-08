const API_KEY = "B0iqB9Pr3W0HbNARnd7TBPR6LKmeSqYh";
const BASE_URL = "https://api.apilayer.com/fixer/latest";

const amountInput = document.getElementById("amount");
const fromCurrencySelect = document.getElementById("from-currency");
const toCurrencySelect = document.getElementById("to-currency");
const resultDiv = document.getElementById("result");
const rateInfoDiv = document.getElementById("rate-info");
const convertBtn = document.getElementById("convert-btn");
const swapBtn = document.getElementById("swap-btn");

const currencyList = {
  USD: "US Dollar", EUR: "Euro", INR: "Indian Rupee", GBP: "British Pound", JPY: "Japanese Yen",
  AUD: "Australian Dollar", CAD: "Canadian Dollar", CNY: "Chinese Yuan", SGD: "Singapore Dollar",
  NZD: "New Zealand Dollar", ZAR: "South African Rand", CHF: "Swiss Franc", AED: "UAE Dirham",
  SEK: "Swedish Krona", SAR: "Saudi Riyal", KRW: "South Korean Won", BDT: "Bangladeshi Taka",
  PKR: "Pakistani Rupee", THB: "Thai Baht", TRY: "Turkish Lira", RUB: "Russian Ruble",
  EGP: "Egyptian Pound", MYR: "Malaysian Ringgit", IDR: "Indonesian Rupiah", NOK: "Norwegian Krone",
  DKK: "Danish Krone", PLN: "Polish Zloty", TWD: "New Taiwan Dollar", ARS: "Argentine Peso",
  BRL: "Brazilian Real", CLP: "Chilean Peso", COP: "Colombian Peso", PEN: "Peruvian Sol",
  MXN: "Mexican Peso", CZK: "Czech Koruna", HUF: "Hungarian Forint", HRK: "Croatian Kuna",
  RON: "Romanian Leu", ISK: "Icelandic Krona", UAH: "Ukrainian Hryvnia", VND: "Vietnamese Dong",
  PHP: "Philippine Peso", LKR: "Sri Lankan Rupee", NPR: "Nepalese Rupee", NGN: "Nigerian Naira",
  KES: "Kenyan Shilling", GHS: "Ghanaian Cedi", QAR: "Qatari Riyal", OMR: "Omani Rial",
  BHD: "Bahraini Dinar", KWD: "Kuwaiti Dinar", MAD: "Moroccan Dirham", TND: "Tunisian Dinar",
  DZD: "Algerian Dinar", JOD: "Jordanian Dinar", IQD: "Iraqi Dinar", SYP: "Syrian Pound",
  MUR: "Mauritian Rupee", BAM: "Bosnia-Herzegovina Convertible Mark", MKD: "Macedonian Denar",
  GEL: "Georgian Lari", MDL: "Moldovan Leu", RSD: "Serbian Dinar", ALL: "Albanian Lek",
  AZN: "Azerbaijani Manat", AMD: "Armenian Dram", KZT: "Kazakhstani Tenge", UZS: "Uzbekistani Som",
  KHR: "Cambodian Riel", MMK: "Myanmar Kyat", MNT: "Mongolian Tögrög", XOF: "West African CFA Franc",
  XAF: "Central African CFA Franc"
};

// Populate dropdowns
function populateCurrencies() {
  for (const code in currencyList) {
    const option1 = new Option(`${code} - ${currencyList[code]}`, code);
    const option2 = new Option(`${code} - ${currencyList[code]}`, code);
    fromCurrencySelect.appendChild(option1);
    toCurrencySelect.appendChild(option2);
  }

  fromCurrencySelect.value = "USD";
  toCurrencySelect.value = "INR";
}

// Convert function
async function convertCurrency() {
  const amount = parseFloat(amountInput.value);
  const fromCurrency = fromCurrencySelect.value;
  const toCurrency = toCurrencySelect.value;

  if (isNaN(amount) || amount <= 0) {
    resultDiv.innerHTML = '<p class="error">Please enter a valid amount</p>';
    return;
  }

  try {
    const res = await fetch(`${BASE_URL}?symbols=${fromCurrency},${toCurrency}`, {
      headers: { apikey: API_KEY }
    });

    const data = await res.json();

    if (!data.success) {
      throw new Error(data.error?.info || "Fixer API error");
    }

    const rates = data.rates;
    const fromRate = rates[fromCurrency];
    const toRate = rates[toCurrency];

    if (!fromRate || !toRate) {
      resultDiv.innerHTML = '<p class="error">Currency not supported</p>';
      return;
    }

    const eurAmount = amount / fromRate;
    const convertedAmount = eurAmount * toRate;

    resultDiv.innerHTML = `
      <p>${amount.toFixed(2)} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}</p>
    `;

    rateInfoDiv.innerHTML = `
      <p>1 ${fromCurrency} = ${(toRate / fromRate).toFixed(6)} ${toCurrency}</p>
      <p>1 ${toCurrency} = ${(fromRate / toRate).toFixed(6)} ${fromCurrency}</p>
      <p class="update-time">Rates updated: ${new Date(data.timestamp * 1000).toLocaleString()}</p>
    `;
  } catch (error) {
    resultDiv.innerHTML = `<p class="error">Error: ${error.message}</p>`;
  }
}

// Swap currencies
swapBtn.addEventListener("click", () => {
  const temp = fromCurrencySelect.value;
  fromCurrencySelect.value = toCurrencySelect.value;
  toCurrencySelect.value = temp;
  convertCurrency();
});

// Event listener
convertBtn.addEventListener("click", convertCurrency);

// Initial
populateCurrencies();
convertCurrency();
