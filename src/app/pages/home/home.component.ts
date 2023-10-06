import { Component } from '@angular/core';

@Component({
	selector: 'app-home',
	template: `<div class="home__container">
		<app-card gameCover="assets/ffx.jpg" />
		<app-card gameCover="assets/gw4.png" />
		<app-card gameCover="assets/mk11.jpeg" />
	</div> `,
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}
