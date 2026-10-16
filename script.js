//DOM ELEMENTS 
const amountInput = document.getElementById("amountinput");
const fromCurrency = document.getElementById("fromcurrency");
const toCurrency = document.getElementById("tocurrency");
const convertBtn = document.getElementById("convertbtn");
const resultDisplay = document.getElementById("resulttext");

//CONVERT BUTTON 
convertBtn.addEventListener("click", function () {
    let amount = Number(amountInput.value);
    let from = fromCurrency.value;
    let to = toCurrency.value;
    //API FETCH
    fetch(`https://api.frankfurter.dev/v1/latest?base=${from}&symbols=${to}`)
        .then(function (response) {
            if (!response.ok) {
                throw new Error("bad response");
            }
            return response.json();
        })
        .then(function (data) {
            let rate = data.rates[to];
            let converted = amount * rate;
            resultDisplay.textContent = `${amount} ${from} = ${converted.toFixed(2)} ${to}`;
        })
        .catch(function () {
            resultDisplay.textContent = "couldn't get the rate, try again";
        });
});