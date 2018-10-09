import { Component, OnChanges, Input } from '@angular/core';
import { IBikeData } from '../ibike-data';
@Component({
  selector: 'app-bike-list',
  templateUrl: './bike-list.component.html',
  styleUrls: ['./bike-list.component.css']
})
export class BikeListComponent implements OnChanges {
@Input() dispData:IBikeData[];
check:boolean;
  constructor() {
    this.check = true;
   }
   FilterItems():void{
     
   }
    ToggleImg():boolean{
     return this.check = !this.check
    }
  ngOnChanges() {

  }

}
