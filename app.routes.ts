import { Routes, RouterModule } from '@angular/router';
//import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
//import { ProductsComponent } from './products/products.component'; // Uncomment if you have this component
//import { CartComponent } from './cart/cart.component'; // Uncomment if you have this component
//import { SidebarComponent } from './sidebar/sidebar.component'; // Uncomment if you have this component
 
export const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  //{ path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  //{ path: 'products', component: ProductsComponent }, // Uncomment if you have this component
  //{ path: 'cart', component: CartComponent }, // Uncomment if you have this component
  //{ path: 'sidebar', component: SidebarComponent }, // Uncomment if you have this component
];

export const AppRoutes = RouterModule.forRoot(appRoutes);