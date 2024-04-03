import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageVegetableGroupsComponent } from './page-vegetable-groups.component';

describe('PageVegetableGroupsComponent', () => {
  let component: PageVegetableGroupsComponent;
  let fixture: ComponentFixture<PageVegetableGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageVegetableGroupsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PageVegetableGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
