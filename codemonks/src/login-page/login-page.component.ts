import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit, AfterViewInit {

  LoginForm!: FormGroup;
  inputsForm = new FormControl('');
  submitted = false;
  @ViewChild('userRef') userElementRef: ElementRef;

  constructor(public fb: FormBuilder, private router: Router) {}

  ngAfterViewInit(): void {
    this.userElementRef.nativeElement.focus();
    console.log(this.userElementRef);
  }
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
      // alert('Form Submitted succesfully!!!\n Check the values in browser console.');
      console.table(this.LoginForm.value);
      const {username, password} = this.LoginForm.value;
      if (username === 'admin' && password === 'admin1234') {
        this.router.navigateByUrl("/home");
      } else {
        alert('Please enter correct username and password');
      }
    }
  }
}
