import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {
  private balance_loan: number = 0

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (valueLoan: number): void => {
    if(this.validateStatus()){
      this.balance += valueLoan
      this.balance_loan += valueLoan
      console.log('Voce pegou um empréstimo de: ',valueLoan)
    }
   
  }
}
