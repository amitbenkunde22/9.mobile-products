import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './shared/components/product/product.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { FormsModule } from '@angular/forms';
import { PostsComponent } from './shared/components/posts/posts.component';
import { MobileComponent } from './shared/components/mobile/mobile.component';
import { TabComponent } from './shared/components/tab/tab.component';
import { TabFor2Component } from './shared/components/tab-for2/tab-for2.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductsComponent,
    PostsComponent,
    MobileComponent,
    TabComponent,
    TabFor2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
