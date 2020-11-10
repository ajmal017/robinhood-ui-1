import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RobinhoodAccountComponent } from './robinhood-account.component';

describe('RobinhoodAccountComponent', () => {
  let component: RobinhoodAccountComponent;
  let fixture: ComponentFixture<RobinhoodAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RobinhoodAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RobinhoodAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
