import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualServicesComponent } from './individual-services.component';

describe('IndividualServicesComponent', () => {
  let component: IndividualServicesComponent;
  let fixture: ComponentFixture<IndividualServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndividualServicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndividualServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
