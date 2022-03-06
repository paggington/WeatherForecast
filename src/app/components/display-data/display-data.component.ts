import {Component, Input, OnInit} from '@angular/core';
import {Weather} from "../../models/Weather.model";

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.css']
})
export class DisplayDataComponent implements OnInit {
  @Input()
  weather?:Weather;
  constructor() { }

  ngOnInit(): void {
  }

}
