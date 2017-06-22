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


//Yasmeen
import { DownloadTypeComponent } from "./DownloadType/DownloadType.component";
import { DownloadTypeService } from "./DownloadType/downloadType.service";
import { CancellationReasonComponent } from "./CancelationReason/CancelationReason.component";
import { CancelationReasonService } from "./CancelationReason/CancelationReason.service";
import { SellingTypeService } from "./SellingType/SellingType.service";
import { SellingTypeComponent } from "./SellingType/SellingType.component";

//dah ana
import{ServiceComponent} from'./Service/service.component'
import { HomeComponent } from './home/home.component';
import { HomeService } from './home/home.service';
import{ServiceService} from'./Service/service.service'

//Sherif 
import { BandwidthComponent } from './Bandwidth/bandwidth.component'
import { DiscountCategoryComponent } from './DiscountCategory/discountCategory.component'
import { PriceBasisComponent } from './priceBasis/priceBasis.component';
import { ServiceTypeComponent } from './ServiceType/serviceType.component';
import { BandwidthService } from './Bandwidth/bandwidth.service'
import { DiscountCategoryService } from './DiscountCategory/discountCategory.service'
import { PriceBasisService } from './priceBasis/priceBasis.service';
import { ServiceTypeService } from './ServiceType/serviceType.service';

//Shaban
import { ContractTerm } from './contractTerm/contractTerm.service'
import { contractTermComponent } from './contractTerm/contractTerm/contractTerm.component'
import { modifyReason } from './modifyReason/modifyReason.service'
import { modifyReasonComponent } from './modifyReason/modifyReason/modifyReason.component'
import { serviceMigration } from './serviceMigration/serviceMigration/serviceMigration.service'
import { serviceMigrationComponent } from './serviceMigration/serviceMigration/serviceMigration/serviceMigration.component'



@NgModule({
  providers: [CategoryService, OrderService, ComponentService, HomeService,ServiceService,LookupService,
  DownloadTypeService,CancelationReasonService,SellingTypeService,
  BandwidthService,DiscountCategoryService,PriceBasisService,ServiceTypeService,ContractTerm,modifyReason
  ,serviceMigration],
  imports: [BrowserModule, FormsModule, HttpModule, AppRoutingModule],
  declarations: [AppComponent, CategoryComponent, AddCategory, EditCategoryComponent,
    AddOrderComponent, ViewOrder, KeysPipe, ComponentComponent, HomeComponent,ServiceComponent,DeliveryTypeComponent
    ,ServiceCategoryComponent,EmployeeDiscountComponent,DownloadTypeComponent,CancellationReasonComponent,SellingTypeComponent,

    BandwidthComponent,DiscountCategoryComponent,PriceBasisComponent,ServiceTypeComponent,
    contractTermComponent,modifyReasonComponent,serviceMigrationComponent],

  bootstrap: [AppComponent]
})
export class AppModule { }
