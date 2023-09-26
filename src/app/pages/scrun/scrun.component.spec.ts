import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrunComponent } from './scrun.component';

describe('ScrunComponent', () => {
  let component: ScrunComponent;
  let fixture: ComponentFixture<ScrunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrunComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
