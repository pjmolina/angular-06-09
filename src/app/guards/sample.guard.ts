import { Injectable } from '@angular/core'
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanDeactivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree
} from '@angular/router'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { CityService } from '../services/city.service'

@Injectable({
  providedIn: 'root'
})
export class SampleGuard implements CanActivate {
  constructor(private router: Router, private cityService: CityService) {}

  // private session: SessionService
  // user roles

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const obs = this.cityService
      .getCity('Sevilla')
      .pipe(map((ciudad) => ciudad !== null))

    return obs

    const res = false
    if (!res) {
      this.router.navigate(['login'])
      return false
    }
    return true
    // return session.userLogged()
  }
}
