import {Component, Input, OnInit} from '@angular/core';
import {Weather} from "../../models/Weather.model";
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.css'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({opacity: '0'}),
        animate('1000ms ease', style({opacity: '1'}))
      ]),
    ]),
  ]
})
export class DisplayDataComponent implements OnInit {
  @Input()
  weather?:Weather;

  isCelsius:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }

}
