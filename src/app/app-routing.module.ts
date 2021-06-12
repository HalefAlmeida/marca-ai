import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPageComponent } from './dashboard/dashboard-page/dashboard-page.component';
import { ProductsPageComponent } from './products/products-page/products-page.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardPageComponent,
  },
  {
    path: 'products',
    //Lazy loading da rota
    // loadChildren: () =>
    //   import('./products/products.module').then((m) => m.ProductsModule),
    component: ProductsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
