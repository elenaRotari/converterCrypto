import "./style.scss";
const btn = document.querySelector(".btnConvert");
const amount = document.querySelector(".showAmount");
const multiply = document.querySelector(".multiply");
const countAmount = (crypto, currency) => {
  fetch(`https://api.coinbase.com/v2/prices/${crypto}-${currency}/buy`)
    .then((response) => response.json())
    .then(({ data }) => {
      amount.value = parseInt(data.amount) * parseInt(multiply.value);
    });
};
btn.addEventListener("click", () => {
  const crypto = document.querySelector(".crypto").value;
  const currency = document.querySelector(".currency").value;

  countAmount(crypto, currency);
});
