function convertCurrency() {
    const amount = parseFloat(document.getElementById("amount").value);
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;

    // You would typically fetch exchange rates from an API here.
    // For simplicity, we'll use fixed rates.
    const exchangeRate = {
        USD: {
            INR:83.41,
            EUR: 0.95,
            GBP: 0.82
        },
        INR :{
            USD:0.012,
            EUR:0.011,
            GBP:0.099
        },
        EUR: {
            USD: 1.06,
            INR :88.25,
            GBP: 0.87
        },
        GBP: {
            USD: 1.21 ,
            INR:101.16,
            EUR: 1.15
        }
    };

    const convertedAmount = amount * exchangeRate[fromCurrency][toCurrency];

    document.getElementById("result").value = convertedAmount.toFixed(2);
}



