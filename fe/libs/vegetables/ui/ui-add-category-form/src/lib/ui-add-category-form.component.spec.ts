import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiAddCategoryFormComponent } from './ui-add-category-form.component';

describe('UiAddCategoryFormComponent', () => {
  let component: UiAddCategoryFormComponent;
  let fixture: ComponentFixture<UiAddCategoryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiAddCategoryFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiAddCategoryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
