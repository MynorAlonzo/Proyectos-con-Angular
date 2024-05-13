import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
 loading: Boolean = false;
frmRegister = this.formBuilder.group({
firstName: ['', Validators.required],
lastName: ['', Validators.required],
username: ['', [Validators.required, Validators.email]],
password: ['', Validators.required],
reTypePassword: ['', Validators.required],
avatar: [null],
terms: [ false, Validators.required]
})
 constructor(private formBuilder: FormBuilder, private router: Router){

 }
 ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  
 }
 onSubmit(){
  if(this.frmRegister.invalid){
    const form = document.getElementsByClassName('container-form')[0] as HTMLFormElement;
    form.classList.add('was-validated');
    return;
  }
  if(this.frmRegister.value.password !== this.frmRegister.value.reTypePassword){
    Swal.fire({
      text: "The password does not match.",
      icon: "info"
    });

    console.log('The password does not match.')
  }

  if(this.frmRegister.value.terms == false){
    console.log('Por favor de aceptar los terminos');
    return;
  }
  if(this.frmRegister.valid){
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Thank you for registering at now you can login",
      showConfirmButton: false,
      timer: 1500
    }).then(()=>{
      this.router.navigate(['/accout/login'])
    })

    console.log('Usuario Registrado');
  }else{
    console.log('Usuario no registrado');
  }
 }
}
