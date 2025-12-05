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
    const headers = new HttpHeaders({
      'Content-Type': 'application/xml',
      'Accept': 'application/xml'
    });

    return this.http
      .get(`${this.url}${idProvincia}`, { headers, responseType: 'text' })
      .pipe(
        map(xmlString => {
          const cleanXmlString = xmlString.replace(/xmlns="[^"]+"/g, '');
          const parser = new DOMParser();
          const xml = parser.parseFromString(cleanXmlString, 'application/xml');

          const municipios: Municipio[] = Array.from(
            xml.getElementsByTagName('Municipio')
          ).map(m => ({
            IDMunicipio: m.getElementsByTagName('IDMunicipio')[0]?.textContent || '',
            IDProvincia: m.getElementsByTagName('IDProvincia')[0]?.textContent || '',
            IDCCAA: m.getElementsByTagName('IDCCAA')[0]?.textContent || '',
            Municipio: m.getElementsByTagName('Municipio')[0]?.textContent || '',
            Provincia: m.getElementsByTagName('Provincia')[0]?.textContent || '',
            CCAA: m.getElementsByTagName('CCAA')[0]?.textContent || ''
          }));

          return {Municipio: municipios };
        })
      );
  }
}
