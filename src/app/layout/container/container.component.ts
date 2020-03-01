import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  titre ="Application";
  varExemple = "hello world";
  username:String ; // c pour le two way binding
  counter=0;
  name:String;
  email:String;
  phone:String;
  about:String;
  HEROES = [
    {id: 1, name:'Superman'},
    {id: 2, name:'Batman'},
    {id: 5, name:'BatGirl'},
    {id: 3, name:'Robin'},
    {id: 4, name:'Flash'}
 ];
 USERS:any =[];
 keyname:String;
  constructor() { 
    console.log("Constructeur call")
  }
  ngAfterContentInit() {
    console.log("ngAfterContentInit call")
  }

  ngOnInit(): void {
    console.log("ngOnInit call")
  }
  callFn() {
    alert(this.titre);
  }
  decrement() {
    this.counter--;
  }
  Increment() {
   this.counter++;
  }
  Fn() {
    alert(this.username);
  }
 save() {
    let data ={
      // Name key qu'on a construit, on choisit le nom
      Name:this.name,
      Email:this.email,
      Phone:this.phone,
      About:this.about

    }
    console.log(data);
    this.USERS.push(data);
  } 

   
}
