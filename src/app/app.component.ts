import { Component } from '@angular/core';
import {ApiAggregatorService} from "./services/api-aggregator.service";
import {pipe, tap} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WeatherForecast';
}
