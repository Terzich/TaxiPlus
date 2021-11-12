import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  redirectWhereCalled = new EventEmitter<string>();

  constructor() { }
}
