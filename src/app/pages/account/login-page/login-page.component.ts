import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/sevices/data.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html'
})
export class LoginPageComponent implements OnInit {
  public form: FormGroup;

  constructor(private service: DataService, private fb: FormBuilder) { 
    this.form = this.fb.group({
      username: ['', Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(11),
        Validators.required
      ])],
      password: ['', Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(20),
        Validators.required
      ])]
    });
  }

  ngOnInit(): void {
  }

}
