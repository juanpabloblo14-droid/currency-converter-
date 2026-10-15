//DOM ELEMENTS 
const amountInput = document.getElementById("amountInput");
const fromCurrency = document.getElementById("fromcurrency");
const toCurrency = document.getElementById("tocurrency");
const convertBtn = document.getElementById("convertBtn");
const resultDisplay = document.getElementById("resultText");

//CONVERT BUTTON 
convertBtn.addEventListener("click", function(){
    let amount = Number(amountInput.value);
    let from = fromCurrency.value;
    let to = toCurrency.value;
});

//API FETCH
fetch(`https://api.frankfurter.dev/v1/latest?base=${USD}&symbols=${EUR}`)
    .then(function(response){
        if(!response.ok)
    })