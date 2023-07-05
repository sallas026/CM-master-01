import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  LoginForm!: FormGroup;
  inputsForm = new FormControl('');
  submitted = false;

  constructor(public fb: FormBuilder) {}

  ngOnInit(): void {
    this.LoginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    }
    );
  } 

  get loginFormControls() {
    return this.LoginForm.controls; 
  }

  // checkRequiredFields() {
  //   if (this.LoginForm.controls.username && !this.LoginForm.controls.password) {
  //     console.table('Please Enter Password');
  //   } else if (!this.LoginForm.controls.username && this.LoginForm.controls.password) {
  //     console.table('Please Enter User Name');
  //   } else if (this.LoginForm.controls.username && this.LoginForm.controls.password) {
  //     console.table('All details are entered');
  //   }
  // }

  onSubmit() {
    this.submitted = true;
    // this.checkRequiredFields();
    if (this.LoginForm.valid) {
      alert('Form Submitted succesfully!!!\n Check the values in browser console.');
      console.table(this.LoginForm.value);
    }
  }
}
