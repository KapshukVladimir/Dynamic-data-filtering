import { Component, OnInit, Self } from '@angular/core';
import { TableDataService } from "../../services/table-data.service";
import { ITableItem } from "../../interfaces/table-data.interface";
import { NgOnDestroy } from "../../services/ng-on-destroy.service";
import { takeUntil } from "rxjs";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  providers: [NgOnDestroy]
})
export class HomePageComponent implements OnInit {
  public tableData: ITableItem[] = []

  constructor(
    @Self() private readonly ngOnDestroy$: NgOnDestroy,
    private tableDataService: TableDataService
  ) {
  }

  public ngOnInit(): void {
    this.tableDataService.getAllTableData()
      .pipe(
        takeUntil(this.ngOnDestroy$)
      )
      .subscribe((tableData: ITableItem[]) => {
        this.tableData = tableData;
      });
  }


}
