import { Component, OnInit } from '@angular/core';
import { VehiclesService } from '../../services/vehicles.service';
import { Vehicle } from '../../models/vehiclesInterface';

@Component({
  selector: 'app-vehicles-list-page',
  imports: [],
  templateUrl: './vehicles-list-page.html',
  styleUrl: './vehicles-list-page.css',
})
export class VehiclesListPage implements OnInit {
  
  vehicleList: Vehicle[] = []

  constructor(private vehicleService: VehiclesService){}

  ngOnInit(): void {
    this.vehicleService.getVehicleList().subscribe((resp) => {
      this.vehicleList = resp.results;
    })
    
  }



}
