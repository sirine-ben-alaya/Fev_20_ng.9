import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css']
})
export class Home1Component implements OnInit {
titre ="button1"
  constructor() { }

  ngOnInit(): void {
  }
callFn()
{alert("alert1")}
}
