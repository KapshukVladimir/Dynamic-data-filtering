import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { SearchFilterComponent } from './search-filter.component';
import { NgOnDestroy } from "../../services/ng-on-destroy.service";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatInputModule } from "@angular/material/input";
import { DEFAULT_DEBOUNCE_TIME } from "../../shared/constnats/default-values";

describe('SearchFilterComponent', () => {
  let component: SearchFilterComponent;
  let fixture: ComponentFixture<SearchFilterComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [SearchFilterComponent],
      imports: [
        ReactiveFormsModule,
        CommonModule,
        BrowserAnimationsModule,
        MatInputModule
      ],
      providers: [NgOnDestroy]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit searchValue on filterControl change', fakeAsync(() => {
    const searchValue = 'test';
    spyOn(component.searchValue, 'emit');
    component.filterControl.setValue(searchValue);

    tick(DEFAULT_DEBOUNCE_TIME);
    fixture.detectChanges();

    // Expecting that the emit method was called with the correct value
    expect(component.searchValue.emit).toHaveBeenCalledWith(searchValue);
  }));

  it('should debounce searchValue emission', (done: DoneFn) => {
    const searchValue1 = 'first';
    const searchValue2 = 'second';
    spyOn(component.searchValue, 'emit').and.callThrough();

    component.filterControl.setValue(searchValue1);
    component.filterControl.setValue(searchValue2);

    setTimeout(() => {
      fixture.detectChanges();
      expect(component.searchValue.emit).toHaveBeenCalledWith(searchValue2);

      done();
    }, DEFAULT_DEBOUNCE_TIME);
  });
});
