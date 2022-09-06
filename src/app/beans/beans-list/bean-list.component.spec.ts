import { ComponentFixture, TestBed } from '@angular/core/testing';
// Http testing module and mocking controller
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { BeanListComponent } from './bean-list.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('BeanListComponent', () => {
  let component: BeanListComponent;
  let fixture: ComponentFixture<BeanListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeanListComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [ HttpClientTestingModule ],
      providers: [provideMockStore({})],
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
