import { CoffeeBean } from './../model/bean';
import { Store, select } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getBeanById } from '../state/beans.selectors';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-bean-detail',
  templateUrl: './bean-detail.component.html',
  styleUrls: ['./bean-detail.component.css']
})
export class BeanDetailComponent implements OnInit {
  bean!: CoffeeBean | null;
  beanId!: number | null;
  constructor(private route: ActivatedRoute, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.beanId = +params.get('id')!;
      this.store.pipe(select(getBeanById(this.beanId))).subscribe((bean) => {
        this.bean = bean;
      });
    });


  }

}
