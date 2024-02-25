import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBarDropdownComponent } from './menu-bar-dropdown.component';

describe('MenuBarDropdownComponent', () => {
  let component: MenuBarDropdownComponent;
  let fixture: ComponentFixture<MenuBarDropdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuBarDropdownComponent]
    });
    fixture = TestBed.createComponent(MenuBarDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
