export {
  entries,
  exit,
  total,
  description,
  amount,
  income,
  expense,
  submit,
  descriptionResult,
  amountResult,
  typeResult,
  ButtonDelete,
};

const entries = document.querySelector("#entries");
const exit = document.querySelector("#exit");
const total = document.querySelector("#total");
const description = document.querySelector("#transactionDescription");
const amount = document.querySelector("#transactionAmount");
const income = document.querySelector("#income");
const expense = document.querySelector("#expense");
const submit = document.querySelector("#submit");
const descriptionResult = document.querySelector("#descriptionResult");
const amountResult = document.querySelector("#amountResult");
const typeResult = document.querySelector("#typeResult");
const ButtonDelete = document.querySelectorAll(".buttonDelete");
