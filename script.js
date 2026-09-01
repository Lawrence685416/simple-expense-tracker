let expenseEntry = document.getElementsByClassName("entries");
let addButton = document.querySelector(".add-button");

let expenseList = [];

console.log(expenseList);

addButton.addEventListener("click", function () {
  let itemInput = document.getElementById("item").value;
  let amountInput = Number(document.getElementById("amount").value);

  let newExpense = {
    name: itemInput,
    amount: amountInput,
  };

  expenseList.push(newExpense);
  calculateTotal();

  document.getElementById("item").value = "";
  document.getElementById("amount").value = "";
});

function calculateTotal() {
  let totalExpense = 0;

  for (let expense of expenseList) {
    totalExpense += expense.amount;
  }

  document.getElementById("total").innerHTML = `₦${totalExpense}`;

  let expenseHTML = expenseList.map(function (expense, index) {
    return `
      <div class="sub-entry">
        <p>${expense.name}</p>

        <div class="sep">
          <p>₦${expense.amount}</p>

          <button 
            class="delete-btn" 
            data-index="${index}"
            aria-label="Delete entry"
          >
            🗑️
          </button>
        </div>
      </div>
    `;
  });

  expenseEntry[0].innerHTML = expenseHTML.join("");
}

expenseEntry[0].addEventListener("click", function (event) {
  let deleteButton = event.target.closest(".delete-btn");

  if (deleteButton) {
    let index = Number(deleteButton.dataset.index);

    expenseList.splice(index, 1);

    calculateTotal();
  }
});

calculateTotal();