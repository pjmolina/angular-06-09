import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListTemperaturesComponent } from './list-temperatures/list-temperatures.component';
import { CreateTemperatureComponent } from './create-temperature/create-temperature.component';
import { EditTemperatureComponent } from './edit-temperature/edit-temperature.component';
import { DeleteTemperatureComponent } from './delete-temperature/delete-temperature.component';
import { FormsModule } from '@angular/forms';
import { WeatherComponent } from './weather/weather.component';
import { SharedModule } from '../shared/shared.module';
import { LoggerService } from '../services/logger.service';

const routes: Routes = [
  { path: '', component: ListTemperaturesComponent },
  { path: 'crear', component: CreateTemperatureComponent },
  {
    path: 'detalle/:name',
    component: EditTemperatureComponent,
    data: { action: 'VER' },
  },
  {
    path: 'editar/:name',
    component: EditTemperatureComponent,
    data: { action: 'EDITAR' },
  },
  { path: 'borrar/:name', component: DeleteTemperatureComponent },
];

@NgModule({
  declarations: [
    ListTemperaturesComponent,
    CreateTemperatureComponent,
    EditTemperatureComponent,
    DeleteTemperatureComponent,
    WeatherComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    SharedModule,
  ],
  providers: [LoggerService],
})
export class TemperaturesModule {}
