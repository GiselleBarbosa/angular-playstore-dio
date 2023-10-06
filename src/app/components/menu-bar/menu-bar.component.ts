import { Component } from '@angular/core';
import { MenuOptions } from 'src/app/interfaces/menuOptions';

@Component({
	selector: 'app-menu-bar',
	template: `
		<div class="menu-bar__container">
			<div class="menu-bar__logo">
				<img
					src="assets/ps-logo.png"
					alt="playstation store logo"
					width="140px"
					height="31px"
				/>
			</div>

			<div class="menu-bar__item" *ngFor="let option of menuOptions">
				<ul>
					<li>
						<a href="{{ option.link }}">{{ option.option }}</a>
					</li>
				</ul>
			</div>
		</div>
	`,
	styleUrls: ['./menu-bar.component.scss'],
})
export class MenuBarComponent {
	public menuOptions: MenuOptions[] = [
		{
			option: 'PORTFÓLIO',
			link: 'https://gisellebarbosa.github.io/portfolio/index.html',
		},

		{
			option: 'LINKEDIN',
			link: 'https://www.linkedin.com/in/gisellebarb/',
		},

		{
			option: 'GITHUB',
			link: 'https://github.com/GiselleBarbosa',
		},
	];
}
