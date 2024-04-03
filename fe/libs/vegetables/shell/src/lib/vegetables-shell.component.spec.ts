import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VegetablesShellComponent } from './vegetables-shell.component';

describe('VegetablesShellComponent', () => {
  let component: VegetablesShellComponent;
  let fixture: ComponentFixture<VegetablesShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VegetablesShellComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VegetablesShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
