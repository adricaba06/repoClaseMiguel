import { Component, OnInit } from '@angular/core';
import { ComunidadAutonoma } from '../../interface/ComunidadAutonoma.interface';
import { Provincia } from '../../interface/Provincia.interface';
import { ComunidadesService } from '../../services/comunidad-autonoma-service';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ProvinciasService } from '../../services/provincia-service';
import { MunicipiosService } from '../../services/municipio-service';
import { Municipio } from '../../interface/Municipio.interface';
import { EstacionesService } from '../../services/eesst-service';
import { Estacion } from '../../interface/eesst.interface';
import { EstacionInterna } from '../../interface/estacionInterna.interface';

@Component({
  selector: 'app-home-page',
  imports: [NgbDropdownModule],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage implements OnInit {
  comunidadesdAutonomas: ComunidadAutonoma[] = [];
  provincias: Provincia[] = [];
  municipios: Municipio[] = [];
  estaciones: EstacionInterna[] = [];

  comunidadId = '';
  provinciaId = '';
  municipioId = '';

  constructor(
    private comuAutoService: ComunidadesService,
    private provinciaService: ProvinciasService,
    private municipioService: MunicipiosService,
    private estacionService: EstacionesService, 
  ) {}

  ngOnInit(): void {
    this.getAllCominidadesAutonomas();
  }

  getAllCominidadesAutonomas() {
    this.comuAutoService.getAllComunidadesAutonomas().subscribe((resp) => {
      console.log(resp);
      this.comunidadesdAutonomas = resp.ComunidadAutonoma;
    });
  }

  getId(id: string) {
    this.comunidadId = id;
    console.log(this.comunidadId);
    this.getAllProvincias();
  }

  getProvinciaId(id: string) {
    this.provinciaId = id;
    this.getAllMunicipios()
  }

  

  getAllProvincias() {
    this.provinciaService.getProvinciasByCCAA(this.comunidadId).subscribe((resp) => {
      console.log(this.comunidadId);
      console.log(resp);
      this.provincias = resp;
    });
  }


  getAllMunicipios(){
    this.municipioService.getMunicipiosPorProvincia(this.provinciaId).subscribe((resp) =>{
      this.municipios = resp.Municipio;
    })
  }


  getAllestacionesFromMunicipio(){
    this.estacionService.getEstacionesByMunicipio(this.municipioId).subscribe((resp) =>{
      this.estaciones = resp
      console.log(resp)
    });
  }

  getMunicipioId(id: string){
    this.municipioId = id;
    this.getAllestacionesFromMunicipio();
  
  }

}
