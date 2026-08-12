let expenses = [
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
];

let monthlyBudget = 0;
function updateTotal() {
    let total = 0;

    expenses.forEach(function(expense) {
        total += Number(expense.amount);
    });

    document.getElementById("total-expenses").textContent = total;
document.getElementById("remaining-budget").textContent = monthlyBudget - total;
}

function displayExpenses() {
    let history = document.getElementById("expense-history");

    history.innerHTML = "";

    expenses.forEach(function(expense) {
        history.innerHTML += `
            <div class="expense-item">
                <h3>${expense.name}</h3>
                <p>Amount: ₹${expense.amount}</p>
                <p>Category: ${expense.category}</p>
                <p>Date: ${expense.date}</p>
            </div>
            <hr>
        `;
    });
}

function addExpense() {
    let name = prompt("Enter expense name:");

    if (!name) {
        return;
    }

    let amount = prompt("Enter amount:");

    if (!amount || isNaN(amount)) {
        alert("Please enter a valid amount.");
        return;
    }

    let category = prompt("Enter category:");

    if (!category) {
        return;
    }

    let date = prompt("Enter date (DD/MM/YYYY):");

    if (!date) {
        return;
    }

    expenses.push({
        name: name,
        amount: Number(amount),
        category: category,
        date: date
    });

    updateTotal();
    displayExpenses();
}

updateTotal();
displayExpenses();
