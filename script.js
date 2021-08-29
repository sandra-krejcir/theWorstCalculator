"use strict";

document.querySelector("#calculate").addEventListener("click", calculate);

function calculate() {
  console.log("function calculate()");
  const firstNumber = document.querySelector("#firstnumber").value;
  const numeroUno = parseFloat(firstNumber, 10);
  const secondNumber = document.querySelector("#secondnumber").value;
  const numeroDue = parseFloat(secondNumber, 10);
  const operator = document.querySelector("#operator");
  const resultScroll = document.querySelector("ul");
  const round = document.querySelector("#doround");
  const decimals = document.querySelector("#decimals").value;
  const decimalNum = parseFloat(decimals, 10);
  const newLi = document.createElement("li");
  if (operator.value === "add") {
    const result = numeroUno + numeroDue;
    if (round.checked === true) {
      result.toFixed(decimalNum);
    }
    document.querySelector("#firstnumber").value = result;
    const finalRes = document.createTextNode(result);
    newLi.appendChild(finalRes);
  } else if (operator.value === "sub") {
    const result = numeroUno - numeroDue;
    document.querySelector("#firstnumber").value = result;
    const finalRes = document.createTextNode(result);
    newLi.appendChild(finalRes);
  } else if (operator.value === "mul") {
    const result = numeroUno * numeroDue;
    document.querySelector("#firstnumber").value = result;
    const finalRes = document.createTextNode(result);
    newLi.appendChild(finalRes);
  } else {
    const result = numeroUno / numeroDue;
    document.querySelector("#firstnumber").value = result;
    const finalRes = document.createTextNode(result);
    newLi.appendChild(finalRes);
  }
  resultScroll.appendChild(newLi);
  resultScroll.scrollTo(0, 10000);
}

document.querySelector("#clear").addEventListener("click", clearResults);

function clearResults() {
  console.log("function clearResults()");
  const resultScroll = document.querySelector("ul");
  resultScroll.innerHTML = "";
  const oldResult = document.querySelector("#firstnumber").value;
  const listText = ["0", "0", "0", oldResult];
  listText.forEach((elm) => {
    const li = document.createElement("li");
    li.innerHTML = elm;
    resultScroll.appendChild(li);
  });
}
