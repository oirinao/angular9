import { Component } from '@angular/core';
import { RestoService} from './resto.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'restaurants2';

  constructor(private restoService: RestoService) {	}

  ngOnInit(): void {
  
  }

  isLoggedIn() {
    return this.restoService.isLoggedIn();
  }

}
