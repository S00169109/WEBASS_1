import { Component, OnInit, Input } from '@angular/core';
import { IBikeData } from '../ibike-data';
import { skip } from 'rxjs/operators';
@Component({
  selector: 'app-bike-list',
  templateUrl: './bike-list.component.html',
  styleUrls: ['./bike-list.component.css']
})
export class BikeListComponent implements OnInit {
@Input() dispData:IBikeData[];
FilterBikes:IBikeData[]; trial:IBikeData[];
check:boolean;
  constructor() {
    this.check = true;
   }
   FilterItems(value:string):void{
     
    this.FilterBikes= this.dispData.filter((bike:IBikeData) => bike.category.indexOf(value.toLocaleLowerCase())==0);
   
   this.trial=  this.FilterBikes.concat(this.trial)
    this.trial.forEach(element => {
      if (this.FilterBikes.includes(element) == false && element != null) {
        this.FilterBikes.push(element)
      }
      
    });
     console.log(this.trial)
      
   }
    RemoveItems(value:string):void{
      this.trial=null
      this.FilterBikes.forEach(element => {
        this.FilterBikes.splice(element.category.indexOf(value.toLocaleLowerCase()))
      });
      console.log(this.FilterBikes)
   }
    ToggleImg():boolean{
     return this.check = !this.check
    }
  ngOnInit() {
      this.FilterBikes = this.dispData
  }

}
