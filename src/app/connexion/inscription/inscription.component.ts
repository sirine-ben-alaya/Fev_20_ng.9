import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms"
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  constructor() { }
name:string;
email:string;
password:string;

myform :FormGroup;

  ngOnInit(): void {
    this.myform= new FormGroup({
nameForm: new FormControl('',Validators.required),
emailForm: new FormControl('',[Validators.required, Validators.email]),
passwordForm: new FormControl('',[Validators.required, Validators.minLength(8)])

    })
  }
register()
{
  console.log(this.myform.value.nameForm)
  let user={
//     name:this.name,
//     email:this.email,
// passeword:this.password

//recupération des valeurs ) partir de FormControl et on a supprimé de html le ngmodel [(ngModel)]="password" de formulaire
name:this.myform.value.nameForm,
email:this.myform.value.emailForm,
passeword:this.myform.value.passwordForm

  }
  localStorage.setItem('user',JSON.stringify(user));
  console.log(user);
}
}
