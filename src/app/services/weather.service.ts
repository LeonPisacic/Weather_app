import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherData } from '../models/weather.model';


@Injectable({
    providedIn: 'root'
})
export class WeatherService {

    constructor(public http: HttpClient) { }

    getWeatherData(cityName: string): Observable<WeatherData> {
        return this.http.get<WeatherData>('https://open-weather13.p.rapidapi.com' + '/city/' + cityName, {
            headers: new HttpHeaders()
                .set('X-RapidAPI-Host', 'open-weather13.p.rapidapi.com')
                .set('X-RapidAPI-Key', 'a35cdb0887msh6d4b047b6c2a1f1p1e4022jsn6e5dcb03f158')
        });
    }

    // getWeatherData(cityName: string) {
    //   return this.http.get(environment.weatherApiBaseUrl, {
    //     headers: new HttpHeaders()
    //       .set(environment.XRapidAPIHostHeaderName, environment.XRapidAPIHostHeaderValue)
    //       .set(environment.XRapidApiKeyHeaderName, environment.XRapidApiKeyHeaderValue),
    //     params: new HttpParams()
    //       .set('q', cityName)
    //       .set('units', 'metric')
    //       .set('mode', 'json')
    //   })
    // }

}
