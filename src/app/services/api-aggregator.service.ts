import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Weather} from "../models/Weather.model";

@Injectable({
  providedIn: 'root'
})
export class ApiAggregatorService {

  constructor(private http:HttpClient) { }

  getCurrentWeatherInfoForTheCityName(cityName:string):Observable<Weather>{
    let options={
      headers:new HttpHeaders()
        .set("Content-Type","application/json")
        .set("Server","BunnyCDN-FR1-576")
    }
    return this.http.get<Weather>('http://api.weatherapi.com/v1/forecast.json?key=75709c1dbfc94674942164733220503&q='+cityName+'&days=1&aqi=yes&alerts=yes');
  }
}
