document.addEventListener("DOMContentLoaded", () => {
  const expenseForm = document.getElementById("expense-form");
  const expenseNameInput = document.getElementById("expense-name");
  const expenseAmountInput = document.getElementById("expense-amount");
  const expenseList = document.getElementById("expense-list");
  const totalAmountDisplay = document.getElementById("total-amount");

  let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
  let totalAmount = calculateTotal();

  renderExpenses();

  expenseForm.addEventListener("submit", (e) => {
    e?.preventDefault();
    const name = expenseNameInput?.value?.trim();
    const amount = parseInt(expenseAmountInput?.value?.trim());
    if (name != "" && !isNaN(amount) && amount > 0) {
      const newExpense = {
        id: Date.now(),
        name,
        amount,
      };
      expenses?.push(newExpense);
      saveExpensesToLocal();
      renderExpenses();
      updateTotal();

      // Clear input
      expenseNameInput.value = "";
      expenseAmountInput.value = "";
    }
  });

  function calculateTotal() {
    return expenses?.reduce((acc, curr, index, array) => {
      return acc + curr.amount;
    }, 0);
  }

  function saveExpensesToLocal() {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }

  function updateTotal() {
    totalAmount = calculateTotal();
    totalAmountDisplay.textContent = `${totalAmount?.toFixed(2)}`;
  }

  function renderExpenses() {
    expenseList.innerHTML = "";
    expenses.forEach((expense) => {
      const li = document.createElement("li");
      li.innerHTML = `
        ${expense.name} - ₹${expense.amount}
        <button data-expense-id=${expense.id}>Delete</button>
      `;
      expenseList.appendChild(li);
    });
    updateTotal();
  }

  expenseList.addEventListener("click", (e) => {
    console.log("first");
    if (e.target.tagName === "BUTTON") {
      const expenseId = parseInt(e.target.dataset.expenseId);
      expenses = expenses.filter((item) => item?.id != expenseId);
    }
    saveExpensesToLocal();
    renderExpenses();
  });
});
