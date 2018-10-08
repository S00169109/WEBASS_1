import { Component, OnChanges, Input } from '@angular/core';
import { IBikeData } from '../ibike-data';
@Component({
  selector: 'app-bike-list',
  templateUrl: './bike-list.component.html',
  styleUrls: ['./bike-list.component.css']
})
export class BikeListComponent implements OnChanges {
@Input() dispData:IBikeData[];
  constructor() {
   }

  ngOnChanges() {

  }

}
