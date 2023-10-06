import { Component } from '@angular/core';

@Component({
	selector: 'app-card-pricing',
	template: ` <div class="card-pricing__container">
		<div class="card-pricing__title">Play it Now!</div>
		<div class="card-pricing__value">
			<div class="card-pricing__value__console">
				<span>|</span>
				<p>{{ gameType }}</p>
			</div>
			<div class="card-pricing__value__money">
				<p class="game-price">{{ gamePrice }}</p>
			</div>
		</div>
	</div>`,
	styleUrls: ['./card-pricing.component.scss'],
})
export class CardPricingComponent {
	public gameType = 'Digital PS4';
	public gamePrice = 'R$ 399,99';
}
