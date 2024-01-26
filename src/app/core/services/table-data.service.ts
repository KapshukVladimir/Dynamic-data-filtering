import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {ITableItem} from "../interfaces/table-data.interface";
import {MOCK_DATA, TEST_MOCK} from "../shared/constnats/mock-data";

@Injectable({
  providedIn: 'root'
})
export class TableDataService {

  constructor() { }


  public getAllTableData(): Observable<ITableItem[]> {
    return of(MOCK_DATA)
  }
}
