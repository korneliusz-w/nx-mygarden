import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureGroupListComponent } from './feature-group-list.component';

describe('FeatureGroupListComponent', () => {
  let component: FeatureGroupListComponent;
  let fixture: ComponentFixture<FeatureGroupListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeatureGroupListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureGroupListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
