import { CoffeeBean } from '../model/bean';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { AppState } from '../store/app.state';
import { Store } from '@ngrx/store';

import { getBeans, getLoadingStatus } from '../state/beans.selectors';
import { loadBeans } from '../state/beans.actions';
@Component({
  selector: 'app-bean-list',
  templateUrl: './bean-list.component.html',
  styleUrls: ['./bean-list.component.css']
})
export class BeanListComponent implements OnInit {


  beans!: Observable<CoffeeBean[]>;
  isLoadingResults!: Observable<boolean>;
  displayedColumns: string[] = ['intensifier', 'blend_name', 'variety', 'customColumn1'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.loadBeans();
  }

  loadBeans() {
    this.beans = this.store.select(getBeans);
    this.isLoadingResults = this.store.select(getLoadingStatus);
    this.store.dispatch(loadBeans());
  }

  viewDetails(id? :any) {
    alert(`TODO: View Details of: ${id}`);
  }

}
