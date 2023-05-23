import { CompanyAccount } from './class/CompanyAccount'
import { NewAccount } from './class/NewAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount)
peopleAccount.deposit(50)
peopleAccount.withdraw(70)
peopleAccount.getBalance()

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(10)
companyAccount.getLoan(5000)
companyAccount.getBalance()

const newAccount: NewAccount = new NewAccount("Alexandre", 30)
newAccount.deposit(30)
newAccount.getBalance()