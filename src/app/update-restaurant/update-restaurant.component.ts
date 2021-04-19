import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { ActivatedRoute } from '@angular/router'
import { RestoService } from '../resto.service'

@Component({
  selector: 'app-update-restaurant',
  templateUrl: './update-restaurant.component.html',
  styleUrls: ['./update-restaurant.component.css']
})
export class UpdateRestaurantComponent implements OnInit {
  alert = false
  editRestaurant = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    adress: new FormControl('')
  })
  constructor(private router: ActivatedRoute, private resto: RestoService) { }

  ngOnInit(): void {
    console.warn(this.router.snapshot.params.id)
    this.resto.getCurrentResto(this.router.snapshot.params.id).subscribe((result: any) => {
      console.warn("result", result)
      this.editRestaurant = new FormGroup({
        name: new FormControl(result['name']),
        email: new FormControl(result['email']),
        adress: new FormControl(result['adress'])
      })
    })
  }

  collection() {
    console.warn(this.editRestaurant.value)
    this.resto.updateResto(this.router.snapshot.params.id, this.editRestaurant.value).subscribe((result: any) => {
      console.warn(result);
      this.alert = true;
    });
  }
  closeAlert() {
    this.alert = false;
  }

}
