import { Component, OnInit } from '@angular/core';
import { VehicleDetail } from '../../models/vehicleDetailInterface';
import { VehiclesService } from '../../services/vehicles.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-vehicles-detail-page',
  imports: [],
  templateUrl: './vehicles-detail-page.html',
  styleUrl: './vehicles-detail-page.css',
})
export class VehiclesDetailPage implements OnInit {

  vehicleD!: VehicleDetail

  constructor(private vehicleService: VehiclesService) {}

  ngOnInit(): void {
    const url = "https://swapi.dev/api/vehicles/4/";
    const id = url.split("/").filter(Boolean).pop();

    this.vehicleService.getVehicle(id).subscribe(Response =>
      this.vehicleD = Response
    )
  }


}
