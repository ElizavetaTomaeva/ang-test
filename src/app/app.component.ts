import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <label>Enter your name</label>
        <input [(ngModel)]="name" placeholder="name">
        <h1>Добро пожаловать, {{name}}</h1>
    `,

})

export class AppComponent {
    name: ''
}