import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { MODULE_COMPONENTS, MODULE_ROUTES } from './dashboard.routes';
import { OrderService } from "./order/order.service";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forChild(MODULE_ROUTES)
    ],
    declarations: [ MODULE_COMPONENTS ],
    providers:[OrderService]
})

export class DashboardModule{}
