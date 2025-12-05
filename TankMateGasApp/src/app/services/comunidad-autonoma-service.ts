import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ComunidadAutonoma, ComunidadAutonomaResponse } from '../interface/ComunidadAutonoma.interface';


@Injectable({
  providedIn: 'root'
})
export class ComunidadesService {
  private url = 'https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/Listados/ComunidadesAutonomas/';

  constructor(private http: HttpClient) {}

  public getAllComunidadesAutonomas(): Observable<ComunidadAutonomaResponse> {
    // 1. Definir headers (opcional, pero recomendado para XML)
    const headers = new HttpHeaders({
      'Content-Type': 'application/xml',
      'Accept': 'application/xml'
    });

    return this.http
      .get(this.url, { headers, responseType: 'text' }) 
      .pipe(
        map(xmlString => {
          const cleanXmlString = xmlString.replace(/xmlns="[^"]+"/g, '');
          const parser = new DOMParser();
          const xml = parser.parseFromString(cleanXmlString, 'application/xml');

          //  Convertir nodos a objetos 
          const comunidades: ComunidadAutonoma[] = Array.from(
            xml.getElementsByTagName('ComunidadAutonoma')
          ).map(c => ({
            IDCCAA: c.getElementsByTagName('IDCCAA')[0]?.textContent || '',
            CCAA: c.getElementsByTagName('CCAA')[0]?.textContent || ''
          }));

          //  Devolver objeto conforme a la interfaz
          return { ComunidadAutonoma: comunidades };
        })
      );
  }
}
