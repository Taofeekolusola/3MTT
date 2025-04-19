function createBankAccount(owner, initialBalance) {
    let balance = initialBalance; // private variable
  
    return {
      owner,
      deposit(amount) {
        balance += amount;
        console.log(`Deposited $${amount}. New balance: $${balance}`);
      },
      withdraw(amount) {
        if (amount > balance) {
          console.log('Insufficient funds.');
          return;
        }
        balance -= amount;
        console.log(`Withdrew $${amount}. New balance: $${balance}`);
      },
      getBalance() {
        return balance;
      }
    };
  }
  
  const account = createBankAccount('Jane Doe', 1000);
  account.deposit(500); // Deposited $500. New balance: $1500
  console.log(account.getBalance()); // 1500
  console.log(account.balance); // undefined (private!)