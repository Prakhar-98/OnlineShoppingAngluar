import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class RetailerAuthGuardService implements CanActivate {

  constructor(private local:LocalStorageService,private router:Router) { }

  canActivate():boolean
  {
    if(this.local.retrieve('user')!=null && this.local.retrieve('user').userRole=='Retailer') return true;
    this.router.navigate(['**']);
     return false;
  }
}
