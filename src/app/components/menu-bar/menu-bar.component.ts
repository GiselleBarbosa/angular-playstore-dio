import { Component } from '@angular/core';

@Component({
	selector: 'app-menu-bar',
	template: `<div class="menu-bar__container">
		<div class="menu-bar__logo">
			<img
				src="assets/ps-logo.png"
				alt="playstation store logo"
				width="140px"
				height="31px"
			/>
		</div>

		<div class="menu-bar__item">
			<ul>
				<li>
					<a href="https://gisellebarbosa.github.io/portfolio/index.html"
						>PORTFÓLIO</a
					>
				</li>
				<li><a href="https://www.linkedin.com/in/gisellebarb/">LINKEDIN</a></li>
				<li><a href="https://github.com/GiselleBarbosa">GITHUB</a></li>
			</ul>
		</div>
	</div> `,
	styleUrls: ['./menu-bar.component.scss'],
})
export class MenuBarComponent {}
