import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-applaunch',
  templateUrl: './applaunch.component.html',
  styleUrls: ['./applaunch.component.scss']
})
export class ApplaunchComponent implements OnInit {

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
  }
 public onLaunch(){
  this.router.navigate(['standaloneapp']);
 }
}
