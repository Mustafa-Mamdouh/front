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
import { LookupService } from './LookupTables/Lookup.service';
import { DeliveryTypeComponent } from './LookupTables/DeliveryType.component';
import { ServiceCategoryComponent } from './LookupTables/ServiceCategory.Component';
import { EmployeeDiscountComponent } from './LookupTables/EmployeeDiscount.Component';

import{ServiceComponent} from'./Service/service.component'
import { HomeComponent } from './home/home.component';
import { HomeService } from './home/home.service';
import{ServiceService} from'./Service/service.service'
@NgModule({
  providers: [CategoryService, OrderService, ComponentService, HomeService,ServiceService,LookupService],
  imports: [BrowserModule, FormsModule, HttpModule, AppRoutingModule],
  declarations: [AppComponent, CategoryComponent, AddCategory, EditCategoryComponent,
    AddOrderComponent, ViewOrder, KeysPipe, ComponentComponent, HomeComponent,ServiceComponent,DeliveryTypeComponent
    ,ServiceCategoryComponent,EmployeeDiscountComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }