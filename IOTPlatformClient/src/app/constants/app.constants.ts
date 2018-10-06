import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
const ServiceUrl = '';

@Injectable()

export class UserConfigurations {
  public base = `${ServiceUrl}/user`;
  public registerUser = `${this.base}/register-user`;
}
