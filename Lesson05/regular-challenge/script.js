let balance = 0;
let isLooping = true;

function promptForInput() {
  if (balance < 300) alert(`Warning: Your balance is less than $300.`);
  isLooping = true;
  while (isLooping) {
    const input = prompt(`What would you like to do?
  B= Balance
  D= Deposit
  W= Withdrawal
  Q= Quit`);
    switch (input.toUpperCase()) {
      case "B":
        showBalance();
        break;
      case "D":
        handleDeposit();
        break;
      case "W":
        handleWithdrawl();
        break;
      case "Q":
      case undefined:
        handleQuit();
        break;
    }
  }
}

function showBalance() {
  alert(`Your balance is $${balance}.`);
}

function handleQuit() {
  isLooping = false;
}

function handleWithdrawl() {
  const withdrawalAmount = Number(prompt("Withdrawal amount: "));

  if (isNaN(withdrawalAmount)) {
    alert(`Not a valid withdrawal amount. Please try again.`);
    return handleWithdrawl();
  }

  const newBalance = (balance - withdrawalAmount);

  if (newBalance < 0) {
    alert("You have insufficient funds. Please try another amount.");
    return handleWithdrawl();
  }

  if (newBalance < 300) {
    const isSure = confirm("Are you sure? Your balance will be below $300.");
    if (!isSure) return;
  }

  balance = newBalance;
  showBalance();
}

function handleDeposit() {
  const depositAmount = Number(prompt("Deposit amount: "));

  if (isNaN(depositAmount)) {
    alert(`${depositAmount} is not a valid Deposit amount. Please try again.`);
    return handleDeposit();
  }

  const newBalance = (balance + depositAmount);

  if (depositAmount > 50000) {
    alert("Your deposit limit is $50,000. Please try another amount");
    return handleDeposit();
  }

  balance = newBalance;
  showBalance();
}
