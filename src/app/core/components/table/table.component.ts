import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { ETableColumnType } from '../../enums/table-column.enum';
import { ITableItem } from '../../interfaces/table-data.interface';
import { NgOnDestroy } from '../../services/ng-on-destroy.service';
import { DEFAULT_PAGE_SIZE_OPTIONS } from '../../shared/constants/default-values';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [NgOnDestroy],
})
export class TableComponent implements OnInit, AfterViewInit {
  @Input() tableData: ITableItem[] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  public tableColumnType = ETableColumnType;
  public currentCategory = '';
  public displayedColumns: string[] = [
    ETableColumnType.NAME,
    ETableColumnType.CATEGORY,
    ETableColumnType.PRICE,
  ];

  public dataSource!: MatTableDataSource<ITableItem>;
  public readonly DEFAULT_PAGE_SIZE_OPTIONS = DEFAULT_PAGE_SIZE_OPTIONS;

  public ngOnInit(): void {
    this.dataSource = new MatTableDataSource<ITableItem>(this.tableData);
  }

  public ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  public onSearchValueChanged(searchValue: string): void {
    this.dataSource.filter = searchValue;
  }

  public onStartValueChanged(startValue: number): void {
    this.dataSource.data = this.tableData;
    this.dataSource.data = this.dataSource.data.filter(
      (tableItem: ITableItem) => tableItem.price > startValue
    );
  }

  public onEndValueChanged(endValue: number): void {
    this.dataSource.data = this.tableData;
    this.dataSource.data = this.dataSource.data.filter(
      (tableItem: ITableItem) => tableItem.price < endValue
    );
  }

  public onChangedCategory(changedCategory: string): void {
    this.currentCategory = changedCategory;
    this.dataSource.filter = changedCategory;
  }
}
