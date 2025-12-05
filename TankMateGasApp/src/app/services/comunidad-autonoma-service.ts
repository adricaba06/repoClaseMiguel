import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ComunidadAutonomasResponse } from '../interface/ComunidadAutonoma.interface';


@Injectable({
  providedIn: 'root'
})
export class ComunidadesService {

  constructor(private http: HttpClient) { }

  public getAllComunidadesAutonomas(): Observable<ComunidadAutonomasResponse> {
    return this.http.get<ComunidadAutonomasResponse>(`https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/Listados/ComunidadesAutonomas/`)
  }
}
