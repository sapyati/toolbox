import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppslistComponent } from './appslist.component';

describe('AppslistComponent', () => {
  let component: AppslistComponent;
  let fixture: ComponentFixture<AppslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
