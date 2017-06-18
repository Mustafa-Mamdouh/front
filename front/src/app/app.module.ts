import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { CategoryService } from './category/category.service'
import { CategoryComponent } from './category/category.component';
import { AddCategory } from './category/addCategory.compoenet';
import { AppRoutingModule } from './navigation/app.nav';
import { EditCategoryComponent } from './category/editCategory.component';
import { OrderService } from './Order/order.service';
import { AddOrderComponent } from './Order/addOrder.component';
import { ViewOrder } from './Order/viewOrder.component'
import { KeysPipe } from './Order/key.pipe'
import { ComponentService } from './Component/component.service';
import { ComponentComponent } from './Component/component.component';
import { ServiceComponent } from './Service/service.component'
import { HomeComponent } from './home/home.component';
import { HomeService } from './home/home.service';
import { ServiceService } from './Service/service.service'
import { BandwidthComponent } from './Bandwidth/bandwidth.component'
import { BandwidthService } from './Bandwidth/bandwidth.service'
import { DiscountCategoryComponent } from './DiscountCategory/discountCategory.component'
import { DiscountCategoryService } from './DiscountCategory/discountCategory.service'
import { PriceBasisComponent } from './priceBasis/priceBasis.component'
import { PriceBasisService } from './priceBasis/priceBasis.service'
import { ServiceTypeComponent } from './ServiceType/serviceType.component'
import { ServiceTypeService } from './ServiceType/serviceType.service'
@NgModule({
  providers: [CategoryService, OrderService, ComponentService, HomeService, ServiceService, BandwidthService, DiscountCategoryService,
    PriceBasisService, ServiceTypeService],
  imports: [BrowserModule, FormsModule, HttpModule, AppRoutingModule],
  declarations: [AppComponent, CategoryComponent, AddCategory, EditCategoryComponent,
    AddOrderComponent, ViewOrder, KeysPipe, ComponentComponent, HomeComponent, ServiceComponent, BandwidthComponent,
    DiscountCategoryComponent, PriceBasisComponent, ServiceTypeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
