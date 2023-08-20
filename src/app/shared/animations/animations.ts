import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';


export const bounceAnimation = trigger('bounceAnimation', [
    state('in', style({ transform: 'translateX(0)' })),
    transition(':enter', [
      animate('0.5s', keyframes([
        style({ transform: 'translateX(100%)', offset: 0 }),
        style({ transform: 'translateX(-10px)', offset: 0.8 }),
        style({ transform: 'translateX(0)', offset: 1 })
      ]))
    ]),
    transition(':leave', [
      animate('0.5s', keyframes([
        style({ transform: 'translateX(0)', offset: 0 }),
        style({ transform: 'translateX(10px)', offset: 0.2 }),
        style({ transform: 'translateX(100%)', offset: 1 })
      ]))
    ])
  ]);


 export const fadeOutRightAnimation = trigger('fadeOutRightAnimation', [
    transition(':leave', [
      animate('800ms ease-in-out', keyframes([
        style({ opacity: 1, offset: 0 }),
        style({ opacity: 0, transform: 'translateX(20px)', offset: 0.6 }),
        style({ opacity: 0, transform: 'translateX(100%)', offset: 1 })
      ]))
    ])
  ]);


 export const cardAnimate= trigger('onOff', [
    transition(':enter', [
      style({ transform:'scale(0)' }),
      animate('500ms', style({ transform:'scale(1)' })),
    ]),
    transition(':leave', [
      animate('500ms', style({ transform:'scale(0)' }))
    ])
  ]);