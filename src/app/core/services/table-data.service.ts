import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ITableItem } from '../interfaces/table-data.interface';
import { MOCK_DATA } from '../shared/constants/mock-data';

@Injectable({
  providedIn: 'root',
})
export class TableDataService {
  constructor() {}

  public getAllTableData(): Observable<ITableItem[]> {
    return of(MOCK_DATA);
  }
}
