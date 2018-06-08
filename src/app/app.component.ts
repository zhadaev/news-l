import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { trigger, animate, style, group, query, transition, state, keyframes, animateChild } from '@angular/animations';


export const routeStateTrigger =
  trigger('routeState', [
    transition('list <=> details', [
      group([
        query(
          ':enter',
          [
            style({
              opacity: 0
            }),
            animate(
              '1s cubic-bezier(0, 1.8, 1, 1.8)',
              style({ opacity: 1})
            ),
            animateChild()
          ],
          { optional: true }
        ),
        query(
          ':leave',
          [animate('0.35s', style({ opacity: 0 })), animateChild()],
          { optional: true }
        )
      ])
    ])
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
    return routeData ? routeData : 'list';

  }

}
