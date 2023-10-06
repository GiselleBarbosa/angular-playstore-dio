import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	template: `<app-menu-bar />
		<app-home />
		<router-outlet />`,
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = 'angular_psn_store';
}
