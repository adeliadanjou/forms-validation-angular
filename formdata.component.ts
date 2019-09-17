import { Component, OnInit } from '@angular/core';
import { Form, FormGroup, FormControl, Validators } from '@angular/forms';
import { validateHorizontalPosition } from '@angular/cdk/overlay';

@Component({
  selector: 'app-formdata',
  templateUrl: './formdata.component.html',
  styleUrls: ['./formdata.component.css']
})
export class FormdataComponent implements OnInit {
  forma: FormGroup;
  controlNombre: FormControl;

  constructor() {
    this.controlNombre = new FormControl('',
    [
    Validators.required,
    Validators.email
    ]);

    this.forma = new FormGroup({nombre: this.controlNombre});
   }

  ngOnInit() {
    this.forma.valueChanges.subscribe(val => {
       console.log('Validez Formulario: ' + this.forma.valid);
       console.log(this.forma.controls.nombre.errors);
    });
  }

  enviar() {
    console.log('Validez Formulario: ' + this.forma.valid);
    console.log(this.forma.controls.nombre.errors);
    console.log(this.forma.value);
  }
}
