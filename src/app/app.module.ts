import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CardComponent } from './components/card/card.component';
import { CardLabelComponent } from './components/card/card-label/card-label.component';
import { CardPricingComponent } from './components/card/card-pricing/card-pricing.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { MenuBarDropdownComponent } from './components/menu-bar/menu-bar-dropdown/menu-bar-dropdown.component';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		CardComponent,
		CardLabelComponent,
		CardPricingComponent,
    MenuBarComponent,
    MenuBarDropdownComponent
	],
	imports: [BrowserModule, AppRoutingModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
