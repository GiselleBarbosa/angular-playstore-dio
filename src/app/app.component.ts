import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	template: `
		<app-menu-bar />
		<app-home />
	`,
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
}
