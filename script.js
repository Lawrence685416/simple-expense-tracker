let expenseForm = document.querySelector(".input-field");
let expenseName = document.querySelector("#item");
let expenseAmount = document.querySelector("#amount");
let expenseList = document.querySelector(".sub-entry");
let total = document.querySelector("#total");
let addExpense = document.querySelector(".add-button");

addExpense.addEventListener("click", function () {
  let name = expenseName.value;
  let amount = expenseAmount.value;

 expenseList.innerHTML += `
    <div class="sub-entry">
        <p>${name}</p>

        <div class="sep">
            <p>$${amount}</p>
            <button class="delete-btn" aria-label="Delete entry">
                🗑️
            </button>
        </div>
    </div>
`;
});
