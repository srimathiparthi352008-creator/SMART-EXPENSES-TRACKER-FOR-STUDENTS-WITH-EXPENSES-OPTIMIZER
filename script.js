let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

function addExpense() {
    const expense = prompt("Enter expense name:");

    if (!expense || expense.trim() === "") {
        return;
    }

    const amount = prompt("Enter amount:");

    if (!amount || isNaN(amount) || Number(amount) <= 0) {
        alert("Please enter a valid amount.");
        return;
    }

    const category = prompt("Enter category:");

    if (!category || category.trim() === "") {
        return;
    }

    const newExpense = {
        name: expense.trim(),
        amount: Number(amount),
        category: category.trim(),
        date: new Date().toLocaleDateString()
    };

    expenses.push(newExpense);

    localStorage.setItem("expenses", JSON.stringify(expenses));

    displayExpenses();
}
const total = expenses.reduce(function(sum, expense) {
    return sum + expense.amount;
}, 0);

document.getElementById("totalExpenses").textContent = total;
function displayExpenses() {
    const expenseList = document.getElementById("expenseList");

    if (!expenseList) {
        return;
    }

    expenseList.innerHTML = "";

    if (expenses.length === 0) {
        expenseList.innerHTML = "<p>No expenses added yet.</p>";
        return;
    }

    expenses.forEach(function(expense) {
        const item = document.createElement("div");

        item.innerHTML =
            "<p><strong>" + expense.name + "</strong></p>" +
            "<p>Amount: ₹" + expense.amount + "</p>" +
            "<p>Category: " + expense.category + "</p>" +
            "<p>Date: " + expense.date + "</p>" +
            "<hr>";

        expenseList.appendChild(item);
    });
}

displayExpenses();
