import { CoffeeBean } from './../model/bean';
import { Component, OnInit, ViewChild } from '@angular/core';
import { BeanService } from '../services/bean.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-bean-list',
  templateUrl: './bean-list.component.html',
  styleUrls: ['./bean-list.component.css']
})
export class BeanListComponent implements OnInit {

  isLoadingResults = true;
  dataSource!: MatTableDataSource<CoffeeBean>;
  beans: any;
  displayedColumns: string[] = ['id', 'intensifier', 'blend_name', 'variety', 'customColumn1'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor(private beanService: BeanService) { }

  ngOnInit(): void {
    this.loadBeans();
  }

  loadBeans() {
    this.beanService.getBeans().subscribe((data) => {
      this.beans = data;
      // Assign the data to the data source for the table to render
      this.dataSource = new MatTableDataSource(this.beans);
      this.dataSource.paginator = this.paginator;
      this.isLoadingResults = false;
    });
  }

  viewDetails(id? :any) {
    alert(`TODO: View Details of: ${id}`);
  }

}
