import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import * as echarts from 'echarts/core';
import { GridComponent } from 'echarts/components';
import { LineChart } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import {Weather} from "../../models/Weather.model";

echarts.use([GridComponent, LineChart, CanvasRenderer, UniversalTransition]);
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit,OnChanges{
  @Input()
  weather?:Weather;
  constructor() {
  }

  ngOnInit(): void {
    this.generateChartC()
  }

  generateChartC() {
    // @ts-ignore
    let temp_data=[];
    // @ts-ignore
    let time_data=[];
    console.log(this.weather)
    this.weather?.forecast?.forecastday[0].hour.forEach(temp=>{
      temp_data.push(temp.temp_c);
      time_data.push(temp.time.split(' ')[1]);
      console.log(temp.time.split(' ')[1])
    })
    let chartDom = document.getElementById('main');
    // @ts-ignore
    let myChart = echarts.init(chartDom);
    let option;


    option = {
      xAxis: {
        type: 'category', // @ts-ignore
        data: time_data
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          //@ts-ignore
          data: temp_data,
          type: 'line',
          smooth: true
        }
      ],
    };

    option && myChart.setOption(option);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.generateChartC();
  }
}
