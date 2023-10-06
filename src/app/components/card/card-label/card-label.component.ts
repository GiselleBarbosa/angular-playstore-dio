import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-card-label',
	template: `<div class="card-label__container">
		<div class="card-label__content">
			<p>{{ gameLabel }}</p>
		</div>
	</div> `,
	styleUrls: ['./card-label.component.scss'],
})
export class CardLabelComponent {
	@Input() gameLabel = 'Exclusivo';
}
