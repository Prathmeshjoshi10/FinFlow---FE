import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddIncomeComponent } from './components/add-income/add-income.component';
import { IncomeAnalysisComponent } from './components/income-analysis/income-analysis.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'add-income', component: AddIncomeComponent },
  { path: 'add-expense', component: AddIncomeComponent },
  { path: 'income-analysis', component: IncomeAnalysisComponent },
  { path: 'sign-in', component: LoginComponent },
  { path: 'sign-up', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
