import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RobinhoodSearchComponent } from './robinhood-search.component';

describe('RobinhoodSearchComponent', () => {
  let component: RobinhoodSearchComponent;
  let fixture: ComponentFixture<RobinhoodSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RobinhoodSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RobinhoodSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
