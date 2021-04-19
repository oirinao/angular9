import { Component, OnInit } from '@angular/core';
import { RestoService } from '../resto.service'

@Component({
  selector: 'app-list-restaurant',
  templateUrl: './list-restaurant.component.html',
  styleUrls: ['./list-restaurant.component.css']
})
export class ListRestaurantComponent implements OnInit {

  constructor(private resto: RestoService) { }
  collection: any = [];
  ngOnInit(): void {
    this.resto.getList().subscribe((result) => {
      console.warn(result);
      this.collection = result;
    });
  }

  deleteResto(item: any)
  {
    this.collection.splice(item-1, 1)
    this.resto.deleteResto(item).subscribe((result)=>{
      console.warn("result", result)
    })
  }

}
