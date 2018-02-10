import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DahyunComponent } from './dahyun.component';

describe('DahyunComponent', () => {
  let component: DahyunComponent;
  let fixture: ComponentFixture<DahyunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DahyunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DahyunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
