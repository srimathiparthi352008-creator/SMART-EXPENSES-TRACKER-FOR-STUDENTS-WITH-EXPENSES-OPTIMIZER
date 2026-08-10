let expenses = [];

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

    expenses.push({
        name: expense,
        amount: Number(amount),
        category: category,
        date: new Date().toLocaleDateString()
    });

    displayExpenses();
}

function displayExpenses() {
    const expenseList = document.getElementById("expenseList");

    expenseList.innerHTML = "";

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
