import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'

//const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
//console.log(peopleAccount)
//peopleAccount.deposit(50)
//peopleAccount.withdraw(70)

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(10)
//console.log(companyAccount)
companyAccount.getLoan(5000)
companyAccount.getBalance()