export interface Estacion {
  'C.P.'?: string;
  Dirección?: string;
  Horario?: string;
  Latitud?: string;
  Localidad?: string;
  'Longitud_x0020__x0028_WGS84_x0029_'?: string;
  Margen?: string;
  Municipio?: string;
  Precio_x0020_Adblue?: string;
  Precio_x0020_Amoniaco?: string;
  Precio_x0020_Biodiesel?: string;
  Precio_x0020_Bioetanol?: string;
  Precio_x0020_Biogas_x0020_Natural_x0020_Comprimido?: string;
  Precio_x0020_Biogas_x0020_Natural_x0020_Licuado?: string;
  Precio_x0020_Diésel_x0020_Renovable?: string;
  Precio_x0020_Gas_x0020_Natural_x0020_Comprimido?: string;
  Precio_x0020_Gas_x0020_Natural_x0020_Licuado?: string;
  Precio_x0020_Gases_x0020_licuados_x0020_del_x0020_petróleo?: string;
  Precio_x0020_Gasoleo_x0020_A?: string;
  Precio_x0020_Gasoleo_x0020_B?: string;
  Precio_x0020_Gasoleo_x0020_Premium?: string;
  Precio_x0020_Gasolina_x0020_95_x0020_E10?: string;
  Precio_x0020_Gasolina_x0020_95_x0020_E25?: string;
  Precio_x0020_Gasolina_x0020_95_x0020_E5?: string;
  Precio_x0020_Gasolina_x0020_95_x0020_E5_x0020_Premium?: string;
  Precio_x0020_Gasolina_x0020_95_x0020_E85?: string;
  Precio_x0020_Gasolina_x0020_98_x0020_E10?: string;
  Precio_x0020_Gasolina_x0020_98_x0020_E5?: string;
  Precio_x0020_Gasolina_x0020_Renovable?: string;
  Precio_x0020_Hidrogeno?: string;
  Precio_x0020_Metanol?: string;
  Provincia?: string;
  Remisión?: string;
  Rótulo?: string;
  Tipo_x0020_Venta?: string;
  _x0025__x0020_BioEtanol?: string;
  _x0025__x0020_Éster_x0020_metílico?: string;
  IDEESS?: string;
  IDMunicipio?: string;
  IDProvincia?: string;
  IDCCAA?: string;
}

export interface EstacionesResponse {
  Fecha?: string;
  ListaEESSPrecio?: {
    Estacion?: Estacion[];
  };
  Nota?: string;
  ResultadoConsulta?: string;
}
