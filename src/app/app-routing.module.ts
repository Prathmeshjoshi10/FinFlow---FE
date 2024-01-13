import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddIncomeComponent } from './components/add-income/add-income.component';
import { IncomeAnalysisComponent } from './components/income-analysis/income-analysis.component';

const routes: Routes = [
  { path: 'add-income', component: AddIncomeComponent },
  { path: 'add-expense', component: AddIncomeComponent },
  {path: 'income-analysis', component: IncomeAnalysisComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
