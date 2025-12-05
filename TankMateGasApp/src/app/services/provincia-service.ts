import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Provincia, ProvinciaResponse } from '../interface/Provincia.interface';


@Injectable({
  providedIn: 'root'
})
export class ProvinciasService {

  constructor(private http: HttpClient) {}

  public getProvinciasByCCAA(IDCCAA: string): Observable<ProvinciaResponse> {
    return this.http.get<ProvinciaResponse>(`https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/Listados/ProvinciasPorComunidad/${IDCCAA}`)
  }
}
