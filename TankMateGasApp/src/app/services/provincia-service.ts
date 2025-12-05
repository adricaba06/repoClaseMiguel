import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Provincia, ProvinciaResponse } from '../interface/Provincia.interface';


@Injectable({
  providedIn: 'root'
})
export class ProvinciasService {
  private baseUrl = 'https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/Listados/ProvinciasPorComunidad/';

  constructor(private http: HttpClient) {}

  public getProvinciasByCCAA(IDCCAA: string): Observable<Provincia[]> {
    const url = `${this.baseUrl}${IDCCAA}`;
    return this.http.get<Provincia[]>(url);
  }
}
