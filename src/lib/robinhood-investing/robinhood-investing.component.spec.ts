import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RobinhoodInvestingComponent } from './robinhood-investing.component';

describe('RobinhoodInvestingComponent', () => {
  let component: RobinhoodInvestingComponent;
  let fixture: ComponentFixture<RobinhoodInvestingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RobinhoodInvestingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RobinhoodInvestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
