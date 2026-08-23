let expenses = JSON.parse(localStorage.getItem("expenses")) || [
    {
        name: "college canteen",
        amount: 50,
        category: "food",
        date: "10/08/2026"
    },
    {
        name: "bus",
        amount: 30,
        category: "transport",
        date: "12/08/2026"
    }
];

let monthlyBudget = Number(localStorage.getItem("monthlyBudget")) || 0;

function updateTotal() {
    let total = 0;

    expenses.forEach(function(expense) {
        total += Number(expense.amount);
    });

    document.getElementById("total-expenses").textContent = total;
    document.getElementById("monthly-budget").textContent = monthlyBudget;
    document.getElementById("remaining-budget").textContent =
        monthlyBudget - total;
}

function displayExpenses() {
    let history = document.getElementById("expense-history");

    history.innerHTML = "";

    expenses.forEach(function(expense, index)  {
        history.innerHTML += `
            <div class="expense-item">
                <h3>${expense.name}</h3>
                <p>Amount: ₹${expense.amount}</p>
                <p>Category: ${expense.category}</p>
                <p>Date: ${expense.date}</p>
                <button onclick="deleteExpense(${index})">Delete</button>
            </div>
            <hr>
        `;
    });
}

function addExpense() {
    let name = prompt("Enter expense name:");

    if (name === null || name.trim() === "") {
        return;
    }

    let amount = prompt("Enter amount:");

    if (amount === null || amount.trim() === "" || isNaN(amount)) {
        alert("Please enter a valid amount.");
        return;
    }

    let category = prompt("Enter category:");

    if (category === null || category.trim() === "") {
        return;
    }

    let date = prompt("Enter date (DD/MM/YYYY):");

    if (date === null || date.trim() === "") {
        return;
    }

    expenses.push({
        name: name.trim(),
        amount: Number(amount),
        category: category.trim(),
        date: date.trim()
    });

    localStorage.setItem("expenses", JSON.stringify(expenses));

    updateTotal();
    displayExpenses();

    alert("Expense added successfully!");
}

function setBudget() {
    let budget = prompt("Enter your monthly budget:");

    if (budget === null || budget.trim() === "" || isNaN(budget)) {
        alert("Please enter a valid budget.");
        return;
    }

    monthlyBudget = Number(budget);

    localStorage.setItem("monthlyBudget", monthlyBudget);

    updateTotal();

    alert("Monthly budget saved successfully!");
}

updateTotal();
displayExpenses();
document.getElementById("add-expense-button").onclick = addExpense;
function updateOptimizer() {
    let total = 0;

    expenses.forEach(function(expense) {
        total += Number(expense.amount);
    });

    let message = "";

    if (monthlyBudget === 0) {
        message = "Please set your monthly budget first.";
    } else {
        let percentage = (total / monthlyBudget) * 100;

        if (percentage >= 80) {
            message = "⚠️ You have used most of your budget. Try to reduce unnecessary spending.";
        } else if (percentage >= 50) {
            message = "💡 You have used half of your budget. Keep track of your spending.";
        } else {
            message = "✅ Your spending is under control. Keep saving!";
        }
    }

    document.getElementById("optimizer-message").textContent = message;
}


updateOptimizer();
function deleteExpense(index) {
    expenses.splice(index, 1);

    localStorage.setItem("expenses", JSON.stringify(expenses));

    updateTotal();
    displayExpenses();
    updateOptimizer();
}

