import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PronostricoComponent } from './pronostrico.component';

describe('PronostricoComponent', () => {
  let component: PronostricoComponent;
  let fixture: ComponentFixture<PronostricoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PronostricoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PronostricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
