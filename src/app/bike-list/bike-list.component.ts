import { Component, OnChanges, Input } from '@angular/core';
import { IBikeData } from '../ibike-data';
@Component({
  selector: 'app-bike-list',
  templateUrl: './bike-list.component.html',
  styleUrls: ['./bike-list.component.css']
})
export class BikeListComponent implements OnChanges {
@Input() dispData:IBikeData[];
FilterBikes:IBikeData[];
check:boolean;
  constructor() {
    this.check = true;
   }
   FilterItems(value:string):void{

     console.log(value)
    this.FilterBikes = value ? this.Filter(value):this.dispData;
    
      console.log(this.FilterBikes)
   }
   Filter(item:string):IBikeData[]{
      console.log(this.FilterBikes)
      return this.FilterBikes.filter((bike:IBikeData) => bike.category.indexOf(item.toLocaleLowerCase()) != -1)
   }
    ToggleImg():boolean{
     return this.check = !this.check
    }
  ngOnChanges() {
    if (this.dispData) {
      this.FilterBikes = this.dispData
    }
      
  }

}
