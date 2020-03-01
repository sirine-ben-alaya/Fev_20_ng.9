import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Subscriber } from 'rxjs';
import { CrudService } from '../../services/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[CrudService]
})
export class DashboardComponent implements OnInit {
posts:any=[];
loading:boolean=false;
titleSearch:string;
descriptionSearch:string;
contractSearch:string;

constructor(private crud:CrudService, private route:Router){}
  //constructor(private http:HttpClient) { }

  ngOnInit(): void {
  this.getAll();
  }
  getAll(){
    this.loading=true;
  // this.http.get('http://localhost:3000/posts').subscribe(res=>{
    //  this.posts=res
    this.crud.getAll().subscribe(res=>{
      this.posts=res
      this.loading=false;
      //pour garder les donner dans le local storage
      localStorage.setItem('posts',JSON.stringify(this.posts))
      //console.log(res)
    })
  
  }
  delete(posts){
    this.loading=true;
   // this.
     // this.http.delete('http://localhost:3000/post/'+post._id).subscribe(res=>{
      this.crud.deleteUserById(posts._id).subscribe(res=>{
       // this.posts=res
      console.log(res);
      //get results updated, on l'a mis dans le delete pour éviter des appels asynchrones
      this.getAll();
    },err=>{

    },
    ()=>{this.loading=false;
    })}
  edit(post){
this.route.navigate(['/gestion',post._id]);

  }

}
