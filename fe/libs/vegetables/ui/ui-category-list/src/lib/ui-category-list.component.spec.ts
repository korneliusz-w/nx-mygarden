import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiCategoryListComponent } from './ui-category-list.component';

describe('UiCategoryListComponent', () => {
  let component: UiCategoryListComponent;
  let fixture: ComponentFixture<UiCategoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiCategoryListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
