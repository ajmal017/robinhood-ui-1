import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RhTransferComponent } from './rh-transfer.component';

describe('RhTransferComponent', () => {
  let component: RhTransferComponent;
  let fixture: ComponentFixture<RhTransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RhTransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RhTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
