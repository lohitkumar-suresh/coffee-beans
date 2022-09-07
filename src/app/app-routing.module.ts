import { BeanDetailComponent } from './beans/bean-detail/bean-detail.component';
import { BeanListComponent } from './beans/beans-list/bean-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'beans', component: BeanListComponent
  },
  { path: 'view/:id', component: BeanDetailComponent },
  { path: '**', redirectTo: 'beans', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
