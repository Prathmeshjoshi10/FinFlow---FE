import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';
import { Router } from '@angular/router';
import { IncomeExpenseService } from 'src/app/services/income-expense.service';

@Component({
  selector: 'app-add-income',
  templateUrl: './add-income.component.html',
  styleUrls: ['./add-income.component.css'],
})
export class AddIncomeComponent implements OnInit {
  @ViewChild('picker') picker!: MatDatepicker<any>;

  maxDate = new Date();
  addIncomeForm!: FormGroup;
  addExpenseForm!: FormGroup;
  isEditable: boolean = false;
  isForView: boolean = false;
  isAddExpense: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private ieService: IncomeExpenseService
  ) {}

  ngOnInit(): void {
    const currentPath = this.router.url;
    console.log('currentPath --->', currentPath);
    currentPath.includes('add-expense') ? (this.isAddExpense = true) : false;

    this.addIncomeForm = this.fb.group({
      incomeTitle: ['', Validators.required],
      incomeValue: ['', Validators.required],
      date: ['', Validators.required],
      tags: [''],
    });

    this.addExpenseForm = this.fb.group({
      expenseTitle: ['', Validators.required],
      expenseValue: ['', Validators.required],
      date: ['', Validators.required],
      tags: [''],
    });
  }

  onSubmit() {
    const formData = this.isAddExpense
      ? this.addExpenseForm.value
      : this.addIncomeForm.value;

    this.ieService.add(formData, this.isAddExpense).subscribe((res) => {
      console.log('res---->', res);
    });
  }
  onClose() {}
}
