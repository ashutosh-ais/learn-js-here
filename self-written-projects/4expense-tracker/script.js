document.addEventListener("DOMContentLoaded", () => {
  const expenseForm = document.getElementById("expense-form");
  const expenseNameInput = document.getElementById("expense-name");
  const expenseAmountInput = document.getElementById("expense-amount");
  const expenseList = document.getElementById("expense-list");
  const totalAmountDisplay = document.getElementById("total-amount");

  let expenses = [];
  let totalAmount = calculateTotal();

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
});
