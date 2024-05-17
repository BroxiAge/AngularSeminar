import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpareAboutComponent } from './spare-about.component';

describe('SpareAboutComponent', () => {
  let component: SpareAboutComponent;
  let fixture: ComponentFixture<SpareAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpareAboutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpareAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
