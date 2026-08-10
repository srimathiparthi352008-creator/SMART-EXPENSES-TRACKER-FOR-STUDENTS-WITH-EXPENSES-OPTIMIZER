function addExpense() {
    const expense = prompt("Enter expense name:");
    
    if (expense === null || expense.trim() === "") {
        return;
    }

    const amount = prompt("Enter amount:");
    
    if (amount === null || amount.trim() === "") {
        return;
    }

    alert("Expense added successfully!\n\nExpense: " + expense + "\nAmount: ₹" + amount);
}
