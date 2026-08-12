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

function updateTotal() {
    let total = 0;

    expenses.forEach(function(expense) {
        total += Number(expense.amount);
    });

    document.getElementById("total-expenses").textContent =
        "Total Expenses: ₹" + total;
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
        `;
    });
}

updateTotal();
displayExpenses();
