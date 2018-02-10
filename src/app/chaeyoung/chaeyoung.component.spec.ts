import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaeyoungComponent } from './chaeyoung.component';

describe('ChaeyoungComponent', () => {
  let component: ChaeyoungComponent;
  let fixture: ComponentFixture<ChaeyoungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChaeyoungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChaeyoungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
