import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureAddGroupComponent } from './feature-add-group.component';

describe('FeatureAddGroupComponent', () => {
  let component: FeatureAddGroupComponent;
  let fixture: ComponentFixture<FeatureAddGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeatureAddGroupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureAddGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
