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
    // Avec un temps d'attente et envoi d'un message avant et après
    this.messageService.add('HeroService.getHeroes: Cherche les héros ...');
    let obs:Observable;
    obs = of(HEROES).pipe(delay(1000));
    obs.subscribe(hero => this.messageService.add('HeroService.getHeroes: Héros trouvés !'));
    return obs
  }

  getHero(id:number):Observable<Hero> {
    // Avec un temps d'attente et envoi d'un message avant et après
    let obs:Observable;
    this.messageService.add(`HeroService.getHero: Cherche le héro id=${id}`);
    //noinspection TypeScriptValidateTypes
    obs = of(HEROES.find(hero => hero.id === id)).pipe(delay(500));
    obs.subscribe(hero => this.messageService.add(`HeroService.getHero: Héro ${hero.id} trouvé : ${hero.name}`));
    return obs;
  }
}
