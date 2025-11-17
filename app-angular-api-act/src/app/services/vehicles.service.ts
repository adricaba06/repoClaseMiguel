import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VehiclesResponse } from '../models/vehiclesInterface';

@Injectable({
  providedIn: 'root',
})


export class VehiclesService {
  
  private http = inject(HttpClient);

  getVehicleList(): Observable<VehiclesResponse> {
    return this.http.get<VehiclesResponse>('https://swapi.dev/api/vehicles/')
  }

}
