import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercalcComponent } from './usercalc.component';

describe('UsercalcComponent', () => {
  let component: UsercalcComponent;
  let fixture: ComponentFixture<UsercalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsercalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsercalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
