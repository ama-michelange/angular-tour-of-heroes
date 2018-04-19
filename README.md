# Angular Tour Of Heroes

Code du tutoriel progressif basé sur l'original d'Angular.

Suivez les différents tags Git pour atteindre le code de la fin d'une étape du tutoriel (ou le début de la suivante) :

| Fin du paragraphe                                                | Git Tag                       |
| :--------------------------------------------------------------- | :---------------------------- |
| [Introduction](https://angular.io/tutorial)                      | end.initial                   |
| [The Application Shell](https://angular.io/tutorial/toh-pt0)     | end.theApplicationShell       |
| [The Hero Editor](https://angular.io/tutorial/toh-pt1)           | end.theHeroEditor             |
| [Display a Heroes List](https://angular.io/tutorial/toh-pt2)     | end.displayingList            |
| [Master/Detail Components](https://angular.io/tutorial/toh-pt3)  | end.detailComponents          |
| [Services](https://angular.io/tutorial/toh-pt4)                  | end.services                  |
| [HTTP](https://angular.io/tutorial/toh-pt6)                      | end.http                      |


# Utilisation des commandes d'Angular CLI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Installation de Protractor pour contrer le proxy et les bugs
Installer ``protractor`` en global. ``webdriver-manager`` est inclu et s'installera en même temps
``` script
yarn global add protractor
```

Vérifier les versions installées
``` script
protractor --version
webdriver-manager version
```
 
Mettre à jour les drivers par défaut pour Selenium
``` script
webdriver-manager update --ignore_ssl --proxy [http://server:port]
```

Une fois à jour, copier les drivers dans votre projet
``` script
Source :  C:\Users\[DAS User]\AppData\Local\Yarn\Data\global\node_modules\webdriver-manager\selenium
Destination : C:\[Path Projet]\node_modules\webdriver-manager\selenium
 
copy [Source]\*.* [Destination]
``` 

Lancer les tests End to end avec la commande
``` script
ng e2e --no-webdriver-update
```

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
