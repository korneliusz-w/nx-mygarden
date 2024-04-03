import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiAddGroupFormComponent } from './ui-add-group-form.component';

describe('UiAddGroupFormComponent', () => {
  let component: UiAddGroupFormComponent;
  let fixture: ComponentFixture<UiAddGroupFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiAddGroupFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiAddGroupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
