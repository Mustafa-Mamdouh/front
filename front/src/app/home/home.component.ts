import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router'
import { HomeService } from './home.service';
import { Info } from './info.entity';
@Component({
    selector: 'ntg-home',
    templateUrl: './home.component.html'

})
export class HomeComponent implements OnInit {
    info: Info=new Info;
    ngOnInit(): void {
        this.homeService.getInfo().subscribe(
            (data: any) => {
                this.info = data;
                
            }
        )
    }

    constructor(private homeService: HomeService) { }

}