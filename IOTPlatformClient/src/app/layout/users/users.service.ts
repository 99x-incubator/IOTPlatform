import { Injectable } from '@angular/core';
import { UserConfigurations } from '../../constants/app.constants';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private userConfigurations: UserConfigurations) { }
}
