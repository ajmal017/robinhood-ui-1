import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RobinhoodMessageDetailComponent } from './robinhood-message-detail.component';

describe('RobinhoodMessageDetailComponent', () => {
  let component: RobinhoodMessageDetailComponent;
  let fixture: ComponentFixture<RobinhoodMessageDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RobinhoodMessageDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RobinhoodMessageDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
