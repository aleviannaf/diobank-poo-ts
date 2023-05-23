import { DioAccount } from "./DioAccount";

export class NewAccount extends DioAccount{
    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }

    deposit = (countDeposit: number): void => {
        if(this.validateStatus()){
          this.balance += countDeposit + 10
          console.log('Voce depositou:',countDeposit)
        }
      }
}