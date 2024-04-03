import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageVegetableCategoriesComponent } from './page-vegetable-categories.component';

describe('PageVegetableCategoriesComponent', () => {
  let component: PageVegetableCategoriesComponent;
  let fixture: ComponentFixture<PageVegetableCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageVegetableCategoriesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PageVegetableCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
