import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSliderModule } from '@angular/material/slider';
import { MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ITableItem } from '../../interfaces/table-data.interface';
import { NgOnDestroy } from '../../services/ng-on-destroy.service';
import { RangeFilterModule } from '../range-filter/range-filter.module';
import { SearchFilterModule } from '../search-filter/search-filter.module';
import { SelectFilterModule } from '../select-filter/select-filter.module';

import { TableComponent } from './table.component';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableComponent],
      imports: [
        CommonModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatInputModule,
        ReactiveFormsModule,
        MatSliderModule,
        RangeFilterModule,
        SearchFilterModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        SelectFilterModule,
        BrowserAnimationsModule,
      ],
      providers: [NgOnDestroy],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set up dataSource with tableData on ngOnInit', () => {
    const mockTableData: ITableItem[] = [
      { name: 'Item 1', category: 'Category A', price: 10, id: 1 },
      { name: 'Item 2', category: 'Category B', price: 20, id: 2 },
    ];

    component.tableData = mockTableData;
    component.ngOnInit();

    expect(component.dataSource instanceof MatTableDataSource).toBeTruthy();
    expect(component.dataSource.data).toEqual(mockTableData);
  });
});
