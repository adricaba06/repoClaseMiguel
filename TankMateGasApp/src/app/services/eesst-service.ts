import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { EstacionInterna } from '../interface/estacionInterna.interface';

@Injectable({
  providedIn: 'root'
})
export class EstacionesService {
  private baseUrl = 'https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/EstacionesTerrestres/FiltroMunicipio/';

  constructor(private http: HttpClient) {}

  public getEstacionesByMunicipio(IDMUNICIPIO: string): Observable<EstacionInterna[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/xml',
      'Accept': 'application/xml'
    });

    const url = `${this.baseUrl}${IDMUNICIPIO}`; // quitar barra final

    return this.http.get(url, { headers, responseType: 'text' })
      .pipe(
        map(xmlString => {
          const cleanXmlString = xmlString.replace(/xmlns="[^"]+"/g, '');
          const parser = new DOMParser();
          const xml = parser.parseFromString(cleanXmlString, 'application/xml');

          const estacionesInternas: EstacionInterna[] = Array.from(xml.getElementsByTagName('EESSPrecio')).map(e => ({
            cp: e.getElementsByTagName('C.P.')[0]?.textContent || '',
            direccion: e.getElementsByTagName('Dirección')[0]?.textContent || '',
            horario: e.getElementsByTagName('Horario')[0]?.textContent || '',
            latitud: e.getElementsByTagName('Latitud')[0]?.textContent || '',
            localidad: e.getElementsByTagName('Localidad')[0]?.textContent || '',
            longitud: e.getElementsByTagName('Longitud_x0020__x0028_WGS84_x0029_')[0]?.textContent || '',
            margen: e.getElementsByTagName('Margen')[0]?.textContent || '',
            municipio: e.getElementsByTagName('Municipio')[0]?.textContent || '',
            provincia: e.getElementsByTagName('Provincia')[0]?.textContent || '',
            rotulo: e.getElementsByTagName('Rótulo')[0]?.textContent || '',
            tipoVenta: e.getElementsByTagName('Tipo_x0020_Venta')[0]?.textContent || '',
            precioAdblue: e.getElementsByTagName('Precio_x0020_Adblue')[0]?.textContent || '',
            precioAmoniaco: e.getElementsByTagName('Precio_x0020_Amoniaco')[0]?.textContent || '',
            precioBiodiesel: e.getElementsByTagName('Precio_x0020_Biodiesel')[0]?.textContent || '',
            precioBioetanol: e.getElementsByTagName('Precio_x0020_Bioetanol')[0]?.textContent || '',
            precioGasoleoA: e.getElementsByTagName('Precio_x0020_Gasoleo_x0020_A')[0]?.textContent || '',
            precioGasoleoB: e.getElementsByTagName('Precio_x0020_Gasoleo_x0020_B')[0]?.textContent || '',
            precioGasolina95E5: e.getElementsByTagName('Precio_x0020_Gasolina_x0020_95_x0020_E5')[0]?.textContent || '',
            precioGasolina98E5: e.getElementsByTagName('Precio_x0020_Gasolina_x0020_98_x0020_E5')[0]?.textContent || '',
            porcentajeBioEtanol: e.getElementsByTagName('_x0025__x0020_BioEtanol')[0]?.textContent || '',
            porcentajeEster: e.getElementsByTagName('_x0025__x0020_Éster_x0020_metílico')[0]?.textContent || '',
            ideess: e.getElementsByTagName('IDEESS')[0]?.textContent || '',
            idMunicipio: e.getElementsByTagName('IDMunicipio')[0]?.textContent || '',
            idProvincia: e.getElementsByTagName('IDProvincia')[0]?.textContent || '',
            idCCAA: e.getElementsByTagName('IDCCAA')[0]?.textContent || ''
          }));

          return estacionesInternas;
        }),
        catchError(err => {
          if (err.status === 404) {
            return of([]); // no hay estaciones, devolver array vacío
          }
          return throwError(() => err); // otros errores
        })
      );
  }
}
