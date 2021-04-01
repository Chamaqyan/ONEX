import { RegistorView } from './registor.view';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RegistorRoutingModule } from './registor-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [
        RegistorView
    ],
    imports: [
        CommonModule,
        RegistorRoutingModule,
        ReactiveFormsModule,
        SharedModule
    ],
    providers: []
})


export class RegistorModule { }