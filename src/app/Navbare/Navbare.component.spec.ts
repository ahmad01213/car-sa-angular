/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NavbareComponent } from './Navbare.component';

describe('NavbareComponent', () => {
  let component: NavbareComponent;
  let fixture: ComponentFixture<NavbareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
