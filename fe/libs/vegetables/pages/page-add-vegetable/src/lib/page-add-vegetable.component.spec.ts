import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageAddVegetableComponent } from './page-add-vegetable.component';

describe('PageAddVegetableComponent', () => {
  let component: PageAddVegetableComponent;
  let fixture: ComponentFixture<PageAddVegetableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageAddVegetableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PageAddVegetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
