import {ApplicationRef, Component, OnDestroy, OnInit} from '@angular/core';
import {ApiAggregatorService} from "../../services/api-aggregator.service";
import {Subscription} from "rxjs";
import {CityProviderComponent} from "../city-provider/city-provider.component";
import {Weather} from "../../models/Weather.model";
import {SearchR} from "../../models/SearchR.model";
import {ErrorWithProvidedDataSnackBarService} from "../../services/error-with-provided-data-snack-bar.service";


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnDestroy {
  private sub?: Subscription;
  weatherOnLoad: boolean = false;
  weather?: Weather;

  constructor(
    private apiService: ApiAggregatorService,
    private errorDataEnteredSnack: ErrorWithProvidedDataSnackBarService,
    private appRef: ApplicationRef) {
  }

  async getWeather(searchR: SearchR) {
    this.sub = this.apiService.getCurrentWeatherInfoForTheCityName(searchR.city).subscribe(data => {
      this.weather = data;
    }, error => {
      if (error.status == 400) {
        this.errorDataEnteredSnack.onError();
        this.sub?.unsubscribe();
      }
    });
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}
