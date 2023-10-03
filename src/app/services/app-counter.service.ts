import {LogService} from "./log.service";
import {Injectable} from "@angular/core";
@Injectable({providedIn: 'root'})
export class AppCounterService {
  constructor(private service: LogService) {
  }
  counter = 0;

  increase() {
    this.service.log( "increase counter!")
    this.counter++
  }

  decrease() {
    this.service.log( "decrease counter!")
    this.counter--
  }
}
