import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { trigger, animate, style, group, query, transition, state, keyframes } from '@angular/animations';


export const routeStateTrigger =
  trigger('routeState', [
    state('list', style({
      opacity: '1'
    })),
    state('details', style({
      opacity: '1'
    })),
    transition('list => details', animate('1.5s ease', keyframes([
      style({transform: 'translateX(100vw)', offset: 0 }),
      style({transform: 'translateX(0)', offset: 0.5 }),
      style({transform: 'translateX(0)', offset: 1 }),
    ]))),
    transition('details => list', animate('1.5s ease', keyframes([
      style({ opacity: 0, offset: 0 }),
      style({ opacity: .4, offset: 0.4 }),
      style({ opacity: .8, offset: 0.8 }),
      style({ opacity: 1, offset: 1 })
    ])))
  ]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeStateTrigger]
})



export class AppComponent {

  getAnimationData(routerOutlet: RouterOutlet) {

    const routeData = routerOutlet.activatedRouteData['animation'];
    return routeData ? routeData : 'rootPage';

  }

}
