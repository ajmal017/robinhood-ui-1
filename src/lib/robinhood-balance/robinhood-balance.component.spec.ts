import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RobinhoodBalanceComponent } from './robinhood-balance.component';

describe('RobinhoodBalanceComponent', () => {
  let component: RobinhoodBalanceComponent;
  let fixture: ComponentFixture<RobinhoodBalanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RobinhoodBalanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RobinhoodBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
