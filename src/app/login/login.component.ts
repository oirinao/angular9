import { findLast} from '@angular/compiler/src/directive_resolver'
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms'
import { RestoService} from '../resto.service'
import {Router} from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  alert:boolean=false;
  login=new FormGroup({
    email: new FormControl(' '),
    password: new FormControl(' ')
  })

  constructor(private resto:RestoService, private router: Router) { }
  users:any=[];

  ngOnInit(): void {
    if (this.resto.isLoggedIn()) {
      this.resto.logOut();
      this.router.navigate(['/'])
    }
  }

  get f() { return this.login.controls; }

  collection(){
    //console.warn(this.login.value)
    this.resto.findUser(this.f.email.value, this.f.password.value).then(x => {
      if (x) {
        this.resto.loginUser(this.f.email.value, this.f.password.value);
        //this.alert=true;
        this.login.reset({}); //
        this.router.navigate(['/'])
        //logout
      }
      else
      {
       this.alert=true 
      }
    });
  
  }
  closeAlert() {
    this.alert = false
  }

}
