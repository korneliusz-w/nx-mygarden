import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiGroupListComponent } from './ui-group-list.component';

describe('UiGroupListComponent', () => {
  let component: UiGroupListComponent;
  let fixture: ComponentFixture<UiGroupListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiGroupListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiGroupListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
