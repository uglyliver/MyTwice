import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JeongyeonComponent } from './jeongyeon.component';

describe('JeongyeonComponent', () => {
  let component: JeongyeonComponent;
  let fixture: ComponentFixture<JeongyeonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JeongyeonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JeongyeonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
