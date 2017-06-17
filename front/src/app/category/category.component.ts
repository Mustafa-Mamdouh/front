import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router'
import { CategoryService } from './category.service';
import { Category } from './category.entity';

@Component({
    selector: 'pm-app',
    templateUrl: './category.component.html'

})
export class CategoryComponent implements OnInit {
    categories: Category[] = [];
    editCategory: Category = new Category();
    rowNumber: number;
    deleteCategory: Category = new Category();
    newCategory: Category = new Category();
    ngOnInit(): void {
        this.categoryService.getAllCategories().subscribe(
            (data: any) => {
                const myArray = [];
                for (let key in data) {
                    myArray.push(data[key]);
                }
                this.categories = data;
            });
    }
    deleteService() {
        this.categoryService.deleteCategory(this.categories[this.rowNumber].id).subscribe(data => {
            console.log(JSON.stringify(data));
            if (data.messageResponseObj.code == "000") {
                //sucess
                this.categories.splice(this.rowNumber, 1);
                this.changeDetectorRef.detectChanges();

            }
            else {
                //fail
                
                alert(fail);
            }
        });
    }
    edit(categoryRow: number) {
        this.rowNumber = categoryRow;
        this.editCategory.id = this.categories[categoryRow].id;
        this.editCategory.name = this.categories[categoryRow].name;
        this.editCategory.type = this.categories[categoryRow].type;
    }
    deleteCategoryRow(rowIndex: number) {
        this.rowNumber = rowIndex;
        this.deleteCategory.name = this.categories[rowIndex].name;

    }
    updateCategory() {
        this.categoryService.updateCategory(this.editCategory).subscribe();
        this.categories[this.rowNumber].name = this.editCategory.name;
        this.categories[this.rowNumber].type = this.editCategory.type;
    }
    addCategory() {
        this.categoryService.addCategory(this.newCategory).subscribe(
            (data: any) => {
                this.categories.push(data);
            }
        );
        this.newCategory.name = "";
        this.newCategory.type = "";

    }

    view(categoryRow: number) {
        this.router.navigate(['component', this.categories[categoryRow].id]);

    }
    constructor(private categoryService: CategoryService, private changeDetectorRef: ChangeDetectorRef, private router: Router) { }
}