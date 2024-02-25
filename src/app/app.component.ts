import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	template: `
		<div class="container">
			<div class="container__header">
				<app-menu-bar />
			</div>
			<div class="container__content">
				<app-home />
			</div>
		</div>
	`,
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
