import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonButton, IonList, IonText, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { personOutline, mailOutline, lockClosedOutline } from 'ionicons/icons';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonButton, IonList, IonText, IonIcon,
    CommonModule, FormsModule, ReactiveFormsModule
  ]
})
export class RegistroPage implements OnInit {
  registroForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    addIcons({ personOutline, mailOutline, lockClosedOutline });
    this.registroForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      correo: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.registroForm.valid) {
      console.log('Datos de registro:', this.registroForm.value);
      // Aquí iría la lógica de registro (ej. llamada a un servicio HTTP)
    } else {
      console.log('Formulario inválido');
      this.registroForm.markAllAsTouched();
    }
  }
}
