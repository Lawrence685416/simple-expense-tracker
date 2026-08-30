let expenseForm = document.querySelector(".input-field");
let expenseName = document.querySelector("#item");
let expenseAmount = document.querySelector("#amount");
let expenseList = document.querySelector(".entries");
let total = document.querySelector("#total");
let addExpense = document.querySelector(".add-button");
let totalAmount = 0;

addExpense.addEventListener("click", function () {
  let name = expenseName.value;
  let amount = Number(expenseAmount.value);

  totalAmount = totalAmount + amount;
  total.innerHTML = totalAmount;

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

expenseList.addEventListener("click", function (event) {

    let deleteButton = event.target.closest(".delete-btn");

    if (deleteButton) {
        let amountText = deleteButton.parentElement.querySelector("p").textContent;

        let amount = Number(amountText.replace("$", ""));

        totalAmount -= amount;

        total.innerHTML = totalAmount;

        deleteButton.parentElement.parentElement.remove();
    }

});