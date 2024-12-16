
function calculateTax(income, expenses) {

    if (income < 0 || expenses < 0 || expenses > income) {
        return "Invalid Input";
    }
    else {
        const left = income - expenses;
        const tax = left * (20 / 100);
        return tax;
    }
}

const output = calculateTax(5000, 6000);
console.log(output);