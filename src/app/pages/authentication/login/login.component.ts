import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
 loading: Boolean = false;
 frmLogin = this.formBuilder.group({
  username: [localStorage.getItem('username') || '', [Validators.required, Validators.email]],
  password: ['', Validators.required],
  remember: [ false, Validators.required]
  })

  constructor(private formBuilder: FormBuilder, private router: Router){}

  onSubmit(){
    if(this.frmLogin.invalid){
      const form = document.getElementsByClassName('container-form')[0] as HTMLFormElement;
      form.classList.add('was-validated');
      return;
    } 
    if(this.frmLogin.get('remember')?.value){
      localStorage.setItem('username', this.frmLogin.get<any>('username')?.value);
    }else{
      localStorage.removeItem('username');
    }
    
  if(this.frmLogin.valid){
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Logged In",
      showConfirmButton: false,
      timer: 1500
    }).then(()=>{
      this.router.navigate(['/start'])
    })
  }else{
    console.log('Error');
  }
 }
}
