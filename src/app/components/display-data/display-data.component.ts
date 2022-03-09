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
export class DisplayDataComponent  {
  @Input()
  weather?: Weather;

  isCelsius: boolean = true;
  isMHP: boolean = false;

  constructor() {
  }

  getUvRaysLevel() {
    // @ts-ignore
    return this.weather?.current.uv * (100 / 8);
  }

  getClassUVFromLevel() {
    switch (this.weather?.current?.uv) {
      case (1 || 2):
        return 'green';
      case(3 || 4 || 5):
        return 'yellow';
      case (6 || 7):
        return 'orange';
      case(8):
        return 'red';
      default:
        return 'green';
    }
  }

  getPictureByState() {
    let state = this.weather?.current?.condition.code;
    if (this.weather?.current?.is_day == 1) {
      switch (state) {
        case(1000):
          return "/assets/icons/sun.png";
        case(1003):
          return "/assets/icons/clouds-sun.png";
        case(1006):
          return "/assets/icons/cloudy.png";
        case(1009):
          return "/assets/icons/clouds-sun.png";
        case(1030):
          return "/assets/icons/mist-clouds.png";
        case(1066):
          return "/assets/icons/snow.png";
        case(1063):
          return "/assets/icons/rain-clouds-sun.png";
        case(1069):
          return "/assets/icons/rain-clouds-sun.png";
        case(1072):
          return "/assets/icons/snow-rain-clouds.png";
        case(1087):
          return "/assets/icons/thunder.png";
        case(1114):
          return "/assets/icons/snow-clouds-sun.png";
        case(1117):
          return "/assets/icons/snow-clouds.png";
        case(1135):
          return "/assets/icons/fog.png";
        case(1147):
          return "/assets/icons/fog.png";
        case(1150):
          return "/assets/icons/mist-clouds.png";
        case(1153):
          return "/assets/icons/snow-clouds.png";
        case(1168):
          return "/assets/icons/snow-clouds.png";
        case(1171):
          return "/assets/icons/snow-clouds.png";
        case(1180):
          return "/assets/icons/rain-clouds-sun.png";
        default:
          return "/assets/icons/clouds-sun.png"
      }
    }else{
      switch (state) {
        case(1000):
          return "/assets/icons/moon.png";
        case(1003):
          return "/assets/icons/clouds-moon.png";
        case(1006):
          return "/assets/icons/cloudy.png";
        case(1009):
          return "/assets/icons/clouds-moon.png";
        case(1030):
          return "/assets/icons/mist-clouds.png";
        case(1066):
          return "/assets/icons/snow.png";
        case(1063):
          return "/assets/icons/rain-clouds-moon.png";
        case(1069):
          return "/assets/icons/rain-clouds-moon.png";
        case(1072):
          return "/assets/icons/snow-rain-clouds.png";
        case(1087):
          return "/assets/icons/thunder.png";
        case(1114):
          return "/assets/icons/snow-clouds-moon.png";
        case(1117):
          return "/assets/icons/snow-clouds.png";
        case(1135):
          return "/assets/icons/fog.png";
        case(1147):
          return "/assets/icons/fog.png";
        case(1150):
          return "/assets/icons/mist-clouds.png";
        case(1153):
          return "/assets/icons/snow-clouds.png";
        case(1168):
          return "/assets/icons/snow-clouds.png";
        case(1171):
          return "/assets/icons/snow-clouds.png";
        case(1180):
          return "/assets/icons/rain-clouds-moon.png";
        default:
          return "/assets/icons/clouds-moon.png"
      }
    }
  }
}
