import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  reason;
  amount;
  expenses =[];
  totalExpense=0.0;

  constructor() {}
  onSubmitExpense(expense){
    console.log('expense reason: ',expense.reason);
    console.log('expense amount: ',expense.amount);
    if(expense.amount && expense.reason){
      this.expenses.push({reason:this.reason,amount:this.amount});
     this.totalExpense+= this.amount; 
     this.onClear()
    }
  }
  onClear(){
    this.reason = '';
    this.amount = '';
  }

}
