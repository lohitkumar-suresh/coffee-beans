import { getStoreStatus } from './../state/beans.selectors';
import { CoffeeBean } from '../model/bean';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';

import { getBeans, getLoadingStatus } from '../state/beans.selectors';
import { loadBeans } from '../state/beans.actions';
import { MatTableDataSource } from '@angular/material/table';
import { AppState } from 'src/app/store/app.state';
@Component({
  selector: 'app-bean-list',
  templateUrl: './bean-list.component.html',
  styleUrls: ['./bean-list.component.css']
})
export class BeanListComponent implements OnInit, AfterViewInit {

  beans!: MatTableDataSource<CoffeeBean>;
  isLoadingResults$!: Observable<boolean>;
  displayedColumns: string[] = ['intensifier', 'blend_name', 'variety', 'customColumn1'];
  storeData!: boolean;

  @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor(private store: Store<AppState>) {

    this.store.pipe(select(getBeans)).subscribe(beansArr => {
      this.beans = new MatTableDataSource(beansArr);
      this.beans.paginator = this.paginator;
    });

    this.isLoadingResults$ = this.store.pipe(select(getLoadingStatus));

   }

  ngOnInit(): void {
    // If store data not present, only then dispatch action
    !this.storeData && this.loadBeans();
  }

  ngAfterViewInit(): void {
    this.beans.paginator = this.paginator;
  }

  loadBeans() {
    this.store.dispatch(loadBeans());
  }
}
