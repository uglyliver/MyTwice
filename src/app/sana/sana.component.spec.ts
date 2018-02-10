import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SanaComponent } from './sana.component';

describe('SanaComponent', () => {
  let component: SanaComponent;
  let fixture: ComponentFixture<SanaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SanaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
