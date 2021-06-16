import { Component } from '@angular/core';
import { WellknowRoutes } from './app.routing';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  a = 1;
  WellknowRoutes = WellknowRoutes;
}
