import {Injectable} from "@angular/core";
import {Hero} from "./hero";
import {HEROES} from "./mock-heroes";
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";
import {delay} from "rxjs/operators";
import {pipe} from 'rxjs/util/pipe';
import {MessageService} from "./message.service";

@Injectable()
export class HeroService {

  constructor(private messageService:MessageService) {
  }

  getHeroes():Observable<Hero[]> {

    // Code normal
    // return of(HEROES);

    // Avec 3 secondes d'attentes et envoi d'un message avant
    this.messageService.add('HeroService: Lecture des héros ...');
    return of(HEROES).pipe(delay(3000));

  }
}
