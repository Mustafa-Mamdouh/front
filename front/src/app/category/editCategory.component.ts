import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { CategoryService } from './category.service';
import { Category } from './category.entity';
@Component({
    selector: 'ntg-add-category',
    templateUrl: './editCategory.component.html'
})
export class EditCategoryComponent {
    id: number;
    category: Category = new Category();
    ngOnInit(): void {
        this.categoryService.getOneCategory(this.id).subscribe(
            (data) => { this.category = data; console.log(this.category) });
    }
    constructor(private categoryService: CategoryService, private changeDetectorRef: ChangeDetectorRef, private router: Router,
        private activatedRoute: ActivatedRoute) {
        activatedRoute.params.subscribe((param: any) => this.id = Number.parseInt(param['id']));
    }
    save() {
        this.categoryService.updateCategory(this.category).subscribe();
    }

}