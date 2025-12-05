import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Municipio, MunicipioResponse } from '../interface/Municipio.interface';

@Injectable({
  providedIn: 'root'
})
export class MunicipiosService {
  private url = 'https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/Listados/MunicipiosPorProvincia/';

  constructor(private http: HttpClient) {}

  public getMunicipiosPorProvincia(idProvincia: string): Observable<MunicipioResponse> {
    return this.http.get<MunicipioResponse>(`https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/Listados/MunicipiosPorProvincia/${idProvincia}`)
  }
}
