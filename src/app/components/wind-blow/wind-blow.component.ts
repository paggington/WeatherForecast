import {ApplicationRef, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-wind-blow',
  templateUrl: './wind-blow.component.html',
  styleUrls: ['./wind-blow.component.css']
})
export class WindBlowComponent implements OnInit,OnChanges{
  @Input()
  degree?:number=0.0;

  constructor() {
  }
  ngOnInit(): void {
    this.update();
  }
  update(){
    let elem=document.getElementById("windImage");
    //@ts-ignore
    elem.style.setProperty('transform','rotate('+this.degree+'deg)');
  }
  updateOnInit(){
    let elem=document.getElementById("windImage");
    //@ts-ignore
    elem.style.setProperty('transform','rotate(0deg)');
  }
  ngOnChanges(changes: SimpleChanges): void {
    for (let propName in changes) {
      let change = changes[propName];
      let curVal  = JSON.stringify(change.currentValue);
      let prevVal = JSON.stringify(change.previousValue);
      if(curVal!=prevVal){
        this.update();
      }
    }
  }
}
