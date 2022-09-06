import { CoffeeBean } from '../model/bean';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';

import { getBeans, getLoadingStatus } from '../state/beans.selectors';
import { loadBeans } from '../state/beans.actions';
import { AppState } from 'src/app/store/app.state';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-bean-list',
  templateUrl: './bean-list.component.html',
  styleUrls: ['./bean-list.component.css']
})
export class BeanListComponent implements OnInit {

  beans!: MatTableDataSource<CoffeeBean>;
  isLoadingResults!: Observable<boolean>;
  displayedColumns: string[] = ['intensifier', 'blend_name', 'variety', 'customColumn1'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.loadBeans();
  }

  loadBeans() {
    this.store.dispatch(loadBeans());
    this.store.pipe(select(getBeans)).subscribe(beansArr => {
      this.beans = new MatTableDataSource(beansArr);
      this.beans.paginator = this.paginator;
    });
    this.isLoadingResults = this.store.pipe(select(getLoadingStatus));
  }

  viewDetails(id? :any) {
    alert(`TODO: View Details of: ${id}`);
  }

}
