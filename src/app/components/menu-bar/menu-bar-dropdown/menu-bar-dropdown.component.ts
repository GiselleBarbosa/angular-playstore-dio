import { Component, Input } from '@angular/core';
import { MenuOptions } from 'src/app/interfaces/menuOptions';
import { linksMock } from '../links-mock';

@Component({
	selector: 'app-menu-bar-dropdown',
	templateUrl: './menu-bar-dropdown.component.html',
	styleUrls: ['./menu-bar-dropdown.component.scss'],
})
export class MenuBarDropdownComponent {
	public menuOptions: MenuOptions[] = linksMock;

	@Input() isOpenMenu = false;
}
