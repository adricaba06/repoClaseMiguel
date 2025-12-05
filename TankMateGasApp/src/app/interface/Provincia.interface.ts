export interface Provincia {
  IDPovincia: string;
  IDCCAA: string;
  Provincia: string;
  CCAA: string;
}

export interface ProvinciaResponse {
  Provincia: Provincia[];
}
