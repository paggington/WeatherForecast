import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Loader} from "@googlemaps/js-api-loader";

@Component({
  selector: 'app-map-c',
  templateUrl: './map-c.component.html',
  styleUrls: ['./map-c.component.css']
})
export class MapCComponent implements OnInit, OnChanges {
  @Input()
  longitude?: number | 131.036;
  @Input()
  latitude?: number | -25.344;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
        this.initCart();
    }

  ngOnInit(): void {
    this.initCart();
  }

  initCart() {
    let loader = new Loader({
      //TODO:INSERT YOUR GOOGLE MAPS API KEY BELOW
      apiKey: '',
      region:'PL',
      version: 'weekly'
    })
    loader.load().then(() => {
      const point = {lat: this.latitude, lng: this.longitude} as google.maps.MapOptions;

      // @ts-ignore
      const map = new google.maps.Map(
        document.getElementById("map") as HTMLElement,
        {
          zoom: 6,// @ts-ignore
          center: point
        }
      )

      // @ts-ignore
      const marker = new google.maps.Marker({// @ts-ignore
        position: point,
        map: map
      })
    })
  }
}
