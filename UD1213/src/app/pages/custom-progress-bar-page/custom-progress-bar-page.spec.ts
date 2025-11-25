import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomProgressBarPage } from './custom-progress-bar-page';

describe('CustomProgressBarPage', () => {
  let component: CustomProgressBarPage;
  let fixture: ComponentFixture<CustomProgressBarPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomProgressBarPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomProgressBarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
