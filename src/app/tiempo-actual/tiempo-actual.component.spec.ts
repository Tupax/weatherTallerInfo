import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiempoActualComponent } from './tiempo-actual.component';

describe('TiempoActualComponent', () => {
  let component: TiempoActualComponent;
  let fixture: ComponentFixture<TiempoActualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiempoActualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiempoActualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
