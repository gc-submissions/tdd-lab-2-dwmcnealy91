function formatCurrency(amount) {
  if (amount === 0) {
    amount = amount.toFixed(2);
    return (amount = "$0.00");
  } else if (amount < 0) {
    //-$${Math.abs(amount)} have to delete line 3 for it to work
    amount = amount * -1;
    amount = amount.toFixed(2);
    amount = "-$" + amount;
    return amount;
  } else if (amount > 0) {
    amount = amount.toFixed(2);
    amount = "$" + amount;
    return amount;
  }
  console.log(amount);
}

module.exports = formatCurrency;
