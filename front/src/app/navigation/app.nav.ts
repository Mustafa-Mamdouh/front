import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { CategoryComponent } from '../category/category.component'
import { AddCategory } from '../category/addCategory.compoenet'
import { EditCategoryComponent } from '../category/editCategory.component'
import { AddOrderComponent } from '../Order/addOrder.component'
import { ViewOrder } from '../Order/viewOrder.component';
import { ComponentComponent } from '../Component/component.component'
import { DeliveryTypeComponent } from '../LookupTables/DeliveryType.component'
import { ServiceCategoryComponent } from '../LookupTables/ServiceCategory.Component';
import { EmployeeDiscountComponent } from '../LookupTables/EmployeeDiscount.Component';
import { ServiceComponent } from '../Service/service.component'
import { HomeComponent } from '../home/home.component'

import { DownloadTypeComponent } from "../DownloadType/DownloadType.component";
import { CancellationReasonComponent } from "../CancelationReason/CancelationReason.component";
import { SellingTypeComponent } from "../SellingType/SellingType.component";

import { BandwidthComponent } from '../Bandwidth/bandwidth.component'
import { DiscountCategoryComponent } from '../DiscountCategory/discountCategory.component'
import { PriceBasisComponent } from '../priceBasis/priceBasis.component';
import { ServiceTypeComponent } from '../ServiceType/serviceType.component';
const APP_ROUTE: Routes = [
    { path: '', component: HomeComponent },
    { path: 'addCategory', component: AddCategory },
    { path: 'editCategory/:id', component: EditCategoryComponent },
    { path: 'order/addorder', component: AddOrderComponent },
    { path: 'order/viewAll', component: ViewOrder },
    { path: 'component/:id', component: ComponentComponent },
    { path: 'category', component: CategoryComponent },
    { path: 'service', component: ServiceComponent },
    { path: 'DeliveryType', component: DeliveryTypeComponent },
    { path: 'ServiceCategory', component: ServiceCategoryComponent },
    { path: 'Discount', component: EmployeeDiscountComponent },
    { path: 'downloadType', component: DownloadTypeComponent },
    { path: 'cancellationReason', component: CancellationReasonComponent },
    { path: 'SellingTypeComponent', component: SellingTypeComponent },
    { path: 'bandwidth', component: BandwidthComponent },
    { path: 'discountCategory', component: DiscountCategoryComponent },
    { path: 'pricebasis', component: PriceBasisComponent },
    { path: 'servicetype', component: ServiceTypeComponent }
];
@NgModule({
    imports: [
        RouterModule.forRoot(
            APP_ROUTE,
        )
    ],
    exports: [
        RouterModule
    ],

})
export class AppRoutingModule { }
