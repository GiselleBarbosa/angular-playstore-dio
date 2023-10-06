import { Component } from '@angular/core';

@Component({
	selector: 'app-card',
	template: `
		<a href="#" class="card__container">
			<img class="card__image" src="assets/ffx.jpg" alt="" />
			<app-card-label />
			<app-card-pricing />
		</a>
	`,
	styleUrls: ['./card.component.scss'],
})
export class CardComponent {}
