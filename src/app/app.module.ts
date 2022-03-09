import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import { HomepageComponent } from './components/homepage/homepage.component';
import {ApproutingModule} from "./modules/approuting/approuting.module";
import { ShellComponent } from './components/shell/shell.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SharedModule} from "./modules/shared/shared.module";
import { CityProviderComponent } from './components/city-provider/city-provider.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import { DisplayDataComponent } from './components/display-data/display-data.component';
import { WindBlowComponent } from './components/wind-blow/wind-blow.component';
import { ChartComponent } from './components/chart/chart.component';
import { MapCComponent } from './components/map-c/map-c.component';
import {AgmCoreModule} from "@agm/core";

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    DisplayDataComponent,
    WindBlowComponent,
    ChartComponent,
    MapCComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ApproutingModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
