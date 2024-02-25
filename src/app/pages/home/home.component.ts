import { Component } from '@angular/core';

@Component({
	selector: 'app-home',
	template: `<div class="home__container">
		<app-card
			gameCover="assets/ffx.jpg"
			[gameLabel]="'Digital'"
			[gamePrice]="'299,90'"
			[gameType]="'RPG'"
		/>

		<app-card
			gameCover="assets/ffxii.jpg"
			[gameLabel]="'Digital'"
			[gamePrice]="'299,90'"
			[gameType]="'RPG'"
		/>

		<app-card
			gameCover="assets/gw4.png"
			[gameLabel]="'Exclusivo'"
			[gamePrice]="'399,90'"
			[gameType]="'RPG'"
		/>
		<app-card
			gameCover="assets/mk11.jpeg"
			[gameLabel]="'Exclusivo'"
			[gamePrice]="'99,90'"
			[gameType]="'LUTA'"
		/>

		<app-card
			gameCover="assets/bt-1.jpg"
			[gameLabel]="'Digital'"
			[gamePrice]="'199,90'"
			[gameType]="'AVENTURA/TIRO '"
		/>

		<app-card
			gameCover="assets/tlou.jpg"
			[gameLabel]="'Digital'"
			[gamePrice]="'399,90'"
			[gameType]="'AVENTURA/TIRO'"
		/>
		<app-card
			gameCover="assets/bt-2.jpg"
			[gameLabel]="'Digital'"
			[gamePrice]="'399,90'"
			[gameType]="'AVENTURA/TIRO'"
		/>

		<app-card
			gameCover="assets/gow.jpg"
			[gameLabel]="'Digital'"
			[gamePrice]="'499,90'"
			[gameType]="'AVENTURA'"
		/>

		<app-card
			gameCover="assets/bt-5.jpg"
			[gameLabel]="'Pré-venda'"
			[gamePrice]="'399,90'"
			[gameType]="'AVENTURA/  TIRO'"
		/>

		<app-card
			gameCover="assets/horizon.jpg"
			[gameLabel]="'Pré-venda'"
			[gamePrice]="'399,90'"
			[gameType]="'AVENTURA/  TIRO'"
		/>
	</div> `,
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}
