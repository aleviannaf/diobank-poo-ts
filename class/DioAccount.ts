export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

 /*  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  } */

  getName = (): string => {
    return this.name
  }

  deposit = (countDeposit: number): void => {
    if(this.validateStatus()){
      this.balance += countDeposit
      console.log('Voce depositou:',countDeposit)
    }
  }

  withdraw = (withdrawal: number): void => {
    if(this.validateStatus() && this.validateWithdraw(withdrawal)){
      this.balance -= withdrawal
      console.log('Voce sacou: ',withdrawal)
    } else{
      console.log('Saldo insuficiente ou conta não ativa') 
    }
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  private validateWithdraw = (withdrawal: number): boolean =>{
    if(withdrawal > this.balance){
      return false
    }
    return true
  }

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
