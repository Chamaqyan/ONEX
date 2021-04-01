import { SharedModule } from './../../shared/shared.module';
import { LoginRoutingModule } from './login-routing.module';
import { LoginView } from './login.view';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        LoginView
    ],
    imports: [
        CommonModule,
        LoginRoutingModule,
        ReactiveFormsModule,
        SharedModule
    ],
    providers: []
})


export class LoginModule { }