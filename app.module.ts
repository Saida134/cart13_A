import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ɵInternalFormsSharedModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 

import { RouterModule, RouterOutlet } from '@angular/router';
import { AppRoutes, appRoutes } from './app.routes'; 

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { CommonModule } from '@angular/common';
// import { ProductsComponent } from './products/products.component';
// import { HomeComponent } from './home/home.component';
// import { CartComponent } from './cart/cart.component';
// import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    // ProductsComponent,
    // HomeComponent,
    // CartComponent,
    // SidebarComponent,
  ],
  imports: [
    CommonModule,
    //AppRoutingModule,
    ɵInternalFormsSharedModule,
    RouterOutlet,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutes,
    RouterModule.forChild([
      // your routes for the About module

    ]),
  ],
  
  providers: [],
  // Remove the bootstrap array if it's present
  bootstrap: [AppComponent],
})
export class AppModule {}
