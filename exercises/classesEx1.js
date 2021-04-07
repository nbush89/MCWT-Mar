class BankAccount{
    constructor(balance, interestRate){
        this.balance = balance;
        this.interestRate = interestRate;
    }

    addInterest(){
        //this should add interest but I can't figure out the math
        this.balance = this.balance * (1 + this.interestRate);
        //this.balance + this.balance * this.interestRate
        //a * (1 + b) = a + ab
    }
}

class BankAccountWithFee extends BankAccount{
    constructor(balance, interestRate, fee){
        super(balance, interestRate);
        this.fee = fee;
    }
    
    applyFee(){
        this.balance = this.balance - this.fee;
    }
}

let account = new BankAccount(100, .1);
let account1 = new BankAccount(100, .1);
let feeAccount = new BankAccountWithFee(100, .1, 5);
account.addInterest();
console.log(account);
feeAccount.addInterest();
feeAccount.applyFee();
console.log(feeAccount);
