import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { CategoryComponent } from '../category/category.component'
import { AddCategory } from '../category/addCategory.compoenet'
import { EditCategoryComponent } from '../category/editCategory.component'
import { AddOrderComponent } from '../Order/addOrder.component'
import { ViewOrder } from '../Order/viewOrder.component';
import { ComponentComponent } from '../Component/component.component'

import {ServiceComponent} from'../Service/service.component'
import { HomeComponent } from '../home/home.component'

const APP_ROUTE: Routes = [
    { path: '', component: HomeComponent },
    { path: 'addCategory', component: AddCategory },
    { path: 'editCategory/:id', component: EditCategoryComponent },
    { path: 'order/addorder', component: AddOrderComponent },
    { path: 'order/viewAll', component: ViewOrder },
    { path: 'component/:id', component: ComponentComponent },
    { path: 'category', component: CategoryComponent },
    { path: 'service', component: ServiceComponent }
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
