import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CestComponent } from './cest.component';

describe('CestComponent', () => {
  let component: CestComponent;
  let fixture: ComponentFixture<CestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
