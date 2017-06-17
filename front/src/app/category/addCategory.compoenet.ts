import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgForm } from "@angular/forms";

import { CategoryService } from './category.service';
import { Category } from './category.entity';
@Component({
    selector: 'ntg-add-category',
    templateUrl: './addCategory.component.html'
})
export class AddCategory {
    public category=new Category();
    constructor(private categoryService: CategoryService)
    { }
    addCategory() {
        this.categoryService.addCategory(this.category).subscribe();
    }
    onSubmit(form: NgForm) {
        
        // console.log(this.category);
         this.categoryService.addCategory(this.category).subscribe();
    }
}