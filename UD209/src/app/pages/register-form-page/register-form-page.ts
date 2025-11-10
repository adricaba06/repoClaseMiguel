import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-form-page',
  imports: [ReactiveFormsModule],
  templateUrl: './register-form-page.html',
  styleUrl: './register-form-page.css',
})
export class RegisterFormPage {

  registerFormGroup = new FormGroup({
    nameFormControl: new FormControl(''),
    surnameFormControl: new FormControl(''),
    nifFormControl: new FormControl(''),
    emailFormControl: new FormControl(''),
    sexFormControl: new FormControl(''),
    infoFormControl: new FormControl(''),
    passwordFormControl: new FormControl(''),
    confirmFormPassword: new FormControl(''),
    rememberMeFormPassword: new FormControl('')

  })

  printInfo() {

    console.log('Datos de registro');
    console.log('-----------------------------------------------')
    console.log('Nombre: ', this.registerFormGroup.get('nameFormControl')?.value);
    console.log('Apellidos: ', this.registerFormGroup.get('surnameFormControl')?.value);
    console.log('NIF: ', this.registerFormGroup.get('nifFormControl')?.value);
    console.log('Email: ', this.registerFormGroup.get('emailFormControl')?.value);
    console.log('Sexo: ', this.registerFormGroup.get('sexFormControl')?.value);
    console.log('Información adicional: ', this.registerFormGroup.get('infoFormControl')?.value);
    console.log('Contraseña: ', this.registerFormGroup.get('passwordFormControl')?.value);
    console.log('Confirmación de contraseña: ', this.registerFormGroup.get('confirmFormPassword')?.value);
    console.log('Recordar contraseña: ', this.registerFormGroup.get('rememberMeFormPassword')?.value);

  }


}
