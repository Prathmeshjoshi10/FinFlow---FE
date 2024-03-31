import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiBaseUrl = environment.apiBaseUrl;


  constructor(private http: HttpClient) { }

  signInUp(formData: any, isSignIn: boolean) {
    console.log('formData:::', formData);
    console.log('isSignIN=-=->', isSignIn);
    
    const reqUrl = isSignIn
      ? this.apiBaseUrl + 'users/login'
      : this.apiBaseUrl + 'users/register';  
    return this.http.post(reqUrl, formData);
  }

}
