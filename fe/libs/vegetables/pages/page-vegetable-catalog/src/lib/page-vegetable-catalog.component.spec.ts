import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageVegetableCatalogComponent } from './page-vegetable-catalog.component';

describe('PageVegetableCatalogComponent', () => {
  let component: PageVegetableCatalogComponent;
  let fixture: ComponentFixture<PageVegetableCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageVegetableCatalogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PageVegetableCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
