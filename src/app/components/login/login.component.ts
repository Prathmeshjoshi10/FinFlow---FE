import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  maxDate = new Date();
  signInUpForm!: FormGroup;
  isEditable: boolean = false;
  isForView: boolean = false;
  isSignIn: boolean = false;

  constructor(private fb: FormBuilder, private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    const currentPath = this.router.url;
    console.log('currentPath --->', currentPath);
    currentPath.includes('sign-in') ? (this.isSignIn = true) : false;
    
    this.signInUpForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    const formData = this.signInUpForm.value;

      console.log('formData ---->', formData);

      this.userService.signInUp(formData, this.isSignIn).subscribe((res: any) => {
        console.log('Res :::', res);
        localStorage.setItem('user', res.user.email);
        localStorage.setItem('accessToken', res.token);
      })
  }
  onClose() {}
}
