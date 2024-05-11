import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
 loading: Boolean = false;
frmRegister = this.formBuilder.group({
fistName: ['Mynor', Validators.required],
lastName: ['Alonzo', Validators.required],
username: ['1yno3alonzo@gmail.com', Validators.required],
password: ['Mynor', Validators.required],
reTypePassword: ['Mynor0', Validators.required],
avatar: [null],
terms: [false, Validators.required]
})
 constructor(private formBuilder: FormBuilder){

 }
 onSubmit(){
  console.log(this.frmRegister);
 }
}
