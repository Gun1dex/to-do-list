import { transition, trigger, query, style, animate, group } from '@angular/animations';

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('Home => *', [
      query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
      group([
        query(':enter', [
          style({ transform: 'translateX(100%)' }),
          animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
        ], { optional: true }),
        query(':leave', [
          style({ transform: 'translateX(0%)' }),
          animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
        ], { optional: true }),
      ])
    ]),
    transition('* => Home', [
      query(':enter, :leave',
      style({ position: 'fixed', width: '100%' }), { optional: true }),
      group([
        query(':enter',[
          style({ transform: 'translateX(-100%)' }),
          animate('0.5s ease-in-out',
          style({ transform: 'translateX(0%)' }))
        ], { optional: true }),
        query(':leave', [
          style({ transform:   'translateX(0%)'}),
          animate('0.5s ease-in-out',
          style({ transform: 'translateX(100%)' }))
        ], { optional: true }),
      ])
    ]),
    transition('Detail => Add-task', [
      query(':enter, :leave',
      style({ position: 'fixed', width: '100%' }), { optional: true }),
      group([
        query(':enter',[
          style({ transform: 'translateX(-100%)' }),
          animate('0.5s ease-in-out',
          style({ transform: 'translateX(0%)' }))
        ], { optional: true }),
        query(':leave', [
          style({ transform:   'translateX(0%)'}),
          animate('0.5s ease-in-out',
          style({ transform: 'translateX(100%)' }))
        ], { optional: true }),
      ])
    ]),
    transition('* => Signin', [
      query(':enter, :leave',
      style({ position: 'fixed', width: '100%' }), { optional: true }),
      group([
        query(':enter',[
          style({ transform: 'translateX(-100%)' }),
          animate('0.5s ease-in-out',
          style({ transform: 'translateX(0%)' }))
        ], { optional: true }),
        query(':leave', [
          style({ transform:   'translateX(0%)'}),
          animate('0.5s ease-in-out',
          style({ transform: 'translateX(100%)' }))
        ], { optional: true }),
      ])
    ]),
    transition('* => Signup', [
      query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
      group([
        query(':enter', [
          style({ transform: 'translateX(100%)' }),
          animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
        ], { optional: true }),
        query(':leave', [
          style({ transform: 'translateX(0%)' }),
          animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
        ], { optional: true }),
      ])
    ]),
    transition('* => Detail', [
      query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
      group([
        query(':enter', [
          style({ transform: 'translateX(100%)' }),
          animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
        ], { optional: true }),
        query(':leave', [
          style({ transform: 'translateX(0%)' }),
          animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
        ], { optional: true }),
      ])
    ]),
    transition('* => Add-task', [
      query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
      group([
        query(':enter', [
          style({ transform: 'translateX(100%)' }),
          animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
        ], { optional: true }),
        query(':leave', [
          style({ transform: 'translateX(0%)' }),
          animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
        ], { optional: true }),
      ])
    ]),
    transition('Detail => Task-list', [
      query(':enter, :leave',
      style({ position: 'fixed', width: '100%' }), { optional: true }),
      group([
        query(':enter',[
          style({ transform: 'translateX(-100%)' }),
          animate('0.5s ease-in-out',
          style({ transform: 'translateX(0%)' }))
        ], { optional: true }),
        query(':leave', [
          style({ transform:   'translateX(0%)'}),
          animate('0.5s ease-in-out',
          style({ transform: 'translateX(100%)' }))
        ], { optional: true }),
      ])
    ]),
    transition('* => Task-list', [
      query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
      group([
        query(':enter', [
          style({ transform: 'translateX(100%)' }),
          animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
        ], { optional: true }),
        query(':leave', [
          style({ transform: 'translateX(0%)' }),
          animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
        ], { optional: true }),
      ])
    ])
]);
