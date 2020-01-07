import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HienThiPhimComponent } from './hien-thi-phim.component';

describe('HienThiPhimComponent', () => {
  let component: HienThiPhimComponent;
  let fixture: ComponentFixture<HienThiPhimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HienThiPhimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HienThiPhimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
