import { Component } from '@angular/core';
import {BikeDataService} from './bike-data.service';
import {IBikeData} from './ibike-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
Data:IBikeData[];

  constructor(private GetData:BikeDataService) {
   this.DataRetrieval();

  }
  DataRetrieval(){
    this.GetData.getdata().subscribe(data => {
      this.Data=data
    }
    )};
}
