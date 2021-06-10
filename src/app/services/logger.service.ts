import { Injectable } from '@angular/core';

let counter = 0;

@Injectable()
export class LoggerService {
  id: number = -1;

  constructor() {
    this.id = counter++;
  }
  log(msg: any) {
    console.log(this.id, msg);
  }
  error(msg: any) {
    console.error(this.id, msg);
  }
  warn(msg: any) {
    console.warn(this.id, msg);
  }
}

@Injectable()
export class Logger2Service {
  id: number = -1;

  constructor() {
    this.id = counter++;
  }
  log(msg: any) {
    console.log('v2:' + this.id, msg);
  }
  error(msg: any) {
    console.error('v2:' + this.id, msg);
  }
  warn(msg: any) {
    console.warn('v2:' + this.id, msg);
  }
}

@Injectable()
export class LoggerNothingService {
  id: number = -1;

  constructor() {
    this.id = counter++;
  }
  log(msg: any) {}
  error(msg: any) {}
  warn(msg: any) {}
}
