import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MOCK_CATEGORIES } from '../../shared/constants/mock-data';

import { SelectFilterComponent } from './select-filter.component';

describe('SelectFilterComponent', () => {
  let component: SelectFilterComponent;
  let fixture: ComponentFixture<SelectFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectFilterComponent],
      imports: [
        CommonModule,
        MatInputModule,
        MatSelectModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit changedCategory on category change', () => {
    const changedCategory = 'New Category';
    spyOn(component.changedCategory, 'emit');
    component.onChangeCategory(changedCategory);
    fixture.detectChanges();

    expect(component.changedCategory.emit).toHaveBeenCalledWith(
      changedCategory
    );
  });

  it('should have categories populated', () => {
    expect(component.categories).toEqual(MOCK_CATEGORIES);
  });
});
