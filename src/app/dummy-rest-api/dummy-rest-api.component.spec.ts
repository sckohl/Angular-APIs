import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyRestAPIComponent } from './dummy-rest-api.component';

describe('DummyRestAPIComponent', () => {
  let component: DummyRestAPIComponent;
  let fixture: ComponentFixture<DummyRestAPIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DummyRestAPIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyRestAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
