function convert() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('from').value;
    const toCurrency = document.getElementById('to').value;
  
    fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
      .then(response => response.json())
      .then(data => {
        const exchangeRate = data.rates[toCurrency];
        const convertedAmount = amount * exchangeRate;
        document.getElementById('convertedAmount').value = convertedAmount.toFixed(2);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  