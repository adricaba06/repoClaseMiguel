import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicle, VehiclesResponse } from '../models/vehiclesInterface';
import { VehicleDetail } from '../models/vehicleDetailInterface';

@Injectable({
  providedIn: 'root',
})


export class VehiclesService {
  
  private http = inject(HttpClient);

  getVehicleList(): Observable<VehiclesResponse> {
    return this.http.get<VehiclesResponse>('https://swapi.dev/api/vehicles/')
  }

  getVehicle(id: string | undefined): Observable<VehicleDetail>{
    return this.http.get<VehicleDetail>(`https://swapi.dev/api/vehicles/${id}/`)
  }

}
