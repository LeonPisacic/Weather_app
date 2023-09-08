import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor(private WeatherService: WeatherService) { }

  WeatherData?: WeatherData;
  cityName: string = 'Zagreb'; //default value

  ngOnInit() {
    this.getWeatherData(this.cityName);
  }

  changeCity() {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  private getWeatherData(cityName: string) {
    this.WeatherService.getWeatherData(cityName).subscribe((response) => {
      this.WeatherData = response;
    });
  }
}
