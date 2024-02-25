import { MenuOptions } from 'src/app/interfaces/menuOptions';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CheckScreenSizeService } from 'src/app/services/check-screen-size-service.service';
import { Subscription } from 'rxjs';
import { linksMock } from './links-mock';

@Component({
	selector: 'app-menu-bar',
	styleUrls: ['./menu-bar.component.scss'],
	templateUrl: './menu-bar.component.html',
})
export class MenuBarComponent implements OnInit, OnDestroy {
	private checkScreenSizeService = inject(CheckScreenSizeService);
	private unsubscription!: Subscription;

	public isMobile = false;
	public isOpenMenu = false;

	public checkScreenSize(): void {
		this.unsubscription = this.checkScreenSizeService
			.getIsMobile()
			.subscribe((isMobile: boolean) => {
				this.isMobile = isMobile;
				this.isOpenMenu = false;
			});
	}

	public menuOptions: MenuOptions[] = linksMock;

	public ngOnInit(): void {
		this.checkScreenSize();
	}

	public ngOnDestroy(): void {
		this.unsubscription.unsubscribe();
	}

	public openMenuDropdown(): void {
		this.isOpenMenu = !this.isOpenMenu;
	}
}
