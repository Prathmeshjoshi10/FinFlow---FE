import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class IncomeExpenseService {
  private apiBaseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  add(formData: any, isExpense: boolean) {
    console.log('formData:::', formData);
    
    const reqUrl = isExpense
      ? this.apiBaseUrl + 'expense/create'
      : this.apiBaseUrl + 'income/create';
    return this.http.post(reqUrl, formData);
  }
}
