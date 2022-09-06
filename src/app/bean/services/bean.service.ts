import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CoffeeBean } from '../model/bean';

@Injectable({
  providedIn: 'root'
})
export class BeanService {

  ENDPOINT_URL = 'https://random-data-api.com';
  TOTAL = 50;
  constructor(private _httpClient: HttpClient) { }

  getBeans() {
    return this._httpClient.get<CoffeeBean[]>(`${this.ENDPOINT_URL}/api/coffee/random_coffee?size=${this.TOTAL}&response_type=JSON`);
  }
}
