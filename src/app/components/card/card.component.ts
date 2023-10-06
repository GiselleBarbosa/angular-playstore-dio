import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-card',
	template: `
		<a href="#" class="card__container">
			<img class="card__image" [src]="[gameCover]" alt="" />
			<app-card-label gameLabel=" {{ gameLabel }}" />
			<app-card-pricing gameType="{{ gameType }}" gamePrice="{{ gamePrice }}" />
		</a>
	`,
	styleUrls: ['./card.component.scss'],
})
export class CardComponent {
	@Input() gameCover!: string;
	@Input() gameLabel!: string;
	@Input() gameType!: string;
	@Input() gamePrice!: string;
}
