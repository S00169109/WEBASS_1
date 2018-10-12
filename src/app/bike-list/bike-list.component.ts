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
   console.log(this.FilterBikes, this.trial)
    this.trial.forEach(element => {
      if (this.FilterBikes.includes(element) == false && element != null) {
        this.FilterBikes.push(element)
      }
    });
    console.log(this.trial , "TRIAL from filter")
    console.log(this.FilterBikes , "FILTERBIKES from filter")
   }
   
    RemoveItems(value:string):void{
     
      if (this.FilterBikes) {
        this.FilterBikes=  this.FilterBikes.filter((bike:IBikeData) => 
  bike.category.indexOf(value.toLocaleLowerCase())==0);

        this.FilterBikes.forEach(element => {
          if (this.trial.includes(element)) {
            this.trial.splice(this.trial.indexOf(element),this.FilterBikes.length)
            //this.FilterBikes.splice(this.FilterBikes.indexOf(element),this.trial.length)
          }
        });
        this.FilterBikes.splice(0)
        this.trial.forEach(bike => {
          if (bike!=null) {
            this.FilterBikes.push(bike)
          }
        });
      }
  
 
  console.log(this.trial, "Important")
//this.trial= this.trial.splice(0,this.trial.length,...this.trial)
 /* this.trial.forEach(element => {
  if (this.FilterBikes.includes(element)) {
    this.FilterBikes.splice(this.FilterBikes.indexOf(element),this.trial.length)
  }
});  */
console.log(this.trial ,"< trial", this.FilterBikes , "< filterbikes")
   }
    ToggleImg():boolean{
     return this.check = !this.check
    }
  ngOnInit() {
      this.FilterBikes = this.dispData
  }

}
