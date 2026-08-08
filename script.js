document.addEventListener("DOMContentLoaded", function () {

    const addExpenseButton = document.querySelector("button");

    addExpenseButton.addEventListener("click", function () {

        const expenseName = prompt("Enter expense name:");

        if (expenseName === null || expenseName.trim() === "") {
            return;
        }

        const amount = prompt("Enter expense amount:");

        if (amount === null || amount.trim() === "") {
            return;
        }

        const expenseAmount = Number(amount);

        if (isNaN(expenseAmount) || expenseAmount <= 0) {
            alert("Please enter a valid amount.");
            return;
        }

        const category = prompt("Enter expense category:");

        if (category === null || category.trim() === "") {
            return;
        }

        const expense = {
            name: expenseName.trim(),
            amount: expenseAmount,
            category: category.trim(),
            date: new Date().toLocaleDateString()
        };

        let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

        expenses.push(expense);

        localStorage.setItem("expenses", JSON.stringify(expenses));

        alert(
            "Expense added successfully!\n\n" +
            "Name: " + expense.name + "\n" +
            "Amount: ₹" + expense.amount + "\n" +
            "Category: " + expense.category
        );
    });

});
