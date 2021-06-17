import { RouterModule, Routes } from '@angular/router'

import { AboutComponent } from './about/about.component'
import { ErrorPageComponent } from './error-page/error-page.component'
import { SampleGuard } from './guards/sample.guard'
import { LoginComponent } from './login/login.component'
import { WelcomeComponent } from './welcome/welcome.component'

export enum WellknowRoutes {
  AcercaDe = 'acerca-de',
  Login = 'login'
}

export const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: WellknowRoutes.Login, component: LoginComponent },
  { path: 'acerca-de', component: AboutComponent, canActivate: [SampleGuard] },
  {
    path: 'temperaturas',
    loadChildren: () =>
      import('./temperatures/temperatures.module').then(
        (m) => m.TemperaturesModule
      )
  },
  { path: '**', component: ErrorPageComponent }
]
