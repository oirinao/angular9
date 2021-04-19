import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms'
import { RestoService} from '../resto.service'

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent implements OnInit {
alert:boolean = false
  addRestaurant=new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    adress: new FormControl('')
  })
  constructor(private resto: RestoService) { }

  ngOnInit(): void {
  }

  collectResto(){
    this.resto.saveRestaurant(this.addRestaurant.value).subscribe((result: any)=>{
      this.alert=true
      this.addRestaurant.reset({})
    })
    
  }
  closeAlert()
  {
    this.alert=false
  }

}
